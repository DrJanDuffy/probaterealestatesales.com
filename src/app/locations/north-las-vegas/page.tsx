import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, DollarSign, Users, Phone, Mail, Calendar, Home, TreePine, Mountain, Car, Building } from 'lucide-react';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'North Las Vegas Probate Real Estate Services | Aliante & Centennial Hills',
  description: 'Expert probate real estate services in North Las Vegas, Nevada. Aliante and Centennial Hills probate property expertise with Nevada\'s fastest timeline: 6-8 months. Free consultation: (702) 555-0123',
  keywords: 'North Las Vegas probate real estate, Aliante probate, Centennial Hills probate, Nevada probate timeline, Clark County probate court',
  openGraph: {
    title: 'North Las Vegas Probate Real Estate Services | Aliante & Centennial Hills',
    description: 'Expert probate real estate services in North Las Vegas with 6-8 month timeline. Free consultation available.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function NorthLasVegasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SchemaMarkup type="location" location="North Las Vegas" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            North Las Vegas Probate Real Estate Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Expert probate real estate services in North Las Vegas, Nevada. 
            Aliante and Centennial Hills probate property expertise with Nevada's fastest timeline.
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

      {/* North Las Vegas Specific Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                North Las Vegas Probate Real Estate Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                North Las Vegas offers unique advantages for probate real estate sales. As one of Nevada's fastest-growing areas, it combines master-planned communities with excellent probate court access through Clark County's efficient system.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Home className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Master-Planned Communities</h3>
                    <p className="text-gray-600">Aliante and Centennial Hills offer excellent probate property opportunities in well-designed, family-friendly neighborhoods.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mountain className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Mountain Views & Open Space</h3>
                    <p className="text-gray-600">Properties with mountain views and access to open spaces provide unique probate real estate opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Car className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Convenient Access</h3>
                    <p className="text-gray-600">Easy access to major highways and Las Vegas amenities while maintaining a suburban feel.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">North Las Vegas Probate Timeline</h3>
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
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>Note:</strong> North Las Vegas probate timeline is 6-8 months vs California's 9-18 months. 
                  Get your inheritance faster with Nevada's efficient process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* North Las Vegas Neighborhoods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              North Las Vegas Neighborhoods & Probate Real Estate
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert probate real estate services across North Las Vegas's most desirable neighborhoods
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Aliante</h3>
              <p className="text-gray-600 mb-4">
                Master-planned community with golf course, parks, and family homes. Excellent probate property opportunities.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Golf course community</div>
                <div>• Family-friendly environment</div>
                <div>• Parks and recreation</div>
                <div>• Shopping and dining</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Centennial Hills</h3>
              <p className="text-gray-600 mb-4">
                Upscale community with mountain views and luxury homes. High-end probate real estate opportunities.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Mountain views</div>
                <div>• Luxury home market</div>
                <div>• Upscale amenities</div>
                <div>• Privacy and views</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Skye Canyon</h3>
              <p className="text-gray-600 mb-4">
                Modern community with new construction and outdoor lifestyle focus. Newer probate properties available.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• New construction</div>
                <div>• Outdoor lifestyle</div>
                <div>• Energy efficient</div>
                <div>• Growing community</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Tule Springs</h3>
              <p className="text-gray-600 mb-4">
                Nature-focused community with hiking trails and open spaces. Unique probate property options.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Hiking trails</div>
                <div>• Open spaces</div>
                <div>• Nature-focused</div>
                <div>• Active lifestyle</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Craig Ranch</h3>
              <p className="text-gray-600 mb-4">
                Established community with mature landscaping and family homes. Great probate property options.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Mature landscaping</div>
                <div>• Established community</div>
                <div>• Family homes</div>
                <div>• Convenient location</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Eldorado</h3>
              <p className="text-gray-600 mb-4">
                Historic area with established homes and convenient access. Established probate real estate market.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Historic area</div>
                <div>• Established homes</div>
                <div>• Convenient access</div>
                <div>• Mature community</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Growth & Development */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              North Las Vegas Growth & Development
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding the area's development for better inherited property valuation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Development Trends</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">New Construction</p>
                    <p className="text-gray-600">Ongoing development creating new probate opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Home className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Property Values</p>
                    <p className="text-gray-600">Understanding of how development affects property values</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <TreePine className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Future Planning</p>
                    <p className="text-gray-600">Knowledge of planned developments and infrastructure</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Advantages</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Growing Population</p>
                    <p className="text-gray-600">Increasing demand for properties in the area</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Car className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Transportation</p>
                    <p className="text-gray-600">Easy access to major highways and Las Vegas</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mountain className="h-6 w-6 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Natural Beauty</p>
                    <p className="text-gray-600">Mountain views and open spaces add value</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clark County Court Information */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Clark County Probate Court Access
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              North Las Vegas residents have convenient access to Clark County's efficient probate court system
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Court Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Clark County Regional Justice Center</p>
                    <p className="text-gray-600">200 Lewis Ave, Las Vegas, NV 89101</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Court Phone</p>
                    <p className="text-gray-600">(702) 671-4500</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Probate Commissioners</p>
                    <p className="text-gray-600">James Fontana (Fridays), Russell Geis (Wednesdays 9:30 AM)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Court Costs & Fees</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Probate Filing Fee</span>
                  <span className="font-semibold text-blue-600">$1,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Attorney Fees (Avg)</span>
                  <span className="font-semibold text-blue-600">$8,000-9,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Trust Administration</span>
                  <span className="font-semibold text-blue-600">$2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Certificate of Incumbency</span>
                  <span className="font-semibold text-blue-600">$750</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>North Las Vegas Advantage:</strong> Same Clark County court system as Las Vegas, 
                  with the same efficient 6-8 month timeline and $1,000 court costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your North Las Vegas Probate Process?
          </h2>
          <p className="text-xl mb-8">
            Get a free consultation and learn how Nevada's faster probate timeline 
            can help you sell inherited property in North Las Vegas quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-702-555-0123"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Call (702) 555-0123
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Free North Las Vegas Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Locations */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/locations"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            ← Back to All Nevada Locations
          </Link>
        </div>
      </section>
    </div>
  );
}
