/**
 * Educational UI only: root `layout.tsx` already injects WebSite, LocalBusiness, Person, and
 * RealEstateAgent JSON-LD aligned with GBP — do not duplicate graphs here.
 */
import {
  Award,
  Building,
  Globe,
  GraduationCap,
  Mail,
  MapPin,
  Phone,
  Star,
  Users,
} from 'lucide-react';
import { OFFICE_ADDRESS_LINE } from '@/config/site-google';
import { GBP_BUSINESS_NAME, SITE_PHONE_DISPLAY } from '@/lib/site-contact';

export default function SchemaMarkupExpert() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Building className="h-4 w-4" />
            Schema Markup Implementation
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Structured Data for {GBP_BUSINESS_NAME}
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            The site publishes LocalBusiness, Person, and related JSON-LD from a single source that
            mirrors your Google Business Profile (name, NAP, hours, description).
          </p>
        </div>

        {/* Schema Overview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Schema Markup Components
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Person Schema */}
            <div className="bg-white rounded-xl shadow-soft p-6 border border-primary-200">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-primary-700" />
                <h4 className="text-lg font-semibold text-secondary-900">Person Schema</h4>
              </div>
              <p className="text-secondary-600 text-sm mb-4">
                Establishes Dr. Jan Duffy as an individual expert with credentials and expertise
              </p>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• Personal information and contact details</li>
                <li>• Professional credentials and certifications</li>
                <li>• Areas of expertise and knowledge</li>
                <li>• Professional affiliations and memberships</li>
                <li>• Awards and recognition</li>
              </ul>
            </div>

            {/* Real Estate Agent Schema */}
            <div className="bg-white rounded-xl shadow-soft p-6 border border-accent-200">
              <div className="flex items-center gap-3 mb-4">
                <Building className="h-6 w-6 text-accent-600" />
                <h4 className="text-lg font-semibold text-secondary-900">Real Estate Agent</h4>
              </div>
              <p className="text-secondary-600 text-sm mb-4">
                Positions the brokerage-aligned agent entity with services and service area
              </p>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• Business services and offerings</li>
                <li>• Service area and coverage</li>
                <li>• Payment methods and pricing</li>
                <li>• Operating hours and availability</li>
                <li>• Maps and social profile links (sameAs)</li>
              </ul>
            </div>

            {/* Local Business Schema */}
            <div className="bg-white rounded-xl shadow-soft p-6 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="h-6 w-6 text-green-600" />
                <h4 className="text-lg font-semibold text-secondary-900">Local Business</h4>
              </div>
              <p className="text-secondary-600 text-sm mb-4">
                Establishes the business presence in Las Vegas and Clark County
              </p>
              <ul className="space-y-2 text-sm text-secondary-600">
                <li>• Physical location and address</li>
                <li>• Geographic coordinates</li>
                <li>• Service area boundaries</li>
                <li>• Local business information</li>
                <li>• Area-specific services</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Key Schema Properties */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Key Schema Properties
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Credentials */}
            <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
              <h4 className="text-lg font-semibold text-secondary-900 mb-4">
                Professional Credentials
              </h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-primary-700" />
                  <span className="text-sm text-secondary-700">Court-Approved Property Sale</span>
                </div>
                <div className="flex items-center gap-3">
                  <GraduationCap className="h-5 w-5 text-blue-600" />
                  <span className="text-sm text-secondary-700">
                    Doctor of Philosophy in Research
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-secondary-700">Nevada Real Estate License</span>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl shadow-soft p-6 border border-gray-100">
              <h4 className="text-lg font-semibold text-secondary-900 mb-4">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary-700" />
                  <span className="text-sm text-secondary-700">{SITE_PHONE_DISPLAY}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-accent-600" />
                  <span className="text-sm text-secondary-700">
                    DrJanSells@ProbateRealEstateSales.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span className="text-sm text-secondary-700">{OFFICE_ADDRESS_LINE}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Benefits */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-secondary-900 mb-8 text-center">
            Schema Markup Benefits
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-primary-700" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Rich Snippets</h4>
              <p className="text-sm text-secondary-600">
                Enhanced search results with additional information
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-accent-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Local SEO</h4>
              <p className="text-sm text-secondary-600">
                Better visibility in local search results
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Trust Signals</h4>
              <p className="text-sm text-secondary-600">Establishes credibility and authority</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-secondary-900 mb-2">Search Visibility</h4>
              <p className="text-sm text-secondary-600">Improved ranking in relevant searches</p>
            </div>
          </div>
        </div>

        {/* Implementation CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border border-primary-100">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Ready to Implement Schema Markup?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Enhance your search visibility and establish Dr. Jan Duffy as the go-to probate real
              estate expert in Las Vegas search results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/resources/nevada-probate-guide/" className="btn-primary inline-block">
                View Optimized Content
              </a>
              <a
                href="https://drjanduffy.realscout.com/onboarding"
                className="btn-outline inline-block"
              >
                Schedule SEO Consultation
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-secondary-600">
              <span className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary-700" />
                Rich Snippets
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent-600" />
                Local SEO Boost
              </span>
              <span className="flex items-center gap-2">
                <Users className="h-4 w-4 text-green-600" />
                Authority Building
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
