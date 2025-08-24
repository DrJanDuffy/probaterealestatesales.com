import type { Metadata } from 'next';
import FAQ from '@/components/FAQ';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Nevada Probate Real Estate FAQ | Complete Q&A Guide',
  description: 'Comprehensive FAQ about Nevada probate real estate sales. Get detailed answers about timelines, certificates of incumbency, Clark County procedures, and small estate limits.',
  keywords: 'Nevada probate FAQ, probate timeline, certificate of incumbency, Clark County probate, small estate affidavit, probate real estate questions',
  openGraph: {
    title: 'Nevada Probate Real Estate FAQ | Complete Q&A Guide',
    description: 'Comprehensive FAQ about Nevada probate real estate sales. Get detailed answers about timelines, certificates of incumbency, Clark County procedures, and small estate limits.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Nevada Probate Real Estate FAQ
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Get comprehensive answers to all your questions about probate real estate sales in Nevada. 
            From timelines to legal requirements, we cover everything you need to know.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-702-830-9222"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary-600 bg-white hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
            >
              Call Now: (702) 830-9222
            </a>
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              className="inline-flex items-center justify-center px-8 py-4 border border-white text-lg font-medium rounded-md text-white hover:bg-white hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors"
            >
              Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Additional Resources Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Additional Nevada Probate Resources
            </h2>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Explore our comprehensive guides and resources to better understand Nevada probate real estate.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 border border-blue-200">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                Nevada Probate Timeline Guide
              </h3>
              <p className="text-secondary-600 mb-6">
                Detailed breakdown of the 6-8 month Nevada probate process, including court schedules, 
                document requirements, and how to expedite your case.
              </p>
              <a
                href="/resources/nevada-probate-guide"
                className="inline-flex items-center text-primary-600 hover:text-primary-800 font-semibold"
              >
                Read Guide →
              </a>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 border border-green-200">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                Clark County Probate Procedures
              </h3>
              <p className="text-secondary-600 mb-6">
                Specific information about Clark County probate court, commissioners, filing procedures, 
                and local requirements for probate real estate sales.
              </p>
              <a
                href="/services"
                className="inline-flex items-center text-primary-600 hover:text-primary-800 font-semibold"
              >
                Learn More →
              </a>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-8 border border-purple-200">
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                Small Estate Affidavit Guide
              </h3>
              <p className="text-secondary-600 mb-6">
                Complete guide to Nevada's $100,000 small estate limit, including simplified procedures 
                for estates under $25,000 and how to avoid formal probate.
              </p>
              <a
                href="/resources/nevada-probate-guide#small-estates"
                className="inline-flex items-center text-primary-600 hover:text-primary-800 font-semibold"
              >
                View Guide →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-secondary-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-lg text-secondary-600 mb-8">
            Our Nevada probate real estate experts are here to help. Get personalized answers about 
            your specific situation and learn how we can help you navigate the probate process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-702-830-9222"
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              Call (702) 830-9222
            </a>
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              className="inline-flex items-center justify-center px-8 py-4 border border-primary-300 text-lg font-medium rounded-md text-primary-700 bg-white hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-colors"
            >
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <SchemaMarkup type="faq" />
    </main>
  );
}
