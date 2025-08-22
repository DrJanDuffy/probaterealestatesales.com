import type { Metadata } from 'next';
import FireCrawlContentGenerator from '@/components/FireCrawlContentGenerator';
import SchemaMarkup from '@/components/SchemaMarkup';

// Force dynamic rendering for this interactive page
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Fire Crawl Dashboard | Nevada Probate Real Estate Content Generator',
  description: 'Generate hyperlocal content for Nevada probate real estate using AI-powered web crawling. Create neighborhood-specific guides, market analysis, and court procedures.',
  keywords: 'Fire Crawl, hyperlocal content, Nevada probate, real estate content generation, AI content, Las Vegas probate',
  openGraph: {
    title: 'Fire Crawl Dashboard | Nevada Probate Real Estate',
    description: 'AI-powered hyperlocal content generation for Nevada probate real estate',
    type: 'website',
  },
};

export default function FireCrawlDashboardPage() {
  return (
    <>
      <SchemaMarkup 
        type="service"
        customSchema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": "Fire Crawl Dashboard - Nevada Probate Real Estate",
          "description": "AI-powered hyperlocal content generation dashboard for Nevada probate real estate",
          "url": "https://probaterealestatesales.com/firecrawl-dashboard",
          "mainEntity": {
            "@type": "SoftwareApplication",
            "name": "Fire Crawl Content Generator",
            "applicationCategory": "ContentGeneration",
            "operatingSystem": "Web",
            "description": "Generate hyperlocal content for Nevada probate real estate using AI-powered web crawling"
          }
        }}
      />
      
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Fire Crawl Dashboard
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              Transform your Nevada probate real estate website with AI-powered hyperlocal content generation. 
              Create neighborhood-specific guides, market analysis, and court procedures that dominate local search.
            </p>
          </div>

          {/* Dashboard Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">7</div>
              <div className="text-gray-600">Nevada Neighborhoods</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">5</div>
              <div className="text-gray-600">Content Types</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">AI</div>
              <div className="text-gray-600">Powered Generation</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600">Content Creation</div>
            </div>
          </div>

          {/* Content Generator */}
          <FireCrawlContentGenerator />

          {/* Features Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Why Fire Crawl for Hyperlocal Content?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-blue-600 text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Hyperlocal Focus</h3>
                <p className="text-gray-600">
                  Generate content specifically tailored to each Nevada neighborhood, 
                  including Summerlin, Henderson, North Las Vegas, and more.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-green-600 text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Nevada Legal Expertise</h3>
                <p className="text-gray-600">
                  Content includes Nevada-specific probate laws, Clark County court procedures, 
                  and local attorney recommendations.
                </p>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-purple-600 text-4xl mb-4">🚀</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">SEO Optimized</h3>
                <p className="text-gray-600">
                  All generated content is optimized for local search, 
                  including proper keywords and structured data for better rankings.
                </p>
              </div>
            </div>
          </div>

          {/* Content Types Overview */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Available Content Types
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Probate Guides</h3>
                <p className="text-blue-100">
                  Comprehensive guides covering Nevada probate procedures, 
                  timeline expectations, and required documentation.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Market Analysis</h3>
                <p className="text-green-100">
                  Detailed real estate market insights for each neighborhood, 
                  including trends, prices, and investment opportunities.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Court Procedures</h3>
                <p className="text-purple-100">
                  Step-by-step guides to Clark County probate court procedures, 
                  filing requirements, and hearing schedules.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Attorney Directories</h3>
                <p className="text-orange-100">
                  Comprehensive directories of probate attorneys serving each neighborhood, 
                  with contact information and specializations.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Property Valuations</h3>
                <p className="text-red-100">
                  Expert guides to property valuation methods, 
                  market comparables, and value optimization strategies.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Local Resources</h3>
                <p className="text-indigo-100">
                  Curated lists of local resources, government services, 
                  and community organizations for each neighborhood.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ready to Dominate Local Search?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Start generating hyperlocal content today and watch your Nevada probate real estate 
                website climb to the top of local search results.
              </p>
              <button 
                type="button"
                onClick={() => document.getElementById('content-generator')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Start Generating Content
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
