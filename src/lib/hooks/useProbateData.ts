import useSWR from 'swr';

// Types for probate real estate data
export interface ProbateProperty {
  id: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  status: 'available' | 'pending' | 'sold';
  probateStage: 'court-approval' | 'marketing' | 'contract' | 'closing';
  estimatedTimeline: string;
  imageUrl: string;
}

export interface MarketData {
  averageDaysOnMarket: number;
  averagePrice: number;
  totalProperties: number;
  marketTrend: 'rising' | 'stable' | 'declining';
}

// Fetcher function for SWR
const fetcher = (url: string) => fetch(url).then(res => res.json());

// Hook for fetching probate properties
export function useProbateProperties(city?: string) {
  const url = city 
    ? `/api/probate-properties?city=${encodeURIComponent(city)}`
    : '/api/probate-properties';
    
  const { data, error, isLoading, mutate } = useSWR<ProbateProperty[]>(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    refreshInterval: 300000, // Refresh every 5 minutes
    errorRetryCount: 3,
  });

  return {
    properties: data || [],
    isLoading,
    isError: error,
    error,
    refresh: mutate,
  };
}

// Hook for fetching market data
export function useMarketData(city?: string) {
  const url = city 
    ? `/api/market-data?city=${encodeURIComponent(city)}`
    : '/api/market-data';
    
  const { data, error, isLoading, mutate } = useSWR<MarketData>(url, fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: true,
    refreshInterval: 600000, // Refresh every 10 minutes
    errorRetryCount: 3,
  });

  return {
    marketData: data,
    isLoading,
    isError: error,
    error,
    refresh: mutate,
  };
}

// Hook for contact form submission with optimistic updates
export function useContactSubmission() {
  const { data, error, isLoading, mutate } = useSWR('/api/contact', fetcher, {
    revalidateOnFocus: false,
    revalidateOnReconnect: false,
  });

  const submitContact = async (contactData: {
    name: string;
    email: string;
    phone: string;
    message: string;
    propertyInterest?: string;
  }) => {
    try {
      // Optimistic update
      mutate({ ...data, ...contactData }, false);
      
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contactData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit contact form');
      }

      // Revalidate with actual data
      mutate();
      return { success: true };
    } catch (err) {
      // Revert optimistic update on error
      mutate();
      return { success: false, error: err.message };
    }
  };

  return {
    submitContact,
    isLoading,
    isError: error,
    error,
  };
}

// Hook for property search with debouncing
export function usePropertySearch(query: string, delay = 500) {
  const { data, error, isLoading } = useSWR(
    query ? `/api/property-search?q=${encodeURIComponent(query)}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      dedupingInterval: delay,
    }
  );

  return {
    searchResults: data || [],
    isLoading,
    isError: error,
    error,
  };
}
