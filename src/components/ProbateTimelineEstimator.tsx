'use client';

import { useState } from 'react';
import { CalendlyScheduleButton } from '@/components/calendly/CalendlyScheduleButton';

/** Interactive probate timeline tool (no form element — uses button + local state). */
export function ProbateTimelineEstimator() {
  const [showResults, setShowResults] = useState(false);

  return (
    <>
      <div className="timeline-calculator space-y-6">
        <div>
          <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
            Property Location:
          </label>
          <select
            id="location"
            name="location"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>Clark County</option>
            <option>Washoe County</option>
            <option>Other Nevada County</option>
          </select>
        </div>

        <div>
          <label htmlFor="status" className="block text-gray-700 font-semibold mb-2">
            Current Status:
          </label>
          <select
            id="status"
            name="status"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>No attorney yet</option>
            <option>Attorney hired, no letters</option>
            <option>Letters testamentary issued</option>
            <option>Ready to sell</option>
          </select>
        </div>

        <div>
          <label htmlFor="type" className="block text-gray-700 font-semibold mb-2">
            Property Type:
          </label>
          <select
            id="type"
            name="type"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option>Single family home</option>
            <option>Condo/Townhome</option>
            <option>Investment property</option>
            <option>Vacant land</option>
          </select>
        </div>

        <button
          type="button"
          onClick={() => setShowResults(true)}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
        >
          Get Your Timeline
        </button>
      </div>

      {showResults ? (
        <div className="results mt-8 p-6 bg-blue-50 rounded-lg">
          <h4 className="text-xl font-bold text-center mb-4 text-blue-900">
            Your Estimated Timeline:
          </h4>
          <div className="space-y-3 text-center">
            <p className="traditional text-lg">
              Traditional Probate: <span className="font-bold text-red-600">6-8 months</span>
            </p>
            <p className="our-service text-lg">
              With Our Services: <span className="font-bold text-green-600">45-60 days</span>
            </p>
            <p className="savings text-xl font-bold text-blue-600">
              Time Saved: <span>4-6 months</span>
            </p>
            <p className="text-sm text-gray-700 pt-2">
              Want a personalized plan? Schedule a short call—no form required.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-4">
              <CalendlyScheduleButton variant="primary" />
              <a
                href="https://drjanduffy.realscout.com/onboarding"
                className="cta bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 inline-block text-center"
              >
                Start Accelerated Process Today
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
