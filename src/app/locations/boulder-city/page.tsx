import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, DollarSign, Users, Phone, Mail, Calendar, Home, TreePine, Mountain, Anchor, Landmark } from 'lucide-react';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Boulder City Probate Real Estate Services | Historic Area & Lake Mead',
  description: 'Expert probate real estate services in Boulder City, Nevada. Fast 45-day probate process vs 6-8 months. Free consultation: (702) 830-9222',
  keywords: 'Boulder City probate real estate, historic area probate, Lake Mead probate, Nevada probate timeline, Clark County probate court',
  openGraph: {
    title: 'Boulder City Probate Real Estate Services | Historic Area & Lake Mead',
    description: 'Expert probate real estate services in Boulder City with 6-8 month timeline. Free consultation available.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function BoulderCityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SchemaMarkup type="location" location="Boulder City" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-900 to-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Boulder City Probate Real Estate Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Expert probate real estate services in Boulder City, Nevada. 
            Historic area probate management with Lake Mead proximity and Nevada's fastest timeline.
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

      {/* Boulder City Specific Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Boulder City Probate Real Estate Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Boulder City offers unique advantages for probate real estate sales. As a historic community with Lake Mead proximity, it combines small-town charm with excellent probate court access through Clark County's efficient system.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Landmark className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Historic Community</h3>
                    <p className="text-gray-600">Established in 1931, Boulder City offers unique probate properties with historical significance and character.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Anchor className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Lake Mead Proximity</h3>
                    <p className="text-gray-600">Properties near Lake Mead offer unique probate real estate opportunities with recreational value.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mountain className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Mountain Views</h3>
                    <p className="text-gray-600">Properties with mountain views and desert landscapes provide unique probate real estate opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Boulder City Probate Timeline</h3>
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
              
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Note:</strong> Boulder City probate timeline is 6-8 months vs California's 9-18 months. 
                  Get your inheritance faster with Nevada's efficient process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boulder City Neighborhoods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Boulder City Neighborhoods & Probate Real Estate
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert probate real estate services across Boulder City's most desirable neighborhoods
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Historic District</h3>
              <p className="text-gray-600 mb-4">
                Original Boulder City with historic homes and character. Unique probate properties with historical significance.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Historic homes</div>
                <div>• Character and charm</div>
                <div>• Established community</div>
                <div>• Cultural significance</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lake Mead Area</h3>
              <p className="text-gray-600 mb-4">
                Properties near Lake Mead with recreational access. Premium probate real estate opportunities.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Lake access</div>
                <div>• Recreational value</div>
                <div>• Waterfront properties</div>
                <div>• Outdoor lifestyle</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mountain View Estates</h3>
              <p className="text-gray-600 mb-4">
                Elevated properties with mountain and desert views. High-end probate real estate opportunities.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Mountain views</div>
                <div>• Desert landscapes</div>
                <div>• Privacy and views</div>
                <div>• Luxury homes</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Downtown Boulder City</h3>
              <p className="text-gray-600 mb-4">
                Central area with shops, restaurants, and convenience. Great probate property options.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Central location</div>
                <div>• Walkable area</div>
                <div>• Local amenities</div>
                <div>• Community feel</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Eldorado Valley</h3>
              <p className="text-gray-600 mb-4">
                Rural area with larger properties and open spaces. Unique probate property options.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Rural setting</div>
                <div>• Larger properties</div>
                <div>• Open spaces</div>
                <div>• Privacy and solitude</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sunrise Vista</h3>
              <p className="text-gray-600 mb-4">
                Modern community with newer homes and amenities. Contemporary probate real estate market.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Newer homes</div>
                <div>• Modern amenities</div>
                <div>• Growing community</div>
                <div>• Family-friendly</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historic & Recreational Value */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Historic & Recreational Value
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding Boulder City's unique characteristics for better inherited property valuation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-amber-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Historic Significance</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Landmark className="h-6 w-6 text-amber-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Historical Context</p>
                    <p className="text-gray-600">Understanding of Boulder City's Hoover Dam history</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Home className="h-6 w-6 text-amber-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Property Values</p>
                    <p className="text-gray-600">How historical significance affects property values</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <TreePine className="h-6 w-6 text-amber-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Preservation</p>
                    <p className="text-gray-600">Knowledge of preservation requirements and benefits</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Recreational Opportunities</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Anchor className="h-6 w-6 text-amber-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Lake Mead Access</p>
                    <p className="text-gray-600">Understanding of waterfront property values</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mountain className="h-6 w-6 text-amber-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Outdoor Activities</p>
                    <p className="text-gray-600">Hiking, biking, and recreational opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-amber-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Tourism Impact</p>
                    <p className="text-gray-600">How tourism affects property values and demand</p>
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
              Boulder City residents have convenient access to Clark County's efficient probate court system
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Court Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Clark County Regional Justice Center</p>
                    <p className="text-gray-600">200 Lewis Ave, Las Vegas, NV 89101</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-amber-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Court Phone</p>
                    <p className="text-gray-600">(702) 671-4500</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-amber-600" />
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
                  <span className="font-semibold text-amber-600">$1,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Attorney Fees (Avg)</span>
                  <span className="font-semibold text-amber-600">$8,000-9,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Trust Administration</span>
                  <span className="font-semibold text-amber-600">$2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Certificate of Incumbency</span>
                  <span className="font-semibold text-amber-600">$750</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-amber-50 rounded-lg">
                <p className="text-sm text-amber-800">
                  <strong>Boulder City Advantage:</strong> Same Clark County court system as Las Vegas, 
                  with the same efficient 6-8 month timeline and $1,000 court costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Boulder City Probate Process?
          </h2>
          <p className="text-xl mb-8">
            Get a free consultation and learn how Nevada's faster probate timeline 
            can help you sell inherited property in Boulder City quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-702-830-9222"
              className="bg-white text-amber-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Call (702) 830-9222
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-amber-600 transition-colors"
            >
              Free Boulder City Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Locations */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/locations"
            className="text-amber-600 hover:text-amber-800 font-semibold"
          >
            ← Back to All Nevada Locations
          </Link>
        </div>
      </section>
    </div>
  );
}
