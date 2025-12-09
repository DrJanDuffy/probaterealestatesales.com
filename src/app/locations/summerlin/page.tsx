import {
  ArrowRight,
  Calendar,
  Clock,
  DollarSign,
  Flag,
  Home,
  MapPin,
  Mountain,
  Phone,
  TreePine,
  Users,
} from 'lucide-react';
import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import SchemaMarkup from '@/components/SchemaMarkup';

const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="py-16 text-center text-gray-500">Loading FAQ...</div>,
});

export const metadata: Metadata = {
  title: 'Summerlin Probate Real Estate Services | Master-Planned Community',
  description:
    "Expert probate real estate services in Summerlin, Nevada. High-end luxury property probate management with Nevada's fastest timeline: 6-8 months. Free consultation: (702) 830-9222",
  keywords:
    'Summerlin probate real estate, master-planned community probate, golf course properties, luxury homes, Nevada probate timeline, Clark County probate court',
  openGraph: {
    title: 'Summerlin Probate Real Estate Services | Master-Planned Community',
    description:
      'Expert probate real estate services in Summerlin with 6-8 month timeline. Free consultation available.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function SummerlinPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Locations', url: '/locations/' },
    { name: 'Summerlin', url: '/locations/summerlin/' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      <SchemaMarkup type="faq" location="Summerlin" breadcrumbs={breadcrumbs} />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Summerlin Probate Real Estate Services
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
            Expert probate real estate services in Summerlin, Nevada. Master-planned community with
            luxury homes and golf course properties.
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

      {/* Summerlin Specific Info */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Summerlin Probate Real Estate Expertise
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Summerlin represents the pinnacle of master-planned community living in Las Vegas.
                With its luxury homes, golf courses, and upscale amenities, Summerlin offers unique
                probate real estate opportunities that require specialized expertise.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Home className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Luxury Home Market</h3>
                    <p className="text-gray-600">
                      High-end properties with premium features, requiring specialized probate real
                      estate expertise for proper valuation and marketing.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Flag className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Golf Course Properties</h3>
                    <p className="text-gray-600">
                      Properties bordering world-class golf courses command premium prices and
                      require expert probate real estate knowledge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mountain className="h-6 w-6 text-purple-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Mountain Views</h3>
                    <p className="text-gray-600">
                      Properties with Red Rock Canyon views offer exceptional probate real estate
                      opportunities in Summerlin's most desirable areas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Summerlin Probate Timeline</h3>
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

              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-800">
                  <strong>Note:</strong> Summerlin probate timeline is 6-8 months vs California's
                  9-18 months. Get your inheritance faster with Nevada's efficient process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summerlin Neighborhoods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Summerlin Neighborhoods & Probate Real Estate
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Expert probate real estate services across Summerlin's most prestigious neighborhoods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Ridges</h3>
              <p className="text-gray-600 mb-4">
                Ultra-luxury community with custom homes and Red Rock Canyon views. Premium probate
                real estate opportunities.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Custom luxury homes</div>
                <div>• Red Rock Canyon views</div>
                <div>• Private golf course</div>
                <div>• Exclusive amenities</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Red Rock Country Club</h3>
              <p className="text-gray-600 mb-4">
                Golf course community with luxury homes and mountain views. High-end probate
                properties available.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Golf course properties</div>
                <div>• Mountain views</div>
                <div>• Country club lifestyle</div>
                <div>• Luxury amenities</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Paseos</h3>
              <p className="text-gray-600 mb-4">
                Upscale community with Mediterranean-style homes and resort-style living. Excellent
                probate opportunities.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Mediterranean architecture</div>
                <div>• Resort-style amenities</div>
                <div>• Upscale living</div>
                <div>• Family-friendly</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Trails</h3>
              <p className="text-gray-600 mb-4">
                Nature-focused community with hiking trails and mountain views. Unique probate
                property options.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Hiking trails</div>
                <div>• Mountain views</div>
                <div>• Nature-focused</div>
                <div>• Active lifestyle</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Vistas</h3>
              <p className="text-gray-600 mb-4">
                Elevated community with panoramic views and luxury homes. Premium probate real
                estate market.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Panoramic views</div>
                <div>• Luxury homes</div>
                <div>• Elevated location</div>
                <div>• Privacy and views</div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">The Mesa</h3>
              <p className="text-gray-600 mb-4">
                Established community with mature landscaping and family homes. Great probate
                property options.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Mature landscaping</div>
                <div>• Established community</div>
                <div>• Family homes</div>
                <div>• Convenient location</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Market Expertise */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Luxury Probate Real Estate Expertise
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Specialized knowledge for high-end Summerlin properties
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                How Much Is My Inherited Property Worth?
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Home className="h-6 w-6 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Custom Home Expertise</p>
                    <p className="text-gray-600">
                      Specialized valuation for custom luxury homes with unique features
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Flag className="h-6 w-6 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Golf Course Premiums</p>
                    <p className="text-gray-600">
                      Understanding of golf course property value premiums
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mountain className="h-6 w-6 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">View Premiums</p>
                    <p className="text-gray-600">
                      Expertise in valuing properties with mountain and canyon views
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-purple-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Luxury Marketing Strategies</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">High-Net-Worth Buyers</p>
                    <p className="text-gray-600">Targeted marketing to luxury property buyers</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <TreePine className="h-6 w-6 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Premium Listings</p>
                    <p className="text-gray-600">
                      Professional photography and luxury presentation
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-6 w-6 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Discrete Marketing</p>
                    <p className="text-gray-600">
                      Confidential marketing for high-profile probate properties
                    </p>
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
              Summerlin residents have convenient access to Clark County's efficient probate court
              system
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Court Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Clark County Regional Justice Center
                    </p>
                    <p className="text-gray-600">200 Lewis Ave, Las Vegas, NV 89101</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Court Phone</p>
                    <p className="text-gray-600">(702) 671-4500</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Probate Commissioners</p>
                    <p className="text-gray-600">
                      James Fontana (Fridays), Russell Geis (Wednesdays 9:30 AM)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Court Costs & Fees</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Probate Filing Fee</span>
                  <span className="font-semibold text-purple-600">$1,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Attorney Fees (Avg)</span>
                  <span className="font-semibold text-purple-600">$8,000-9,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Trust Administration</span>
                  <span className="font-semibold text-purple-600">$2,500</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Certificate of Incumbency</span>
                  <span className="font-semibold text-purple-600">$750</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                <p className="text-sm text-purple-800">
                  <strong>Summerlin Advantage:</strong> Same Clark County court system as Las Vegas,
                  with the same efficient 6-8 month timeline and $1,000 court costs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RealScout Property Listings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Current Las Vegas Properties Available
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our current inventory of properties in the Las Vegas area. These properties are
              available for immediate purchase with our expert guidance.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_LOW"
              listing-status="For Sale,For Rent"
              property-types="MF,SFR,OTHER,LAL"
              price-min="500000"
              price-max="750000"
            ></realscout-office-listings>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Summerlin Probate Process?
          </h2>
          <p className="text-xl mb-8">
            Get a free consultation and learn how Nevada's faster probate timeline can help you sell
            inherited property in Summerlin quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+1-702-830-9222"
              className="bg-white text-purple-600 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Call (702) 830-9222
            </a>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Free Summerlin Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions About Summerlin Probate
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about probate real estate in Summerlin, Nevada
              </p>
            </div>
            <FAQ />
            <div className="text-center mt-8">
              <Link
                href="/faq"
                className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-800 font-semibold"
              >
                View All FAQs
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Locations */}
      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link href="/locations" className="text-purple-600 hover:text-purple-800 font-semibold">
            ← Back to All Nevada Locations
          </Link>
        </div>
      </section>
    </div>
  );
}
