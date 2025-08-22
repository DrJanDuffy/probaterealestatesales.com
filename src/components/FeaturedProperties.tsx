'use client';

/// <reference path="../types/realscout.d.ts" />

export default function FeaturedProperties() {
  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Discover our carefully curated selection of properties available through probate sales. 
            Each property offers unique value and potential for buyers and investors.
          </p>
        </div>

        {/* RealScout Widget */}
        <div className="w-full">
          <realscout-office-listings 
            agent-encoded-id="QWdlbnQtMjI1MDUw" 
            sort-order="STATUS_AND_SIGNIFICANT_CHANGE" 
            listing-status="For Sale" 
            property-types="MF,SFR,OTHER,LAL" 
            price-min="500000" 
            price-max="750000"
          />
        </div>

        {/* View All Properties CTA */}
        <div className="text-center mt-12">
          <a href="http://drjanduffy.realscout.com/onboarding" className="btn-primary inline-block">
            View All Properties
          </a>
        </div>
      </div>
    </section>
  );
}
