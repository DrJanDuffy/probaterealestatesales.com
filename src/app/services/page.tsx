import { Metadata } from 'next'
import { 
  Phone, 
  Download, 
  Calculator, 
  Clock, 
  DollarSign, 
  Shield, 
  Users, 
  FileText, 
  CheckCircle, 
  Star,
  MapPin,
  Award,
  MessageCircle,
  ArrowRight,
  Calendar,
  Home,
  Building2,
  Gavel,
  Scale,
  Target
} from 'lucide-react'
import SchemaMarkup from '@/components/SchemaMarkup'

export const metadata: Metadata = {
  title: 'Las Vegas Probate Real Estate Services | Sell Inherited Property in 45 Days',
  description: 'Expert probate real estate services in Las Vegas. We sell inherited properties in 45 days while you focus on family. Court confirmation sales, independent administration, and trust services. Free consultation: (702) 830-9222',
  keywords: 'Las Vegas probate real estate, sell inherited property, Clark County probate court, Nevada probate services, probate property sales, court confirmation sales',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/services/',
  },
  openGraph: {
    title: 'Las Vegas Probate Real Estate Services | 45-Day Sale Guarantee',
    description: 'Expert probate real estate services in Las Vegas. We sell inherited properties in 45 days while you focus on family.',
    type: 'website',
    locale: 'en_US',
    url: 'https://www.probaterealestatesales.com/services/',
  },
}

export default function ServicesPage() {
  return (
    <>
      <SchemaMarkup 
        type="service"
        customSchema={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "RealEstateAgent",
              "@id": "https://www.probaterealestatesales.com/#organization",
              "name": "Las Vegas Probate Real Estate Services",
              "url": "https://www.probaterealestatesales.com",
              "logo": "https://www.probaterealestatesales.com/logo.png",
              "areaServed": {
                "@type": "AdministrativeArea",
                "name": "Clark County",
                "containedInPlace": {
                  "@type": "State",
                  "name": "Nevada"
                }
              },
              "knowsAbout": [
                "Nevada Probate Law",
                "NRS Chapter 148",
                "Clark County Probate Court",
                "Letters Testamentary",
                "Certificate of Incumbency",
                "Court Confirmation Sales",
                "Independent Administration"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Probate Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "How Much Is My Inherited Property Worth?",
                    "price": "0",
                    "priceCurrency": "USD",
                    "description": "Free court-accepted property valuation"
                  },
                  {
                    "@type": "Offer",
                    "name": "Court Confirmation Sales",
                    "price": "Paid at closing",
                    "description": "Complete court representation included"
                  },
                  {
                    "@type": "Offer",
                    "name": "45-Day Sale Program",
                    "price": "Standard commission",
                    "description": "Guaranteed 45-day sale or reduced commission"
                  }
                ]
              }
            },
            {
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How long does probate take in Las Vegas?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Traditional probate in Clark County takes 6-8 months. With our expedited services and court relationships, we typically complete sales in 45 days."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What documents do I need to sell probate property in Nevada?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "You need Letters Testamentary or Letters of Administration from Clark County Probate Court. These are issued after filing, which we help coordinate with your attorney."
                  }
                }
              ]
            }
          ]
        }}
      />

      {/* 1. HERO SECTION WITH PSYCHOLOGICAL TRIGGERS */}
      <section className="hero-probate bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20" data-intent="solve-urgent-problem">
        <div className="container mx-auto px-4 text-center">
          {/* Headline Formula: Problem + Solution + Unique Differentiator + Location */}
          <h1 className="emotional-headline text-5xl md:text-6xl font-bold mb-8 leading-tight">
            Overwhelmed by Nevada Probate? We Sell Inherited Properties in{' '}
            <span className="highlight text-yellow-400 animate-pulse">45 Days</span>{' '}
            While You Focus on Family
          </h1>

          {/* Address All Stakeholder Concerns */}
          <div className="stakeholder-messages max-w-4xl mx-auto mb-12">
            <p className="for-executors text-xl mb-3 bg-blue-800/30 px-6 py-3 rounded-lg inline-block mx-2">
              For Executors: Navigate Clark County Court with confidence
            </p>
            <p className="for-heirs text-xl mb-3 bg-green-800/30 px-6 py-3 rounded-lg inline-block mx-2">
              For Heirs: Get fair market value without delays
            </p>
            <p className="for-attorneys text-xl mb-3 bg-purple-800/30 px-6 py-3 rounded-lg inline-block mx-2">
              For Attorneys: Trusted partner for 50+ law firms
            </p>
          </div>

          {/* Social Proof Ticker */}
          <div className="live-ticker bg-white/10 backdrop-blur-sm rounded-lg p-4 mb-12 overflow-hidden">
            <div className="flex space-x-8 animate-scroll">
              <span className="update text-lg whitespace-nowrap">
                🏠 Probate property in Summerlin: Sold in 38 days
              </span>
              <span className="update text-lg whitespace-nowrap">
                📍 Henderson estate: $15K over asking price
              </span>
              <span className="update text-lg whitespace-nowrap">
                ⚖️ Court approval achieved: 98% first attempt
              </span>
              <span className="update text-lg whitespace-nowrap">
                🏠 Probate property in Summerlin: Sold in 38 days
              </span>
              <span className="update text-lg whitespace-nowrap">
                📍 Henderson estate: $15K over asking price
              </span>
              <span className="update text-lg whitespace-nowrap">
                ⚖️ Court approval achieved: 98% first attempt
              </span>
            </div>
          </div>

          {/* Multi-Option CTA Strategy */}
          <div className="cta-matrix space-y-4 md:space-y-0 md:space-x-4 md:flex md:justify-center">
            <a href="http://drjanduffy.realscout.com/onboarding" className="primary-cta bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center space-x-2">
              <Phone className="w-5 h-5" />
                              <span>Need Immediate Help? Call (702) 830-9222</span>
              <span className="availability text-sm block opacity-90">Available 24/7 for urgent matters</span>
            </a>
            <a href="http://drjanduffy.realscout.com/onboarding" className="secondary-cta bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download: "2025 Nevada Probate Timeline + Checklist"</span>
            </a>
            <a href="http://drjanduffy.realscout.com/onboarding" className="tertiary-cta bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-2">
              <Calculator className="w-5 h-5" />
              <span>Get Free Property Assessment</span>
            </a>
          </div>
        </div>
      </section>

      {/* 2. SERVICE CARDS WITH MICRO-CONVERSIONS */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Complete Probate Real Estate Solutions
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Court Confirmation Sales */}
            <div className="service-card bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300" data-service="court-confirmation">
              <div className="text-center mb-6">
                <Gavel className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Court Confirmation Sales: We Handle Every Hearing
                </h3>
              </div>
              
              <p className="problem text-red-600 font-semibold mb-3">
                Worried about court appearances and legal procedures?
              </p>
              <p className="solution text-gray-700 mb-6">
                Our team attends all hearings, prepares all documents, and has a 98% first-approval rate with Clark County Probate Court.
              </p>
              
              <ul className="deliverables space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Prepare & file all court petitions
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Attend Wednesday/Friday hearings with commissioners
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Handle overbid procedures
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Coordinate with your attorney
                </li>
              </ul>
              
              <div className="proof-points bg-blue-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between text-sm text-blue-800">
                  <span className="stat">500+ successful court confirmations</span>
                  <span className="time">Average approval: 21 days</span>
                  <span className="savings">Save $2,500 in attorney fees</span>
                </div>
              </div>
              
              <a href="http://drjanduffy.realscout.com/onboarding" className="micro-conversion w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>See Our Court Confirmation Process</span>
                <ArrowRight className="w-4 h-4" />
                <span className="incentive text-xs opacity-90 block">+ Get free court checklist</span>
              </a>
            </div>

            {/* Independent Administration */}
            <div className="service-card bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300" data-service="independent-administration">
              <div className="text-center mb-6">
                <Shield className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Independent Administration: Faster & More Private
                </h3>
              </div>
              
              <p className="problem text-red-600 font-semibold mb-3">
                Want to avoid court oversight and speed up the process?
              </p>
              <p className="solution text-gray-700 mb-6">
                Independent administration allows you to sell property without court confirmation, reducing timeline by 3-4 months.
              </p>
              
              <ul className="deliverables space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  No court hearings required
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Faster closing process
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Lower legal costs
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Maintain privacy
                </li>
              </ul>
              
              <div className="proof-points bg-green-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between text-sm text-green-800">
                  <span className="stat">300+ independent sales</span>
                  <span className="time">Average time: 45 days</span>
                  <span className="savings">Save $3,000+ in fees</span>
                </div>
              </div>
              
              <a href="http://drjanduffy.realscout.com/onboarding" className="micro-conversion w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>Learn About Independent Administration</span>
                <ArrowRight className="w-4 h-4" />
                <span className="incentive text-xs opacity-90 block">+ Get qualification checklist</span>
              </a>
            </div>

            {/* Trust Administration */}
            <div className="service-card bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300" data-service="trust-administration">
              <div className="text-center mb-6">
                <FileText className="w-16 h-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Trust Administration: Certificate of Incumbency
                </h3>
              </div>
              
              <p className="problem text-red-600 font-semibold mb-3">
                Need to access trust property but don't have authority?
              </p>
              <p className="solution text-gray-700 mb-6">
                We help obtain certificates of incumbency and navigate trust administration for faster property access and sales.
              </p>
              
              <ul className="deliverables space-y-3 mb-6">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Certificate of incumbency preparation
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Trust document review
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Attorney coordination
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                  Property transfer assistance
                </li>
              </ul>
              
              <div className="proof-points bg-purple-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between text-sm text-purple-800">
                  <span className="stat">200+ trust administrations</span>
                  <span className="time">Average time: 30 days</span>
                  <span className="savings">Cost: $750 flat fee</span>
                </div>
              </div>
              
              <a href="http://drjanduffy.realscout.com/onboarding" className="micro-conversion w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2">
                <span>Start Trust Administration</span>
                <ArrowRight className="w-4 h-4" />
                <span className="incentive text-xs opacity-90 block">+ Get trust review</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 3. HYPER-LOCAL CONTENT SECTIONS */}
      <section className="local-expertise py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            We Know Every Las Vegas Neighborhood's Probate Nuances
          </h2>
          
          <div className="neighborhood-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Summerlin */}
            <article className="neighborhood-card bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Summerlin Probate Sales</h3>
              <ul className="local-insights space-y-2 mb-4">
                <li className="text-sm text-gray-700">• Average sale time: 42 days</li>
                <li className="text-sm text-gray-700">• Common issue: HOA documentation delays</li>
                <li className="text-sm text-gray-700">• Solution: Pre-approved with 12 Summerlin HOAs</li>
                <li className="text-sm text-gray-700">• Recent sale: Red Rock Country Club - $1.2M in 35 days</li>
              </ul>
              <a href="/locations/summerlin/" className="text-red-600 hover:text-red-800 font-semibold flex items-center">
                Summerlin Probate Guide <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </article>

            {/* Henderson */}
            <article className="neighborhood-card bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Henderson Estate Properties</h3>
              <ul className="local-insights space-y-2 mb-4">
                <li className="text-sm text-gray-700">• Average sale time: 48 days</li>
                <li className="text-sm text-gray-700">• Specialty: 55+ communities (Sun City, Anthem)</li>
                <li className="text-sm text-gray-700">• Challenge: Out-of-state heirs coordination</li>
                <li className="text-sm text-gray-700">• Recent: Seven Hills estate - 5 heirs, 3 states, closed in 44 days</li>
              </ul>
              <a href="/locations/henderson/" className="text-green-600 hover:text-green-800 font-semibold flex items-center">
                Henderson Probate Guide <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </article>

            {/* North Las Vegas */}
            <article className="neighborhood-card bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-bold text-gray-900 mb-4">North Las Vegas Probate</h3>
              <ul className="local-insights space-y-2 mb-4">
                <li className="text-sm text-gray-700">• Average sale time: 45 days</li>
                <li className="text-sm text-gray-700">• Specialty: Newer developments & family homes</li>
                <li className="text-sm text-gray-700">• Challenge: Multiple heir coordination</li>
                <li className="text-sm text-gray-700">• Recent: Aliante estate - 3 heirs, closed in 41 days</li>
              </ul>
              <a href="/locations/north-las-vegas/" className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                North Las Vegas Guide <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE ELEMENTS FOR ENGAGEMENT */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Calculate Your Probate Timeline
          </h2>
          
          <div className="interactive-tool max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8" id="probate-timeline">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">
              Get Your Personalized Timeline Estimate
            </h3>
            
            <form className="timeline-calculator space-y-6">
              <div>
                <label htmlFor="location" className="block text-gray-700 font-semibold mb-2">
                  Property Location:
                </label>
                <select id="location" name="location" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Clark County</option>
                  <option>Washoe County</option>
                  <option>Other Nevada County</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="status" className="block text-gray-700 font-semibold mb-2">
                  Current Status:
                </label>
                <select id="status" name="status" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>No attorney yet</option>
                  <option>Attorney hired, no letters</option>
                  <option>Letters testamentary issued</option>
                  <option>Ready to sell</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="type" className="block text-gray-700 font-semibold mb-2">
                  Property Type:
                </label>
                <select id="type" name="type" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                  <option>Single family home</option>
                  <option>Condo/Townhome</option>
                  <option>Investment property</option>
                  <option>Vacant land</option>
                </select>
              </div>
              
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300">
                Get Your Timeline
              </button>
            </form>
            
            <div className="results hidden mt-8 p-6 bg-blue-50 rounded-lg">
              <h4 className="text-xl font-bold text-center mb-4 text-blue-900">
                Your Estimated Timeline:
              </h4>
              <div className="space-y-3 text-center">
                <p className="traditional text-lg">
                  Traditional Probate: <span className="font-bold text-red-600">6-8 months</span>
                </p>
                <p className="our-service text-lg">
                  With Our Services: <span className="font-bold text-green-600">45-60 days</span>
                </p>
                <p className="savings text-xl font-bold text-blue-600">
                  Time Saved: <span>4-6 months</span>
                </p>
                <a href="http://drjanduffy.realscout.com/onboarding" className="cta bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 mt-4 inline-block">
                  Start Accelerated Process Today
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST-BUILDING ELEMENTS */}
      <section className="credibility py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
            Trusted by Las Vegas Probate Attorneys
          </h2>
          
          <div className="endorsements max-w-4xl mx-auto mb-16">
            <blockquote className="attorney-quote bg-gray-50 p-8 rounded-xl text-center">
              <p className="text-xl text-gray-700 mb-6 italic">
                "They understand Nevada probate law better than most realtors. They know about certificates of incumbency, letters testamentary, and court procedures. I refer all my probate clients to them."
              </p>
              <cite className="text-gray-600 font-semibold">
                - Probate Attorney, 20 years experience
              </cite>
            </blockquote>
          </div>
          
          {/* Certification Badges */}
          <div className="certifications flex justify-center space-x-8 mb-16">
            <div className="text-center">
              <Award className="w-16 h-16 text-yellow-500 mx-auto mb-2" />
                              <p className="text-sm text-gray-600">Probate Real Estate Specialist</p>
            </div>
            <div className="text-center">
              <Building2 className="w-16 h-16 text-blue-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Clark County Court Approved Vendor</p>
            </div>
            <div className="text-center">
              <Scale className="w-16 h-16 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-gray-600">Nevada Bar Association Preferred</p>
            </div>
          </div>
          
          {/* Live Chat Integration */}
          <div className="trust-chat text-center bg-blue-50 p-8 rounded-xl">
            <p className="text-xl text-gray-700 mb-4">
              Questions? Our probate specialists are online now
            </p>
            <a href="http://drjanduffy.realscout.com/onboarding" className="chat-trigger bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 flex items-center mx-auto space-x-2 inline-block">
              <MessageCircle className="w-5 h-5" />
              <span>Chat with Probate Expert</span>
            </a>
            <p className="availability text-sm text-gray-600 mt-3">
              Average response: 30 seconds
            </p>
          </div>
        </div>
      </section>

      {/* 6. CONVERSION OPTIMIZATION ELEMENTS */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-slate-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready to Start Your Probate Property Sale?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Don't let probate delays keep you from moving forward. Our team has helped hundreds of families in Las Vegas sell inherited properties quickly and for fair market value.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 p-6 rounded-lg">
              <Clock className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">45-Day Guarantee</h3>
              <p className="text-gray-300">We guarantee to sell your property in 45 days or reduce our commission</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <DollarSign className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">No Upfront Costs</h3>
              <p className="text-gray-300">All fees are paid at closing - no out-of-pocket expenses</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Family-Focused</h3>
              <p className="text-gray-300">We handle the legal details while you focus on what matters most</p>
            </div>
          </div>
          
          <div className="space-x-4">
            <a href="http://drjanduffy.realscout.com/onboarding" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 inline-block">
              Get Free Property Assessment
            </a>
            <a href="http://drjanduffy.realscout.com/onboarding" className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 inline-block">
              Download Probate Guide
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
