import { Home, Calculator, Users, FileText, Shield, TrendingUp, Clock, DollarSign } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'How Much Is My Inherited Property Worth?',
    description: 'Get an accurate market analysis and property valuation to ensure maximum value for your inherited estate.',
    features: ['Market Analysis', 'Comparative Sales', 'Property Condition Assessment'],
    timeline: '45 days',
    pricing: 'Free consultation'
  },
  {
    icon: Calculator,
    title: 'Financial Planning',
    description: 'Comprehensive financial planning including tax implications and estate distribution.',
    features: ['Tax Planning', 'Estate Distribution', 'Financial Reporting'],
    timeline: '2-4 weeks',
    pricing: 'Included in service'
  },
  {
    icon: Users,
    title: 'Family Consultation',
    description: 'Sensitive guidance for families during difficult times with clear communication.',
    features: ['Family Meetings', 'Legal Guidance', 'Emotional Support'],
    timeline: 'Ongoing support',
    pricing: 'Included in service'
  },
  {
    icon: FileText,
    title: 'Legal Documentation',
    description: 'Complete handling of all legal documents and probate court requirements.',
    features: ['Court Filings', 'Document Preparation', 'Legal Compliance'],
    timeline: '1-2 weeks',
    pricing: 'Court fees only'
  },
  {
    icon: Shield,
    title: 'Risk Management',
    description: 'Protect your interests with comprehensive risk assessment and mitigation.',
    features: ['Risk Assessment', 'Insurance Review', 'Liability Protection'],
    timeline: '1-2 weeks',
    pricing: 'Included in service'
  },
  {
    icon: TrendingUp,
    title: 'Market Optimization',
    description: 'Strategic marketing and sales approach to maximize property value.',
    features: ['Marketing Strategy', 'Buyer Outreach', 'Negotiation Support'],
    timeline: '45 days',
    pricing: 'Standard commission'
  }
];

export default function Services() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Comprehensive Probate Services
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We provide end-to-end solutions to help families navigate the complex process 
            of probate real estate with confidence and peace of mind.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title}
              className="card p-8 hover:scale-105 transition-transform duration-300 group"
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

              {/* Timeline and Pricing Indicators */}
              <div className="space-y-3 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 text-sm text-secondary-600">
                  <Clock className="h-4 w-4 text-primary-500" />
                  <span className="font-medium">How Long Will This Take?</span>
                  <span className="text-primary-600 font-semibold">{service.timeline}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-secondary-600">
                  <DollarSign className="h-4 w-4 text-primary-500" />
                  <span className="font-medium">What Does This Cost?</span>
                  <span className="text-primary-600 font-semibold">{service.pricing}</span>
                </div>
              </div>

              {/* Special subheading for Legal Documentation */}
              {service.title === 'Legal Documentation' && (
                <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                  <h4 className="text-sm font-semibold text-blue-800 mb-2">
                    What Documents Do I Need?
                  </h4>
                  <p className="text-xs text-blue-700">
                    Death certificate, will, property deeds, and court letters. We'll guide you through the complete list.
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-lg text-secondary-600 mb-6 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your specific situation and learn 
              how we can help maximize the value of your probate property.
            </p>
            <a href="http://drjanduffy.realscout.com/onboarding" className="btn-primary inline-block">
              Schedule Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
