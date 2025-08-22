import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Family Member',
    content: 'Probate Real Estate Sales made an incredibly difficult time so much easier. They handled everything with compassion and professionalism, and we got above-market value for our family home.',
    rating: 5,
    property: 'Family Home in Beverly Hills',
    salePrice: '$2.1M',
    marketValue: '$1.9M'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Executor',
    content: 'As the executor of my father\'s estate, I was overwhelmed with the property sale process. The team guided me through every step and exceeded our expectations on the sale price.',
    rating: 5,
    property: 'Downtown Condo',
    salePrice: '$850K',
    marketValue: '$780K'
  },
  {
    id: 3,
    name: 'Jennifer Martinez',
    role: 'Beneficiary',
    content: 'They truly understand what families go through during probate. Their expertise in legal matters and real estate gave us peace of mind throughout the entire process.',
    rating: 5,
    property: 'Suburban Family Home',
    salePrice: '$1.2M',
    marketValue: '$1.1M'
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-secondary-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what families who have worked with us 
            have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card p-8 relative">
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-8 w-8 text-primary-200" />
              </div>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent-500 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <blockquote className="text-secondary-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              {/* Property Details */}
              <div className="bg-secondary-50 rounded-lg p-4 mb-6">
                <div className="text-sm text-secondary-600 mb-2">{testimonial.property}</div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-500">Sale Price:</span>
                  <span className="font-semibold text-primary-600">{testimonial.salePrice}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-secondary-500">Market Value:</span>
                  <span className="font-semibold text-secondary-600">{testimonial.marketValue}</span>
                </div>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <span className="text-primary-600 font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-secondary-900">{testimonial.name}</div>
                  <div className="text-sm text-secondary-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Success Metrics */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-soft">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-4">
              Proven Results
            </h3>
            <p className="text-lg text-secondary-600">
              Our track record speaks for itself
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">$50M+</div>
              <div className="text-secondary-600">Total Sales Volume</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">12%</div>
              <div className="text-secondary-600">Above Market Average</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">45 days</div>
              <div className="text-secondary-600">Average Time to Close</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-secondary-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
