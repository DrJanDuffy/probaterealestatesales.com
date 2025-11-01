import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedProperties from '@/components/FeaturedProperties';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import PropertyValuationCalculator from '@/components/PropertyValuationCalculator';
import ProbateTimeline from '@/components/ProbateTimeline';
import ProbatePropertyChecklist from '@/components/ProbatePropertyChecklist';
import ProbateCostCalculator from '@/components/ProbateCostCalculator';
import FAQ from '@/components/FAQ';
import SchemaMarkup from '@/components/SchemaMarkup';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <ProbateTimeline />
      <ProbatePropertyChecklist />
      <ProbateCostCalculator />
      <FeaturedProperties />
      <PropertyValuationCalculator />
      
      {/* RealScout Property Listings */}
      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Las Vegas Probate Homes for Sale
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Browse our current inventory of probate homes in Las Vegas. 
              These probate properties are available for immediate purchase with court-approved sales and expert guidance.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw" 
              sort-order="PRICE_LOW" 
              listing-status="For Sale,For Rent" 
              property-types="MF,SFR,OTHER,LAL" 
              price-min="500000" 
              price-max="750000">
            </realscout-office-listings>
          </div>
        </div>
      </section>
      
      <WhyChooseUs />
      <FAQ />
      <Testimonials />
      <ContactSection />
      <SchemaMarkup type="home" />
    </main>
  );
}
