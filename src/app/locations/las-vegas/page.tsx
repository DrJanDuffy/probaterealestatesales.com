import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, DollarSign, Users, Phone, Mail, Calendar } from 'lucide-react';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Las Vegas Probate Real Estate Services | Downtown & Strip Area',
  description: 'Expert probate real estate services in Las Vegas, Nevada. Downtown and Strip area probate property sales with Nevada\'s fastest timeline: 6-8 months. Free consultation: (702) 830-9222',
  keywords: 'Las Vegas probate real estate, downtown probate, strip area probate, Nevada probate timeline, Clark County probate court',
  openGraph: {
    title: 'Las Vegas Probate Real Estate Services | Downtown & Strip Area',
    description: 'Expert probate real estate services in Las Vegas with 6-8 month timeline. Free consultation available.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function LasVegasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SchemaMarkup type="location" location="Las Vegas" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Las Vegas Probate Real Estate Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Expert probate real estate services in Las Vegas, Nevada. 
            Downtown and Strip area probate property sales with Nevada's fastest timeline.
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

      {/* Las Vegas Specific Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Las Vegas Probate Real Estate Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Las Vegas offers unique advantages for probate real estate sales. With direct access to Clark County's probate court system and a diverse real estate market, we can help you navigate inherited property sales efficiently.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Downtown & Strip Access</h3>
                    <p className="text-gray-600">Convenient access to Clark County Regional Justice Center and probate court proceedings.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Fast Market Analysis</h3>
                    <p className="text-gray-600">Quick property valuation and market assessment for downtown and Strip area properties.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Local Court Relationships</h3>
                    <p className="text-gray-600">Established relationships with Clark County probate commissioners and court staff.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Las Vegas Probate Timeline</h3>
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
                  <strong>Note:</strong> Las Vegas probate timeline is 6-8 months vs California's 9-18 months. 
                  Get your inheritance faster with Nevada's efficient process.
                </p>
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
              Clark County Probate Court Information
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Direct access to Nevada's most efficient probate court system
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
                  <span className="text-gray-600">Probate Filing Fee</span>
                  <span className="font-semibold">$1,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Attorney Fees (Avg)</span>
                  <span className="font-semibold">$8,000-9,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Trust Administration</span>
                  <span className="font-semibold">$2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Certificate of Incumbency</span>
                  <span className="font-semibold">$750</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg">
                <p className="text-sm text-green-800">
                  <strong>Savings:</strong> Nevada probate costs are significantly lower than California, 
                  with faster timelines and more efficient court processes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services in Las Vegas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Probate Real Estate Services in Las Vegas
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive probate real estate services tailored to Las Vegas properties
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-blue-50 rounded-lg">
              <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">How Much Is My Inherited Property Worth?</h3>
              <p className="text-gray-600">
                Professional appraisal and market analysis for downtown and Strip area properties. 
                Quick turnaround for probate court requirements.
              </p>
            </div>
            
            <div className="text-center p-6 bg-green-50 rounded-lg">
              <Clock className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sale Management</h3>
              <p className="text-gray-600">
                Complete probate sale management from listing to closing. 
                Expert handling of court requirements and documentation.
              </p>
            </div>
            
            <div className="text-center p-6 bg-purple-50 rounded-lg">
              <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Court Representation</h3>
              <p className="text-gray-600">
                Direct access to Clark County probate court. 
                Established relationships with commissioners and court staff.
              </p>
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Las Vegas Probate Process?
          </h2>
          <p className="text-xl mb-8">
            Get a free consultation and learn how Nevada's faster probate timeline 
            can help you sell inherited property in Las Vegas quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-702-830-9222"
              className="bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Call (702) 830-9222
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Free Las Vegas Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Office Location in Las Vegas
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200 max-w-4xl mx-auto">
            <iframe
              src="https://www.google.com/maps?q=400+S+4th+Street+Suite+250+B,+Las+Vegas,+NV+89101&output=embed&hl=en&z=13"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Las Vegas Probate Real Estate Office Location"
              className="w-full"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=400+S+4th+Street+Suite+250+B,+Las+Vegas,+NV+89101"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Get Directions to Our Office
            </a>
          </div>
        </div>
      </section>

      {/* Related Resources Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
            Related Resources
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Link href="/services/" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Our Probate Services</h3>
              <p className="text-secondary-600 text-sm">Complete probate property services for Las Vegas estates.</p>
            </Link>
            <Link href="/resources/nevada-probate-guide/" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Nevada Probate Guide</h3>
              <p className="text-secondary-600 text-sm">Complete guide to Nevada probate process and requirements.</p>
            </Link>
            <Link href="/blog/las-vegas-market-jan-2025/" className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Las Vegas Market Update</h3>
              <p className="text-secondary-600 text-sm">Latest Las Vegas probate property market trends and insights.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Locations */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/locations/"
            className="text-blue-600 hover:text-blue-800 font-semibold"
          >
            ← Back to All Nevada Locations
          </Link>
        </div>
      </section>
    </div>
  );
}
