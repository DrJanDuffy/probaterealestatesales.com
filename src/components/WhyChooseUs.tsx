import { Award, Clock, Heart, Shield, Users, TrendingUp } from 'lucide-react';

const reasons = [
  {
    icon: Award,
    title: 'Proven Track Record',
    description: 'Over 15 years of experience in probate real estate with hundreds of successful transactions.',
    stat: '500+'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Average time from listing to closing is 45 days, well below market average.',
    stat: '45 days'
  },
  {
    icon: Heart,
    title: 'Compassionate Service',
    description: 'We understand this is a difficult time and provide caring, sensitive support.',
    stat: '100%'
  },
  {
    icon: Shield,
    title: 'Legal Expertise',
    description: 'Full legal compliance and documentation handling to protect your interests.',
    stat: '15+ years'
  },
  {
    icon: Users,
    title: 'Family Focused',
    description: 'Dedicated to helping families navigate complex situations with clarity.',
    stat: '200+'
  },
  {
    icon: TrendingUp,
    title: 'Maximum Value',
    description: 'Our properties consistently sell above market value through strategic marketing.',
    stat: '+12%'
  }
];

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Why Choose Probate Real Estate Sales?
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            We combine deep expertise with compassionate service to deliver exceptional results 
            for families during challenging times.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary-200 transition-colors duration-300">
                  <reason.icon className="h-10 w-10 text-primary-600" />
                </div>
              </div>
              
              <div className="mb-4">
                <span className="text-3xl font-bold text-primary-600 block">{reason.stat}</span>
                <span className="text-sm text-secondary-500">Average</span>
              </div>
              
              <h3 className="text-xl font-semibold text-secondary-900 mb-3">
                {reason.title}
              </h3>
              
              <p className="text-secondary-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">$50M+</div>
              <div className="text-primary-100">Total Property Value Sold</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Families Helped</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">15+</div>
              <div className="text-primary-100">Years of Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-2">98%</div>
              <div className="text-primary-100">Client Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-secondary-900 mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-2xl font-bold text-secondary-400">NAR</div>
            <div className="text-2xl font-bold text-secondary-400">CRMLS</div>
            <div className="text-2xl font-bold text-secondary-400">Probate Court</div>
            <div className="text-2xl font-bold text-secondary-400">Legal Bar</div>
            <div className="text-2xl font-bold text-secondary-400">BBB A+</div>
          </div>
        </div>
      </div>
    </section>
  );
}
