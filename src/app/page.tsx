import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import FeaturedProperties from '@/components/FeaturedProperties';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import HomePageNavigation from '@/components/HomePageNavigation';
import SchemaMarkup from '@/components/SchemaMarkup';
import Link from 'next/link';
import { ArrowRight, Clock, FileText, Calculator, Home, HelpCircle } from 'lucide-react';

// Lazy load heavy components for better performance
const ProbateTimeline = dynamic(() => import('@/components/ProbateTimeline'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading timeline...</div>
});

const ProbatePropertyChecklist = dynamic(() => import('@/components/ProbatePropertyChecklist'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading checklist...</div>
});

const ProbateCostCalculator = dynamic(() => import('@/components/ProbateCostCalculator'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading calculator...</div>
});

const PropertyValuationCalculator = dynamic(() => import('@/components/PropertyValuationCalculator'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading valuation tool...</div>
});

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading FAQ...</div>
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Quick Navigation */}
      <HomePageNavigation />
      
      {/* Services Overview */}
      <Services />
      
      {/* Probate Timeline Section */}
      <section id="timeline" className="scroll-mt-20">
        <div className="container-max py-8 border-b border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-2">Nevada Probate Timeline</h2>
              <p className="text-secondary-600">Complete 6-8 month process breakdown</p>
            </div>
            <Link 
              href="/resources/#probate-timeline" 
              className="hidden md:flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              View Full Timeline
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <ProbateTimeline />
          <div className="text-center mt-6 md:hidden">
            <Link 
              href="/resources/#probate-timeline" 
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              View Full Timeline
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Property Checklist Section */}
      <section id="checklist" className="scroll-mt-20 bg-gray-50">
        <div className="container-max py-8 border-b border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-2">Probate Property Checklist</h2>
              <p className="text-secondary-600">Essential steps for selling inherited property</p>
            </div>
            <Link 
              href="/resources/#property-checklist" 
              className="hidden md:flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              View Full Checklist
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <ProbatePropertyChecklist />
          <div className="text-center mt-6 md:hidden">
            <Link 
              href="/resources/#property-checklist" 
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              View Full Checklist
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Cost Calculator Section */}
      <section id="cost-calculator" className="scroll-mt-20">
        <div className="container-max py-8 border-b border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-2">Probate Cost Calculator</h2>
              <p className="text-secondary-600">Estimate total probate costs and fees</p>
            </div>
            <Link 
              href="/resources/#cost-calculator" 
              className="hidden md:flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              View Full Calculator
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <ProbateCostCalculator />
          <div className="text-center mt-6 md:hidden">
            <Link 
              href="/resources/#cost-calculator" 
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              View Full Calculator
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Featured Properties */}
      <section id="properties" className="scroll-mt-20">
        <FeaturedProperties />
      </section>
      
      {/* Property Valuation Calculator Section */}
      <section id="valuation" className="scroll-mt-20 bg-gray-50">
        <div className="container-max py-8 border-b border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-2">Free Property Valuation</h2>
              <p className="text-secondary-600">Get an instant estimate of your property value</p>
            </div>
            <Link 
              href="/home-valuation/" 
              className="hidden md:flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              Full Valuation Tool
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <PropertyValuationCalculator />
          <div className="text-center mt-6 md:hidden">
            <Link 
              href="/home-valuation/" 
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              Full Valuation Tool
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* RealScout Property Listings */}
      <section className="py-16 bg-white">
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
      
      {/* Why Choose Us */}
      <section id="why-choose-us" className="scroll-mt-20">
        <WhyChooseUs />
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="scroll-mt-20 bg-gray-50">
        <div className="container-max py-8 border-b border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-secondary-900 mb-2">Frequently Asked Questions</h2>
              <p className="text-secondary-600">Common questions about probate real estate</p>
            </div>
            <Link 
              href="/faq/" 
              className="hidden md:flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              View All FAQs
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
          <FAQ />
          <div className="text-center mt-6 md:hidden">
            <Link 
              href="/faq/" 
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              View All FAQs
              <ArrowRight className="h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="scroll-mt-20">
        <Testimonials />
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="scroll-mt-20">
        <ContactSection />
      </section>
      
      <SchemaMarkup type="home" />
    </main>
  );
}
