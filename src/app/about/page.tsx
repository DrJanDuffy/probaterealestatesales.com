import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Mail, Award, BookOpen, Users, Star, TrendingUp, Shield, Clock, MapPin } from 'lucide-react';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'About Dr. Jan Duffy | Probate Real Estate Expert | Las Vegas, NV',
  description: 'Meet Dr. Jan Duffy, licensed Nevada real estate professional specializing in probate real estate sales. 20+ years experience, Ph.D. in Research, expert in Clark County probate procedures.',
  keywords: 'Dr. Jan Duffy, probate real estate expert, Las Vegas real estate agent, Nevada probate specialist, probate real estate broker, licensed real estate professional',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/about/',
  },
  openGraph: {
    title: 'About Dr. Jan Duffy | Probate Real Estate Expert',
    description: 'Meet Dr. Jan Duffy, licensed Nevada real estate professional specializing in probate real estate sales with 20+ years of experience.',
    type: 'website',
    url: 'https://www.probaterealestatesales.com/about/',
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SchemaMarkup type="home" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Dr. Jan Duffy
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Licensed Nevada Real Estate Professional | Probate Real Estate Specialist
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5" />
                <span>License #S.0197614</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>20+ Years Experience</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5" />
                <span>Las Vegas, Nevada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Column - Image and Credentials */}
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 mb-8">
                <div className="aspect-square max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
                  <img
                    src="/images/dr-jan-duffy.jpg"
                    alt="Dr. Jan Duffy - Probate Real Estate Expert"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Credentials */}
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center">
                    <Award className="h-6 w-6 text-primary-600 mr-2" />
                    Professional Credentials
                  </h3>
                  <ul className="space-y-2 text-secondary-700">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span><strong>License:</strong> Nevada Real Estate License #S.0197614</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span><strong>Education:</strong> Ph.D. in Research</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span><strong>Specialization:</strong> Probate Real Estate</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span><strong>Experience:</strong> 20+ Years in Las Vegas Real Estate</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                  <h3 className="text-xl font-semibold text-secondary-900 mb-4 flex items-center">
                    <Star className="h-6 w-6 text-primary-600 mr-2" />
                    Expertise Areas
                  </h3>
                  <ul className="space-y-2 text-secondary-700">
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Probate Property Sales</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Estate Liquidation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Clark County Probate Court Procedures</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Trust Administration</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Property Valuation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary-600 mr-2">•</span>
                      <span>Court-Approved Sales</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Biography */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                  Helping You Move Forward—The Professional Way
                </h2>
                <p className="text-lg text-secondary-700 leading-relaxed mb-4">
                  As a highly-trained, professional, and skilled real estate specialist with extensive probate expertise, 
                  you can be confident with me helping you move into the next season of life with convenience while 
                  maximizing your sale proceeds.
                </p>
                <p className="text-lg text-secondary-700 leading-relaxed mb-4">
                  I've supported hundreds of people and families with real property including Single Family Homes, 
                  High-Rise Units, Multi-Family Properties, Condos, and Land in the Las Vegas valley since 2004. 
                  My background includes specialized knowledge in probate real estate, estate liquidation, and 
                  Clark County probate court procedures.
                </p>
                <p className="text-lg text-secondary-700 leading-relaxed mb-4">
                  With a Ph.D. in Research, I bring analytical rigor and attention to detail to every probate 
                  transaction. I understand the complexities of Nevada probate law and work diligently to ensure 
                  smooth, efficient property sales during what can be a difficult time for families.
                </p>
              </div>

              {/* Stats Section */}
              <div className="grid grid-cols-2 gap-4 my-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 text-center">
                  <TrendingUp className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-secondary-900">20+</div>
                  <div className="text-sm text-secondary-600">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-lg p-6 text-center">
                  <Users className="h-8 w-8 text-green-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-secondary-900">100+</div>
                  <div className="text-sm text-secondary-600">Families Helped</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-lg p-6 text-center">
                  <Clock className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-secondary-900">6-8</div>
                  <div className="text-sm text-secondary-600">Months Timeline</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-lg p-6 text-center">
                  <Shield className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                  <div className="text-3xl font-bold text-secondary-900">100%</div>
                  <div className="text-sm text-secondary-600">Court Trusted</div>
                </div>
              </div>

              {/* Why Choose Section */}
              <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
                <h3 className="text-2xl font-semibold text-secondary-900 mb-4">
                  Why Choose Dr. Jan Duffy?
                </h3>
                <ul className="space-y-3 text-secondary-700">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span><strong>Nevada Probate Expertise:</strong> Deep understanding of Nevada's 6-8 month probate timeline vs California's 9-18 months</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span><strong>Court Experience:</strong> Familiar with Clark County probate commissioners and procedures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span><strong>Compassionate Service:</strong> Understanding that probate sales happen during difficult times</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span><strong>Comprehensive Knowledge:</strong> From certificates of incumbency to trust administration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-2">✓</span>
                    <span><strong>Local Expertise:</strong> Serving all of Clark County including Las Vegas, Henderson, Summerlin, and more</span>
                  </li>
                </ul>
              </div>

              {/* CTA Section */}
              <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-xl p-8 text-white text-center">
                <h3 className="text-2xl font-bold mb-4">Let's Discuss Your Probate Real Estate Needs</h3>
                <p className="text-primary-100 mb-6">
                  Schedule a free consultation to discuss your probate property situation and learn how we can help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+1-702-830-9222"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary-600 rounded-md font-medium hover:bg-blue-50 transition-colors"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Call (702) 830-9222
                  </a>
                  <a
                    href="mailto:DrJanSells@ProbateRealEstateSales.com"
                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded-md font-medium hover:bg-white hover:text-primary-600 transition-colors"
                  >
                    <Mail className="h-5 w-5 mr-2" />
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-secondary-900 mb-8 text-center">
              Get In Touch
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <Phone className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Phone</h3>
                <a href="tel:+1-702-830-9222" className="text-primary-600 hover:text-primary-800 font-medium">
                  (702) 830-9222
                </a>
              </div>
              <div className="text-center">
                <Mail className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Email</h3>
                <a href="mailto:DrJanSells@ProbateRealEstateSales.com" className="text-primary-600 hover:text-primary-800 font-medium">
                  DrJanSells@ProbateRealEstateSales.com
                </a>
              </div>
              <div className="text-center">
                <MapPin className="h-8 w-8 text-primary-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-secondary-900 mb-2">Office</h3>
                <p className="text-secondary-600">
                  400 S 4th Street Suite 250 B<br />
                  Las Vegas, NV 89101
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

