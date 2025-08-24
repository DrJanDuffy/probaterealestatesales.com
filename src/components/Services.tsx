import { Home, Calculator, Users, FileText, Shield, TrendingUp, Clock, DollarSign, Award, Gavel, Heart, Target, Building, MapPin } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Estate Property Valuation',
    description: 'Get a comprehensive market analysis and court-compliant property appraisal to ensure maximum value for your inherited estate.',
    features: ['Free Market Analysis', 'Court-Compliant Appraisals', 'Detailed Comparative Reports', 'Property Condition Assessment'],
    timeline: '3-5 days',
    pricing: 'Free consultation',
    question: 'How Much Is My Inherited Property Worth?',
    specialNote: 'Includes neighborhood analysis and market trends'
  },
  {
    icon: Gavel,
    title: 'Probate Process Navigation',
    description: 'Step-by-step guidance through court requirements with coordination of attorneys and executors.',
    features: ['Court Requirement Guidance', 'Attorney Coordination', 'Executor Support', 'Timeline Management'],
    timeline: 'Ongoing support',
    pricing: 'Included in service',
    question: 'How Long Will This Take?',
    specialNote: 'We handle all court communications and deadlines'
  },
  {
    icon: Building,
    title: 'Property Preparation & Sale',
    description: 'Complete property preparation including estate clean-out, repairs, staging, and strategic marketing.',
    features: ['Estate Clean-out Coordination', 'Property Repairs Management', 'Professional Staging', 'Strategic Marketing'],
    timeline: '45 days',
    pricing: 'Standard commission',
    question: 'How Long Will This Take?',
    specialNote: 'Average 15% above initial estate valuations'
  },
  {
    icon: Heart,
    title: 'Family Support Services',
    description: 'Sensitive guidance for families during difficult times with mediation between multiple heirs.',
    features: ['Family Mediation', 'Emotional Support', 'Clear Communication', 'Heir Coordination'],
    timeline: 'Ongoing support',
    pricing: 'Included in service',
    question: 'How Long Will This Take?',
    specialNote: 'We handle sensitive family dynamics with care'
  },
  {
    icon: FileText,
    title: 'Legal Documentation',
    description: 'Complete handling of all legal documents and probate court requirements with expert guidance.',
    features: ['Court Petition Preparation', 'Required Disclosures', 'Nevada Law Compliance', 'Document Filing'],
    timeline: '1-2 weeks',
    pricing: 'Court fees only',
    question: 'What Documents Do I Need?',
    specialNote: 'Death certificate, will, property deeds, court letters'
  },
  {
    icon: Shield,
    title: 'Legal Compliance & Risk Management',
    description: 'Protect your interests with comprehensive compliance and risk assessment throughout the process.',
    features: ['Nevada Law Compliance', 'Risk Assessment', 'Insurance Review', 'Liability Protection'],
    timeline: '1-2 weeks',
    pricing: 'Included in service',
    question: 'How Long Will This Take?',
    specialNote: 'We ensure full compliance with all probate laws'
  },
  {
    icon: Target,
    title: 'Market Optimization & Buyer Outreach',
    description: 'Strategic marketing approach to qualified buyers with proven negotiation support.',
    features: ['Qualified Buyer Outreach', 'Marketing Strategy', 'Negotiation Support', 'Closing Coordination'],
    timeline: '30-45 days',
    pricing: 'Standard commission',
    question: 'How Long Will This Take?',
    specialNote: '98% client satisfaction rate'
  },
  {
    icon: MapPin,
    title: 'Neighborhood & Market Analysis',
    description: 'Comprehensive analysis of local market conditions and neighborhood trends for optimal pricing.',
    features: ['Local Market Trends', 'Neighborhood Analysis', 'Comparable Sales', 'Price Optimization'],
    timeline: '2-3 days',
    pricing: 'Free analysis',
    question: 'How Much Is My Inherited Property Worth?',
    specialNote: 'Includes Summerlin, Henderson, and all Clark County areas'
  }
];

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="h-4 w-4" />
            Dr. Jan Duffy's Probate Real Estate Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Comprehensive Probate Services
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Dr. Jan Duffy provides end-to-end solutions to help families navigate the complex process 
            of probate real estate with compassion, expertise, and maximum value for your estate.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="card p-8 hover:scale-105 transition-transform duration-300 group border-l-4 border-l-primary-500"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center group-hover:bg-primary-200 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-secondary-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-secondary-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={`${service.title}-${feature}`} className="flex items-center gap-3 text-sm text-secondary-600">
                    <div className="w-2 h-2 bg-primary-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Question-based subheadings */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-secondary-600">
                  <Clock className="h-4 w-4 text-primary-500" />
                  <span className="font-medium">{service.question}</span>
                  <span className="text-primary-600 font-semibold">{service.timeline}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary-600">
                  <DollarSign className="h-4 w-4 text-primary-500" />
                  <span className="font-medium">What Does This Cost?</span>
                  <span className="text-primary-600 font-semibold">{service.pricing}</span>
                </div>
              </div>

              {/* Special notes */}
              {service.specialNote && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <p className="text-xs text-blue-700 font-medium">
                    {service.specialNote}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* RealScout Office Listings - Lower Price Range */}
        <div className="mt-16 mb-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Affordable Las Vegas Properties
            </h3>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Discover quality properties in the $500K-$750K range. Perfect for investors 
              and families looking for value in the Las Vegas market.
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

        {/* RealScout Office Listings - Higher Price Range */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Premium Las Vegas Properties
            </h3>
            <p className="text-lg text-secondary-600 max-w-3xl mx-auto">
              Browse our current inventory of premium properties in the Las Vegas area. 
              These properties are available for immediate purchase with our expert guidance.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <realscout-office-listings 
              agent-encoded-id="QWdlbnQtMjI1MDUw" 
              sort-order="PRICE_HIGH" 
              listing-status="For Sale" 
              property-types="MF,SFR,OTHER,LAL" 
              price-min="500000" 
              price-max="850000">
            </realscout-office-listings>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12 border border-primary-100">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Ready to Get Started with Dr. Jan Duffy?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your specific probate situation and learn 
              how Dr. Duffy can help maximize the value of your inherited property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="http://drjanduffy.realscout.com/onboarding" className="btn-primary inline-block">
                Schedule Free Consultation
              </a>
              <a href="/resources/nevada-probate-guide" className="btn-outline inline-block">
                Download Free Probate Guide
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-6 justify-center text-sm text-secondary-600">
              <span className="flex items-center gap-2">
                <Award className="h-4 w-4 text-primary-600" />
                Court-Approved Expert
              </span>
              <span className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-accent-600" />
                500+ Properties Sold
              </span>
              <span className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-green-600" />
                5-Star Reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
