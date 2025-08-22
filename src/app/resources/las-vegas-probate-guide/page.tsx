import { SEOMetaTags } from '@/components/SEOMetaTags';
import { SchemaMarkup } from '@/components/SchemaMarkup';
import { 
  Gavel, 
  Clock, 
  DollarSign, 
  MapPin, 
  Phone, 
  CheckCircle, 
  AlertTriangle,
  FileText,
  Calculator,
  Calendar,
  Building,
  Users
} from 'lucide-react';

export default function LasVegasProbateGuide() {
  return (
    <>
      <SEOMetaTags
        title="Las Vegas Probate Real Estate Guide 2025"
        description="Complete guide to probate real estate in Las Vegas, Nevada. Learn about court procedures, timelines, costs, and how to sell inherited property in Clark County. Free consultation available."
        keywords={[
          'Las Vegas probate real estate',
          'Clark County probate court',
          'Nevada probate timeline',
          'inherited property Las Vegas',
          'probate property sales',
          'Las Vegas estate liquidation',
          'Clark County probate process',
          'Nevada probate costs'
        ]}
        canonicalUrl="https://probaterealestatesales.com/resources/las-vegas-probate-guide"
        ogType="article"
        articleAuthor="Dr. Janet Duffy"
        articlePublishedTime="2025-01-01T00:00:00Z"
        articleSection="Probate Guides"
        articleTags={['Las Vegas', 'Probate', 'Real Estate', 'Nevada', 'Clark County']}
      />
      
      <SchemaMarkup 
        type="article"
        article={{
          title: "Las Vegas Probate Real Estate Guide 2025",
          description: "Complete guide to probate real estate in Las Vegas, Nevada including court procedures, timelines, and costs.",
          author: "Dr. Janet Duffy",
          publishedTime: "2025-01-01T00:00:00Z",
          modifiedTime: new Date().toISOString(),
          section: "Probate Guides"
        }}
        customSchema={{
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Navigate Las Vegas Probate Real Estate",
          "description": "Step-by-step guide to probate real estate in Las Vegas, Nevada",
          "step": [
            {
              "@type": "HowToStep",
              "name": "File Petition with Clark County Court",
              "text": "Submit probate petition to Clark County District Court within 30 days of death"
            },
            {
              "@type": "HowToStep", 
              "name": "Appoint Personal Representative",
              "text": "Court appoints personal representative to manage estate assets"
            },
            {
              "@type": "HowToStep",
              "name": "Property Valuation & Marketing",
              "text": "Professional real estate agent markets inherited property for maximum value"
            },
            {
              "@type": "HowToStep",
              "name": "Court Confirmation Sale",
              "text": "Property sale approved by probate court commissioner"
            }
          ]
        }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Las Vegas Probate Real Estate
              <span className="block text-blue-600">Complete Guide 2025</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Everything you need to know about selling inherited property in Las Vegas, 
              Clark County, and surrounding Nevada areas. Expert guidance from local probate specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1-702-555-0123"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Free Consultation: (702) 555-0123
              </a>
              <a 
                href="/#contact"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Key Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">6-8</div>
              <div className="text-gray-600">Months Average Timeline</div>
              <div className="text-sm text-gray-500">vs 9-18 months in California</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">98%</div>
              <div className="text-gray-600">Court Approval Rate</div>
              <div className="text-sm text-gray-500">First-time approval</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">$2,500</div>
              <div className="text-gray-600">Average Savings</div>
              <div className="text-sm text-gray-500">vs traditional attorney fees</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-600">500+</div>
              <div className="text-gray-600">Properties Sold</div>
              <div className="text-sm text-gray-500">Successfully closed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Las Vegas Specific Content */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              Why Las Vegas Probate is Different
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 rounded-full">
                    <Building className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Clark County Court System
                    </h3>
                    <p className="text-gray-600">
                      Las Vegas probate cases are handled by Clark County District Court, 
                      which has specialized probate commissioners and streamlined procedures.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-green-100 rounded-full">
                    <Clock className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Faster Timeline
                    </h3>
                    <p className="text-gray-600">
                      Nevada's probate process is significantly faster than California, 
                      typically completing in 6-8 months vs 9-18 months.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-purple-100 rounded-full">
                    <DollarSign className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Lower Costs
                    </h3>
                    <p className="text-gray-600">
                      Reduced court fees, faster processing, and efficient procedures 
                      result in lower overall probate costs.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-orange-100 rounded-full">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Local Market Expertise
                    </h3>
                    <p className="text-gray-600">
                      Our team knows the Las Vegas real estate market intimately, 
                      including property values, buyer preferences, and market trends.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-100 rounded-full">
                    <Gavel className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Court Relationships
                    </h3>
                    <p className="text-gray-600">
                      Established relationships with Clark County probate commissioners 
                      and court staff for smoother proceedings.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-100 rounded-full">
                    <Users className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Local Network
                    </h3>
                    <p className="text-gray-600">
                      Strong connections with local attorneys, title companies, 
                      and real estate professionals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-gray-900">
              Las Vegas Probate Process: Step by Step
            </h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Initial Consultation & Assessment
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We meet with you to understand your situation, assess the property, 
                    and explain the probate process. This includes:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Property condition evaluation
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Market value assessment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Timeline planning
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Cost breakdown
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Court Filing & Administration
                  </h3>
                  <p className="text-gray-600 mb-4">
                    We handle all court filings and administrative tasks:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Probate petition filing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Personal representative appointment
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Notice to creditors
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Inventory preparation
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Property Marketing & Sale
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Professional real estate marketing and sale process:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Professional photography and staging
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      MLS listing and marketing
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Buyer qualification and offers
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Negotiation and contract management
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Court Confirmation & Closing
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Final court approval and property transfer:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Court hearing attendance
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Sale confirmation order
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Title transfer coordination
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      Final accounting and distribution
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get your free consultation and learn how we can help you navigate 
              the Las Vegas probate process efficiently and cost-effectively.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+1-702-555-0123"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call (702) 555-0123
              </a>
              <a 
                href="/#contact"
                className="bg-transparent text-white px-8 py-4 rounded-lg text-lg font-semibold border-2 border-white hover:bg-white hover:text-blue-600 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
