import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, DollarSign, Users, Phone, Mail, Calendar, Home, TreePine } from 'lucide-react';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Henderson Probate Real Estate Services | Green Valley & Anthem Area',
  description: 'Expert probate real estate services in Henderson, Nevada. Green Valley and Anthem probate property expertise with Nevada\'s fastest timeline: 6-8 months. Free consultation: (702) 555-0123',
  keywords: 'Henderson probate real estate, Green Valley probate, Anthem probate, Nevada probate timeline, Clark County probate court',
  openGraph: {
    title: 'Henderson Probate Real Estate Services | Green Valley & Anthem Area',
    description: 'Expert probate real estate services in Henderson with 6-8 month timeline. Free consultation available.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function HendersonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SchemaMarkup type="location" location="Henderson" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-900 to-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Henderson Probate Real Estate Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Expert probate real estate services in Henderson, Nevada. 
            Green Valley and Anthem probate property expertise with Nevada's fastest timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5" />
              <span>6-8 Month Timeline</span>
            </div>
            <div className="flex items-center gap-2">
              <DollarSign className="h-5 w-5" />
              <span>Clark County: $1,000 Court Costs</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              <span>2 Probate Commissioners</span>
            </div>
          </div>
        </div>
      </section>

      {/* Henderson Specific Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Henderson Probate Real Estate Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Henderson offers unique advantages for probate real estate sales. As Nevada's second-largest city, Henderson combines family-friendly neighborhoods with excellent probate court access through Clark County's efficient system.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Home className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Family-Friendly Communities</h3>
                    <p className="text-gray-600">Green Valley Ranch, Anthem, and MacDonald Ranch offer excellent probate property opportunities in established neighborhoods.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <TreePine className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Green Valley & Anthem Expertise</h3>
                    <p className="text-gray-600">Specialized knowledge of these master-planned communities and their unique probate real estate markets.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Local Market Knowledge</h3>
                    <p className="text-gray-600">Deep understanding of Henderson's real estate market and probate property valuation.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Henderson Probate Timeline</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Court Filing</span>
                  <span className="font-semibold">Week 1</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Letters Issued</span>
                  <span className="font-semibold">Week 3-4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Property Listed</span>
                  <span className="font-semibold">Week 4-5</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Sale Completed</span>
                  <span className="font-semibold">Month 6-8</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Note:</strong> Henderson probate timeline is 6-8 months vs California's 9-18 months. 
                  Get your inheritance faster with Nevada's efficient process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Henderson Neighborhoods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Henderson Neighborhoods & Probate Real Estate
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert probate real estate services across Henderson's most desirable neighborhoods
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Green Valley Ranch</h3>
              <p className="text-gray-600 mb-4">
                Master-planned community with excellent schools, parks, and shopping. Popular for families and probate properties.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Family-friendly environment</div>
                <div>• Excellent school district</div>
                <div>• Parks and recreation</div>
                <div>• Shopping and dining</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Anthem</h3>
              <p className="text-gray-600 mb-4">
                Upscale community with golf courses and luxury homes. High-end probate real estate opportunities.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Luxury home market</div>
                <div>• Golf course properties</div>
                <div>• Upscale amenities</div>
                <div>• Privacy and security</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">MacDonald Ranch</h3>
              <p className="text-gray-600 mb-4">
                Established neighborhood with mature landscaping and family homes. Great probate property options.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Mature landscaping</div>
                <div>• Established community</div>
                <div>• Family homes</div>
                <div>• Convenient location</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sun City Anthem</h3>
              <p className="text-gray-600 mb-4">
                55+ community with active adult lifestyle. Specialized probate services for retirement properties.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• 55+ community</div>
                <div>• Active adult lifestyle</div>
                <div>• Clubhouse amenities</div>
                <div>• Maintenance-free living</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Inspirada</h3>
              <p className="text-gray-600 mb-4">
                Modern community with new construction and contemporary designs. Newer probate properties available.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• New construction</div>
                <div>• Modern designs</div>
                <div>• Energy efficient</div>
                <div>• Growing community</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Seven Hills</h3>
              <p className="text-gray-600 mb-4">
                Elevated community with mountain views and custom homes. Luxury probate real estate opportunities.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Mountain views</div>
                <div>• Custom homes</div>
                <div>• Elevated location</div>
                <div>• Privacy and views</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clark County Court Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Clark County Probate Court Access
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Henderson residents have convenient access to Clark County's efficient probate court system
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Court Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Clark County Regional Justice Center</p>
                    <p className="text-gray-600">200 Lewis Ave, Las Vegas, NV 89101</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Court Phone</p>
                    <p className="text-gray-600">(702) 671-4500</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Probate Commissioners</p>
                    <p className="text-gray-600">James Fontana (Fridays), Russell Geis (Wednesdays 9:30 AM)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Court Costs & Fees</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Probate Filing Fee</span>
                  <span className="font-semibold text-green-600">$1,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Attorney Fees (Avg)</span>
                  <span className="font-semibold text-green-600">$8,000-9,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Trust Administration</span>
                  <span className="font-semibold text-green-600">$2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Certificate of Incumbency</span>
                  <span className="font-semibold text-green-600">$750</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Henderson Advantage:</strong> Same Clark County court system as Las Vegas, 
                  with the same efficient 6-8 month timeline and $1,000 court costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Henderson */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Probate Real Estate Services in Henderson
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive probate real estate services tailored to Henderson properties
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Home className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Property Valuation</h3>
              <p className="text-gray-600">
                Professional appraisal and market analysis for Henderson properties. 
                Specialized knowledge of Green Valley, Anthem, and other neighborhoods.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sale Management</h3>
              <p className="text-gray-600">
                Complete probate sale management from listing to closing. 
                Expert handling of court requirements and documentation.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-lg shadow-lg">
              <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Court Representation</h3>
              <p className="text-gray-600">
                Direct access to Clark County probate court. 
                Established relationships with commissioners and court staff.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Henderson Probate Process?
          </h2>
          <p className="text-xl mb-8">
            Get a free consultation and learn how Nevada's faster probate timeline 
            can help you sell inherited property in Henderson quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-702-555-0123"
              className="bg-white text-green-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Call (702) 555-0123
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Free Henderson Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Locations */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/locations"
            className="text-green-600 hover:text-green-800 font-semibold"
          >
            ← Back to All Nevada Locations
          </Link>
        </div>
      </section>
    </div>
  );
}
