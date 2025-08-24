'use client';

import { useState } from 'react';
import { usePropertySearch } from '@/lib/hooks/useProbateData';
import { Search, MapPin, Home, DollarSign } from 'lucide-react';

export default function EnhancedPropertySearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const { searchResults, isLoading, isError } = usePropertySearch(searchQuery);

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-secondary-900 mb-4">
        Search Probate Properties
      </h3>
      
      {/* Search Input */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 h-5 w-5" />
        <input
          type="text"
          placeholder="Enter city, zip code, or property details..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="text-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto" />
          <p className="text-secondary-600 mt-2">Searching properties...</p>
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="text-center py-8">
          <p className="text-red-600">Error loading properties. Please try again.</p>
        </div>
      )}

      {/* Search Results */}
      {searchResults.length > 0 && (
        <div className="space-y-4">
          <h4 className="font-medium text-secondary-900">
            Found {searchResults.length} properties
          </h4>
          {searchResults.map((property) => (
            <div
              key={property.id}
              className="border border-secondary-200 rounded-lg p-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-secondary-100 rounded-lg flex items-center justify-center">
                    <Home className="h-8 w-8 text-secondary-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h5 className="font-medium text-secondary-900 mb-1">
                    {property.address}
                  </h5>
                  <div className="flex items-center gap-4 text-sm text-secondary-600 mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {property.city}, {property.state} {property.zip}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {property.price.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-secondary-500">
                    <span>{property.bedrooms} beds</span>
                    <span>{property.bathrooms} baths</span>
                    <span>{property.squareFeet.toLocaleString()} sq ft</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      property.status === 'available' ? 'bg-green-100 text-green-800' :
                      property.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {property.status}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* No Results */}
      {searchQuery && !isLoading && !isError && searchResults.length === 0 && (
        <div className="text-center py-8">
          <p className="text-secondary-600">No properties found matching your search.</p>
          <p className="text-sm text-secondary-500 mt-1">
            Try adjusting your search terms or contact us for assistance.
          </p>
        </div>
      )}

      {/* Initial State */}
      {!searchQuery && !isLoading && (
        <div className="text-center py-8 text-secondary-500">
          <Search className="h-12 w-12 mx-auto mb-3 text-secondary-300" />
          <p>Enter a search term to find probate properties</p>
        </div>
      )}
    </div>
  );
}
