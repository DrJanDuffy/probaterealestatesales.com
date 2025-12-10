import { ArrowRight, Award, Calendar, Download, Mail, Phone, Shield, Star } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      {/* Las Vegas Skyline Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-primary-200 to-transparent" />
      </div>

      <div className="relative section-padding w-full">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              {/* Professional Headline */}
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Award className="h-4 w-4" />
                  Probate Real Estate Specialist
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gradient">Las Vegas Probate Realtor</span>
                  <br />
                  <span className="text-secondary-900">Expert in Probate Homes</span>
                  <br />
                  <span className="text-gradient">Sell in 45 Days</span>
                </h1>

                <p className="text-xl text-secondary-600 max-w-2xl">
                  Top-rated probate realtor specializing in probate homes and inherited property
                  sales. Compassionate, professional guidance through every step of your probate
                  property sale.
                </p>
              </div>

              {/* Key Credentials */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-soft border-l-4 border-primary-500">
                  <div className="p-2 bg-primary-100 rounded-full">
                    <Award className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-900">20+ Years Experience</p>
                    <p className="text-sm text-secondary-600">Las Vegas Real Estate</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-soft border-l-4 border-accent-500">
                  <div className="p-2 bg-accent-100 rounded-full">
                    <Shield className="h-5 w-5 text-accent-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-900">Court-Approved Property Sale</p>
                    <p className="text-sm text-secondary-600">Legal Compliance</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-soft border-l-4 border-green-500">
                  <div className="p-2 bg-green-100 rounded-full">
                    <Star className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-900">Ph.D. in Research</p>
                    <p className="text-sm text-secondary-600">Academic Excellence</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-soft border-l-4 border-purple-500">
                  <div className="p-2 bg-purple-100 rounded-full">
                    <Calendar className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-secondary-900">45-Day Timeline</p>
                    <p className="text-sm text-secondary-600">Nevada's Fastest</p>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 py-4">
                <div className="flex items-center gap-2 text-secondary-700">
                  <div className="flex text-accent-500">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={`star-${star}`} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <span className="font-medium">5-Star Reviews</span>
                </div>

                <div className="flex items-center gap-2 text-secondary-700">
                  <Shield className="h-5 w-5 text-primary-600" />
                  <span className="font-medium">Comprehensive Probate Real Estate Services</span>
                </div>

                <div className="flex items-center gap-2 text-secondary-700">
                  <Award className="h-5 w-5 text-accent-600" />
                  <span className="font-medium">Court Trusted</span>
                </div>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="http://drjanduffy.realscout.com/onboarding"
                  className="btn-primary group inline-flex items-center justify-center text-lg px-8 py-4 focus-ring"
                  aria-label="Get your free probate property consultation"
                  rel="noopener noreferrer"
                >
                  Get Your Free Probate Property Consultation
                  <ArrowRight className="ml-2 h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="/resources/nevada-probate-guide/"
                  className="btn-outline inline-flex items-center justify-center text-lg px-8 py-4 focus-ring"
                  aria-label="Download free Nevada probate guide"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Free Probate Guide
                </a>
              </div>

              {/* Quick Links */}
              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="/services/"
                  className="text-primary-600 hover:text-primary-800 font-medium text-sm focus-ring rounded-md px-2 py-1"
                  aria-label="View our probate services"
                >
                  Our Services →
                </a>
                <a
                  href="/locations/"
                  className="text-primary-600 hover:text-primary-800 font-medium text-sm focus-ring rounded-md px-2 py-1"
                  aria-label="View service areas"
                >
                  Service Areas →
                </a>
                <a
                  href="/blog/"
                  className="text-primary-600 hover:text-primary-800 font-medium text-sm focus-ring rounded-md px-2 py-1"
                  aria-label="Read our blog and learn more"
                >
                  Learn More →
                </a>
                <a
                  href="/faq/"
                  className="text-primary-600 hover:text-primary-800 font-medium text-sm focus-ring rounded-md px-2 py-1"
                  aria-label="View frequently asked questions"
                >
                  Common Questions →
                </a>
                <a
                  href="/testimonials/"
                  className="text-primary-600 hover:text-primary-800 font-medium text-sm focus-ring rounded-md px-2 py-1"
                  aria-label="Read client success stories"
                >
                  Success Stories →
                </a>
              </div>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Call Us Today</p>
                    <p className="font-semibold text-secondary-900 text-lg">(702) 830-9222</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 bg-accent-100 rounded-full">
                    <Mail className="h-6 w-6 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Email Us</p>
                    <p className="font-semibold text-secondary-900 text-lg">
                      DrJanSells@ProbateRealEstateSales.com
                    </p>
                  </div>
                </div>
              </div>

              {/* Urgency Message */}
              <div className="bg-accent-50 border border-accent-200 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">⚡</div>
                  <div>
                    <p className="font-semibold text-accent-800">Probate deadlines are strict</p>
                    <p className="text-sm text-accent-700">Don't delay - get expert help today</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Image/Visual Section */}
            <div className="relative">
              {/* Professional Photo */}
              <div className="relative z-10 mb-8">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center">
                    <div className="w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full border-4 border-primary-200 shadow-lg">
                      <Image
                        src="/images/dr-jan-duffy.jpg"
                        alt="Dr. Jan Duffy - Probate Real Estate Specialist"
                        width={192}
                        height={192}
                        className="w-full h-full object-cover"
                        priority
                        fetchPriority="high"
                        loading="eager"
                        sizes="(max-width: 768px) 192px, 192px"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-secondary-900 mb-2">Dr. Jan Duffy</h3>
                    <p className="text-secondary-600">Probate Real Estate Specialist</p>
                  </div>

                  {/* Credentials */}
                  <div className="mt-6 pt-6 border-t border-secondary-200 space-y-3">
                    <div className="flex items-center gap-3">
                      <Award className="h-5 w-5 text-primary-600" />
                      <span className="text-sm text-secondary-700">
                        9 Exceptions to Probate Expert
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-accent-600" />
                      <span className="text-sm text-secondary-700">Court Trusted</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Star className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-secondary-700">Property Valuation Expert</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nevada Probate Services Card */}
              <div className="relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl p-6 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <div className="space-y-4">
                    <h4 className="text-lg font-bold text-secondary-900 text-center">
                      Overwhelmed by Nevada Probate?
                    </h4>
                    <p className="text-sm text-secondary-600 text-center font-medium">
                      We Sell Inherited Properties in 45 Days While You Focus on Family
                    </p>
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary-500 rounded-full" />
                        <span className="text-secondary-700">
                          <strong>For Executors:</strong> Navigate Clark County Court with
                          confidence
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-accent-500 rounded-full" />
                        <span className="text-secondary-700">
                          <strong>For Heirs:</strong> Get fair market value without delays
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-green-500 rounded-full" />
                        <span className="text-secondary-700">
                          <strong>For Attorneys:</strong> Trusted partner for 50+ law firms
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-200 rounded-full opacity-20 animate-bounce-gentle" />
              <div
                className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-200 rounded-full opacity-20 animate-bounce-gentle"
                style={{ animationDelay: '1s' }}
              />
              <div
                className="absolute top-1/2 -right-12 w-16 h-16 bg-green-200 rounded-full opacity-20 animate-bounce-gentle"
                style={{ animationDelay: '2s' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
