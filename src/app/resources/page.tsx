import type { Metadata } from 'next';
import EducationalContentHub from '@/components/EducationalContentHub';
import NevadaProbateLaws from '@/components/NevadaProbateLaws';
import ProbateTimeline from '@/components/ProbateTimeline';
import ProbatePropertyChecklist from '@/components/ProbatePropertyChecklist';
import ProbateCostCalculator from '@/components/ProbateCostCalculator';
import SEOContentStrategy from '@/components/SEOContentStrategy';
import LeadGenerationSystem from '@/components/LeadGenerationSystem';
import SchemaMarkupExpert from '@/components/SchemaMarkupExpert';
import CallToActionComponents from '@/components/CallToActionComponents';
import ContentMarketingCalendar from '@/components/ContentMarketingCalendar';

export const metadata: Metadata = {
  title: 'Probate Real Estate Resources | Dr. Jan Duffy - Las Vegas Expert',
  description: 'Comprehensive probate real estate resources including Nevada probate laws, timeline, checklist, cost calculator, and educational content by Dr. Jan Duffy.',
  keywords: 'probate real estate resources, Nevada probate laws, probate timeline, probate checklist, probate cost calculator, Dr. Jan Duffy, Las Vegas probate expert',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/resources/',
  },
  openGraph: {
    title: 'Probate Real Estate Resources | Dr. Jan Duffy',
    description: 'Comprehensive probate real estate resources including Nevada probate laws, timeline, checklist, cost calculator, and educational content.',
    type: 'website',
    url: 'https://www.probaterealestatesales.com/resources/',
  },
};

export default function ResourcesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="container-max text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Probate Real Estate Resources
          </h1>
          <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto mb-8">
            Dr. Jan Duffy's comprehensive collection of educational content, tools, and guides
            to help you navigate the Nevada probate process with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
              Schedule Free Consultation
            </a>
            <a href="tel:+1-702-830-9222" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block">
              Call (702) 830-9222
            </a>
          </div>
        </div>
      </section>

      {/* Resource Navigation */}
      <section className="py-16 bg-secondary-50">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Choose Your Resource Category
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="#educational-content" className="bg-white rounded-xl shadow-soft p-6 border border-secondary-100 hover:shadow-lg transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <title>Educational Content</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Educational Content</h3>
              <p className="text-sm text-secondary-600">Guides, FAQs, videos, and downloadable resources</p>
            </a>

            <a href="#nevada-laws" className="bg-white rounded-xl shadow-soft p-6 border border-secondary-100 hover:shadow-lg transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="h-8 w-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <title>Nevada Probate Laws</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Nevada Probate Laws</h3>
              <p className="text-sm text-secondary-600">Key statutes, requirements, and legal compliance</p>
            </a>

            <a href="#probate-timeline" className="bg-white rounded-xl shadow-soft p-6 border border-secondary-100 hover:shadow-lg transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <title>Probate Timeline</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Probate Timeline</h3>
              <p className="text-sm text-secondary-600">Step-by-step process from filing to closing</p>
            </a>

            <a href="#property-checklist" className="bg-white rounded-xl shadow-soft p-6 border border-secondary-100 hover:shadow-lg transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="h-8 w-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <title>Property Checklist</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Property Checklist</h3>
              <p className="text-sm text-secondary-600">Executor's comprehensive task checklist</p>
            </a>

            <a href="#cost-calculator" className="bg-white rounded-xl shadow-soft p-6 border border-secondary-100 hover:shadow-lg transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="h-8 w-8 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <title>Cost Calculator</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Cost Calculator</h3>
              <p className="text-sm text-secondary-600">Estimate total probate costs and fees</p>
            </a>

            <a href="#marketing-tools" className="bg-white rounded-xl shadow-soft p-6 border border-secondary-100 hover:shadow-lg transition-shadow duration-300 text-center group">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <title>Marketing Tools</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-secondary-900 mb-2">Marketing Tools</h3>
              <p className="text-sm text-secondary-600">SEO strategy, lead generation, and content calendar</p>
            </a>
          </div>
        </div>
      </section>

      {/* Educational Content Hub */}
      <section id="educational-content">
        <EducationalContentHub />
      </section>

      {/* Nevada Probate Laws */}
      <section id="nevada-laws">
        <NevadaProbateLaws />
      </section>

      {/* Probate Timeline */}
      <section id="probate-timeline">
        <ProbateTimeline />
      </section>

      {/* Property Checklist */}
      <section id="property-checklist">
        <ProbatePropertyChecklist />
      </section>

      {/* Cost Calculator */}
      <section id="cost-calculator">
        <ProbateCostCalculator />
      </section>

      {/* Marketing Tools Section */}
      <section id="marketing-tools" className="py-16 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Marketing & Business Development Tools
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Professional tools and strategies to grow your probate real estate business
              and establish Dr. Jan Duffy as Las Vegas's premier probate expert.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* SEO Strategy */}
            <div>
              <SEOContentStrategy />
            </div>

            {/* Lead Generation */}
            <div>
              <LeadGenerationSystem />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-12">
            {/* Schema Markup */}
            <div>
              <SchemaMarkupExpert />
            </div>

            {/* CTA Components */}
            <div>
              <CallToActionComponents />
            </div>
          </div>

          {/* Content Marketing Calendar */}
          <div className="mt-12">
            <ContentMarketingCalendar />
          </div>
        </div>
      </section>

      {/* RealScout Property Listings */}
      <section className="py-16 bg-gray-50">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
              Current Las Vegas Properties Available
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Browse our current inventory of properties in the Las Vegas area. 
              These properties are available for immediate purchase with our expert guidance.
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

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-max text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Access All Resources?
          </h2>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-8">
            Get personalized guidance from Dr. Jan Duffy and access to all educational
            resources with your free probate consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block">
              Schedule Free Consultation
            </a>
            <a href="tel:+1-702-830-9222" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors inline-block">
              Call (702) 830-9222
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
