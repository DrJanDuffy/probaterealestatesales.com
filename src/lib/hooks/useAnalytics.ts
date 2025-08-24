'use client';

import { track } from '@vercel/analytics';

// Analytics events for probate real estate business
export const useAnalytics = () => {
  // Track property views
  const trackPropertyView = (propertyId: string, propertyAddress: string, city: string) => {
    track('property_view', {
      property_id: propertyId,
      property_address: propertyAddress,
      city: city,
      category: 'probate_real_estate'
    });
  };

  // Track contact form submissions
  const trackContactSubmission = (source: string, propertyInterest?: string) => {
    const properties = {
      source: source,
      category: 'lead_generation'
    };
    
    if (propertyInterest) {
      (properties as any).property_interest = propertyInterest;
    }
    
    track('contact_submission', properties);
  };

  // Track phone calls
  const trackPhoneCall = (source: string) => {
    track('phone_call', {
      source: source,
      category: 'lead_generation'
    });
  };

  // Track consultation bookings
  const trackConsultationBooking = (source: string, preferredDate?: string) => {
    const properties = {
      source: source,
      category: 'lead_generation'
    };
    
    if (preferredDate) {
      (properties as any).preferred_date = preferredDate;
    }
    
    track('consultation_booking', properties);
  };

  // Track FAQ interactions
  const trackFAQInteraction = (question: string, category: string) => {
    track('faq_interaction', {
      question: question,
      category: category,
      category_type: 'user_engagement'
    });
  };

  // Track location-specific searches
  const trackLocationSearch = (location: string, searchType: string) => {
    track('location_search', {
      location: location,
      search_type: searchType,
      category: 'user_engagement'
    });
  };

  // Track page views with custom properties
  const trackPageView = (pageName: string, properties?: Record<string, any>) => {
    const baseProperties = {
      page_name: pageName,
      category: 'navigation'
    };
    
    if (properties) {
      Object.assign(baseProperties, properties);
    }
    
    track('page_view', baseProperties);
  };

  // Track conversion events
  const trackConversion = (conversionType: string, value?: number, currency: string = 'USD') => {
    const properties = {
      conversion_type: conversionType,
      currency: currency,
      category: 'business_metrics'
    };
    
    if (value !== undefined) {
      (properties as any).value = value;
    }
    
    track('conversion', properties);
  };

  // Track user engagement
  const trackEngagement = (action: string, element: string, context?: string) => {
    track('user_engagement', {
      action: action,
      element: element,
      context: context,
      category: 'user_behavior'
    });
  };

  // Track market research
  const trackMarketResearch = (researchType: string, location: string) => {
    track('market_research', {
      research_type: researchType,
      location: location,
      category: 'market_analysis'
    });
  };

  return {
    trackPropertyView,
    trackContactSubmission,
    trackPhoneCall,
    trackConsultationBooking,
    trackFAQInteraction,
    trackLocationSearch,
    trackPageView,
    trackConversion,
    trackEngagement,
    trackMarketResearch,
  };
};

// Predefined tracking functions for common events
export const trackProbateServiceInterest = (service: string, location: string) => {
  track('probate_service_interest', {
    service: service,
    location: location,
    category: 'service_inquiry'
  });
};

export const trackPropertySearch = (searchQuery: string, resultsCount: number) => {
  track('property_search', {
    search_query: searchQuery,
    results_count: resultsCount,
    category: 'property_search'
  });
};

export const trackTimelineInquiry = (timelineType: string, location: string) => {
  track('timeline_inquiry', {
    timeline_type: timelineType,
    location: location,
    category: 'information_request'
  });
};

export const trackCostCalculatorUsage = (propertyValue: number, location: string) => {
  track('cost_calculator_usage', {
    property_value: propertyValue,
    location: location,
    category: 'tool_usage'
  });
};
