import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Clock, DollarSign, Users, Phone, Mail, Calendar, Home, TreePine, Mountain, Flag, Users2, Car } from 'lucide-react';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Mesquite Probate Real Estate Services | Golf Community & Retirement',
  description: 'Expert probate real estate services in Mesquite, Nevada. Fast 45-day probate process vs 6-8 months. Free consultation: (702) 830-9222',
  keywords: 'Mesquite probate real estate, golf community probate, retirement probate, Nevada probate timeline, Clark County probate court',
  openGraph: {
    title: 'Mesquite Probate Real Estate Services | Golf Community & Retirement',
    description: 'Expert probate real estate services in Mesquite with 6-8 month timeline. Free consultation available.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function MesquitePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <SchemaMarkup type="location" location="Mesquite" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-900 to-emerald-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Mesquite Probate Real Estate Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Expert probate real estate services in Mesquite, Nevada. 
            Golf community probate management with retirement focus and Nevada's fastest timeline.
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

      {/* Mesquite Specific Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Mesquite Probate Real Estate Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Mesquite offers unique advantages for probate real estate sales. As a premier golf community with a strong retirement focus, it combines luxury amenities with excellent probate court access through Clark County's efficient system.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Flag className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Golf Community Excellence</h3>
                    <p className="text-gray-600">World-class golf courses and luxury amenities create premium probate real estate opportunities.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Users2 className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Retirement Destination</h3>
                    <p className="text-gray-600">Active adult communities and retirement-focused properties offer unique probate real estate markets.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Mountain className="h-6 w-6 text-emerald-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Desert Beauty</h3>
                    <p className="text-gray-600">Stunning desert landscapes and mountain views provide unique probate real estate opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Mesquite Probate Timeline</h3>
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
              
              <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                <p className="text-sm text-emerald-800">
                  <strong>Note:</strong> Mesquite probate timeline is 6-8 months vs California's 9-18 months. 
                  Get your inheritance faster with Nevada's efficient process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mesquite Neighborhoods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mesquite Neighborhoods & Probate Real Estate
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert probate real estate services across Mesquite's most desirable neighborhoods
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Falcon Ridge</h3>
              <p className="text-gray-600 mb-4">
                Luxury golf course community with custom homes and mountain views. Premium probate real estate opportunities.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Golf course properties</div>
                <div>• Custom luxury homes</div>
                <div>• Mountain views</div>
                <div>• Upscale amenities</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sun City Mesquite</h3>
              <p className="text-gray-600 mb-4">
                55+ active adult community with golf courses and resort-style living. Specialized probate services for retirement properties.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• 55+ community</div>
                <div>• Active adult lifestyle</div>
                <div>• Golf course access</div>
                <div>• Resort amenities</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mesquite Hills</h3>
              <p className="text-gray-600 mb-4">
                Elevated community with panoramic desert views and luxury homes. High-end probate real estate opportunities.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Panoramic views</div>
                <div>• Luxury homes</div>
                <div>• Elevated location</div>
                <div>• Privacy and views</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pioneer Park</h3>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Desert Valley</h3>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mesquite Heights</h3>
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
          </div>
        </div>
      </section>

      {/* Golf & Retirement Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Golf & Retirement Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized knowledge for Mesquite's unique market characteristics
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Golf Community Valuation</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Flag className="h-6 w-6 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Golf Course Premiums</p>
                    <p className="text-gray-600">Understanding of golf course property value premiums</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Home className="h-6 w-6 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Luxury Home Market</p>
                    <p className="text-gray-600">Expertise in high-end inherited property valuation</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mountain className="h-6 w-6 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-900">View Premiums</p>
                    <p className="text-gray-600">Expertise in valuing properties with desert and mountain views</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-emerald-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Retirement Market Knowledge</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users2 className="h-6 w-6 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Active Adult Communities</p>
                    <p className="text-gray-600">Understanding of 55+ community dynamics</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <TreePine className="h-6 w-6 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Retirement Amenities</p>
                    <p className="text-gray-600">Knowledge of retirement-focused property features</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Car className="h-6 w-6 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Accessibility Features</p>
                    <p className="text-gray-600">Understanding of age-friendly property requirements</p>
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
              Mesquite residents have convenient access to Clark County's efficient probate court system
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Court Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Clark County Regional Justice Center</p>
                    <p className="text-gray-600">200 Lewis Ave, Las Vegas, NV 89101</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-emerald-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Court Phone</p>
                    <p className="text-gray-600">(702) 671-4500</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-emerald-600" />
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
                  <span className="font-semibold text-emerald-600">$1,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Attorney Fees (Avg)</span>
                  <span className="font-semibold text-emerald-600">$8,000-9,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Trust Administration</span>
                  <span className="font-semibold text-emerald-600">$2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Certificate of Incumbency</span>
                  <span className="font-semibold text-emerald-600">$750</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-emerald-50 rounded-lg">
                <p className="text-sm text-emerald-800">
                  <strong>Mesquite Advantage:</strong> Same Clark County court system as Las Vegas, 
                  with the same efficient 6-8 month timeline and $1,000 court costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Mesquite Probate Process?
          </h2>
          <p className="text-xl mb-8">
            Get a free consultation and learn how Nevada's faster probate timeline 
            can help you sell inherited property in Mesquite quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-702-830-9222"
              className="bg-white text-emerald-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Call (702) 830-9222
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-emerald-600 transition-colors"
            >
              Free Mesquite Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Back to Locations */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/locations"
            className="text-emerald-600 hover:text-emerald-800 font-semibold"
          >
            ← Back to All Nevada Locations
          </Link>
        </div>
      </section>
    </div>
  );
}
