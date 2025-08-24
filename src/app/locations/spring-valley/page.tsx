import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, DollarSign, Users, Phone, Mail, Calendar, Home, TreePine, Mountain, Building, Car, Users2 } from 'lucide-react';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Spring Valley Probate Real Estate Services | Residential & Established Community',
  description: 'Expert probate real estate services in Spring Valley, Nevada. Fast 45-day probate process vs 6-8 months. Free consultation: (702) 830-9222',
  keywords: 'Spring Valley probate real estate, residential probate, established community probate, Nevada probate timeline, Clark County probate court',
  openGraph: {
    title: 'Spring Valley Probate Real Estate Services | Residential & Established Community',
    description: 'Expert probate real estate services in Spring Valley with 6-8 month timeline. Free consultation available.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function SpringValleyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SchemaMarkup type="location" location="Spring Valley" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-900 to-teal-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Spring Valley Probate Real Estate Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Expert probate real estate services in Spring Valley, Nevada. 
            Residential probate management with established community focus and Nevada's fastest timeline.
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

      {/* Spring Valley Specific Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Spring Valley Probate Real Estate Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Spring Valley offers unique advantages for probate real estate sales. As an established residential community with excellent amenities, it combines family-friendly neighborhoods with excellent probate court access through Clark County's efficient system.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Home className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Established Community</h3>
                    <p className="text-gray-600">Mature neighborhoods with established property values and stable probate real estate markets.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users2 className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Family-Friendly</h3>
                    <p className="text-gray-600">Excellent schools and amenities create strong demand for probate properties.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Car className="h-6 w-6 text-teal-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Convenient Location</h3>
                    <p className="text-gray-600">Easy access to major highways and Las Vegas amenities while maintaining suburban charm.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Spring Valley Probate Timeline</h3>
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
              
              <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                <p className="text-sm text-teal-800">
                  <strong>Note:</strong> Spring Valley probate timeline is 6-8 months vs California's 9-18 months. 
                  Get your inheritance faster with Nevada's efficient process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spring Valley Neighborhoods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Spring Valley Neighborhoods & Probate Real Estate
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert probate real estate services across Spring Valley's most desirable neighborhoods
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spring Valley Estates</h3>
              <p className="text-gray-600 mb-4">
                Upscale community with luxury homes and mature landscaping. High-end probate real estate opportunities.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Luxury homes</div>
                <div>• Mature landscaping</div>
                <div>• Upscale amenities</div>
                <div>• Privacy and views</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Desert Shores</h3>
              <p className="text-gray-600 mb-4">
                Established community with lake access and family homes. Excellent probate property opportunities.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Lake access</div>
                <div>• Family homes</div>
                <div>• Established community</div>
                <div>• Recreational amenities</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spring Valley Ranch</h3>
              <p className="text-gray-600 mb-4">
                Family-focused community with parks and excellent schools. Great probate property options.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Family-friendly</div>
                <div>• Parks and recreation</div>
                <div>• Excellent schools</div>
                <div>• Community amenities</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spring Valley Heights</h3>
              <p className="text-gray-600 mb-4">
                Elevated community with mountain views and established homes. Unique probate property options.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Mountain views</div>
                <div>• Established homes</div>
                <div>• Elevated location</div>
                <div>• Privacy and views</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spring Valley Meadows</h3>
              <p className="text-gray-600 mb-4">
                Modern community with newer homes and contemporary designs. Contemporary probate real estate market.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Newer homes</div>
                <div>• Modern designs</div>
                <div>• Energy efficient</div>
                <div>• Growing community</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Spring Valley Commons</h3>
              <p className="text-gray-600 mb-4">
                Central area with shops, restaurants, and convenience. Great probate property options.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Central location</div>
                <div>• Shopping and dining</div>
                <div>• Convenient access</div>
                <div>• Community feel</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Residential Market Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Residential Market Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized knowledge for Spring Valley's established residential market
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-teal-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Established Community Knowledge</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Building className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Property Values</p>
                    <p className="text-gray-600">Understanding of established community property value trends</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Home className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Market Stability</p>
                    <p className="text-gray-600">Knowledge of stable residential market characteristics</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <TreePine className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Community Development</p>
                    <p className="text-gray-600">Understanding of community growth and development patterns</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-teal-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Family Market Understanding</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users2 className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Family Buyers</p>
                    <p className="text-gray-600">Understanding of family-focused property requirements</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Car className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-semibold text-gray-900">School Districts</p>
                    <p className="text-gray-600">Knowledge of school district impact on property values</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mountain className="h-6 w-6 text-teal-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Amenities</p>
                    <p className="text-gray-600">Understanding of community amenity value</p>
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
              Spring Valley residents have convenient access to Clark County's efficient probate court system
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Court Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-teal-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Clark County Regional Justice Center</p>
                    <p className="text-gray-600">200 Lewis Ave, Las Vegas, NV 89101</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-teal-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Court Phone</p>
                    <p className="text-gray-600">(702) 671-4500</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-teal-600" />
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
                  <span className="font-semibold text-teal-600">$1,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Attorney Fees (Avg)</span>
                  <span className="font-semibold text-teal-600">$8,000-9,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Trust Administration</span>
                  <span className="font-semibold text-teal-600">$2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Certificate of Incumbency</span>
                  <span className="font-semibold text-teal-600">$750</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-teal-50 rounded-lg">
                <p className="text-sm text-teal-800">
                  <strong>Spring Valley Advantage:</strong> Same Clark County court system as Las Vegas, 
                  with the same efficient 6-8 month timeline and $1,000 court costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RealScout Property Listings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Las Vegas Properties Available
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
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

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Spring Valley Probate Process?
          </h2>
          <p className="text-xl mb-8">
            Get a free consultation and learn how Nevada's faster probate timeline 
            can help you sell inherited property in Spring Valley quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-702-830-9222"
              className="bg-white text-teal-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Call (702) 830-9222
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              Free Spring Valley Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Locations */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/locations"
            className="text-teal-600 hover:text-teal-800 font-semibold"
          >
            ← Back to All Nevada Locations
          </Link>
        </div>
      </section>
    </div>
  );
}
