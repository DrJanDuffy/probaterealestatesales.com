'use client';

import { useAnalytics, trackProbateServiceInterest } from '@/lib/hooks/useAnalytics';
import { Phone, Calendar, Search, Calculator } from 'lucide-react';

export default function AnalyticsExample() {
  const analytics = useAnalytics();

  const handlePhoneCall = () => {
    analytics.trackPhoneCall('homepage_cta');
    // Your existing phone call logic
    window.location.href = 'tel:+1-702-830-9222';
  };

  const handleConsultationBooking = () => {
    analytics.trackConsultationBooking('homepage_consultation');
    // Your existing consultation logic
    window.open('http://drjanduffy.realscout.com/onboarding', '_blank');
  };

  const handleServiceInterest = (service: string) => {
    trackProbateServiceInterest(service, 'Las Vegas');
    // Track which services generate the most interest
  };

  const handleCostCalculator = (propertyValue: number) => {
    analytics.trackCostCalculatorUsage(propertyValue, 'Las Vegas');
    // Your existing calculator logic
  };

  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg p-6">
      <h3 className="text-xl font-semibold text-secondary-900 mb-4">
        Track Your Business Growth
      </h3>
      <p className="text-secondary-600 mb-6">
        These analytics will help you understand which services and locations generate the most interest.
      </p>
      
      <div className="grid md:grid-cols-2 gap-4">
        {/* Phone Call Tracking */}
        <button
          type="button"
          onClick={handlePhoneCall}
          className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <Phone className="h-6 w-6 text-primary-600" />
          <div className="text-left">
            <div className="font-medium text-secondary-900">Call Now</div>
            <div className="text-sm text-secondary-600">Track phone call leads</div>
          </div>
        </button>

        {/* Consultation Booking Tracking */}
        <button
          type="button"
          onClick={handleConsultationBooking}
          className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <Calendar className="h-6 w-6 text-primary-600" />
          <div className="text-left">
            <div className="font-medium text-secondary-900">Book Consultation</div>
            <div className="text-sm text-secondary-600">Track consultation interest</div>
          </div>
        </button>

        {/* Service Interest Tracking */}
        <button
          type="button"
          onClick={() => handleServiceInterest('probate_sales')}
          className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <Search className="h-6 w-6 text-primary-600" />
          <div className="text-left">
            <div className="font-medium text-secondary-900">Probate Sales</div>
            <div className="text-sm text-secondary-600">Track service interest</div>
          </div>
        </button>

        {/* Cost Calculator Tracking */}
        <button
          type="button"
          onClick={() => handleCostCalculator(500000)}
          className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
        >
          <Calculator className="h-6 w-6 text-primary-600" />
          <div className="text-left">
            <div className="font-medium text-secondary-900">Cost Calculator</div>
            <div className="text-sm text-secondary-600">Track tool usage</div>
          </div>
        </button>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-medium text-blue-900 mb-2">Analytics Benefits:</h4>
        <ul className="text-sm text-blue-800 space-y-1">
          <li>• Track which services generate the most leads</li>
          <li>• Understand client behavior and preferences</li>
          <li>• Optimize marketing spend and conversion rates</li>
          <li>• Identify high-value locations and services</li>
        </ul>
      </div>
    </div>
  );
}
