import { ArrowRight, Phone, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="relative section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-gradient">Probate Real Estate</span>
                  <br />
                  <span className="text-secondary-900">Solutions</span>
                </h1>
                <p className="text-xl text-secondary-600 max-w-2xl">
                  We help families navigate property sales during difficult times with compassion, 
                  expertise, and maximum value for your estate.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="http://drjanduffy.realscout.com/onboarding" className="btn-primary group inline-flex items-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="http://drjanduffy.realscout.com/onboarding" className="btn-outline inline-flex items-center">
                  Learn More
                </a>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 pt-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-100 rounded-full">
                    <Phone className="h-5 w-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Call Us Today</p>
                    <p className="font-semibold text-secondary-900">(702) 830-9222</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-accent-100 rounded-full">
                    <Mail className="h-5 w-5 text-accent-600" />
                  </div>
                  <div>
                    <p className="text-sm text-secondary-500">Email Us</p>
                    <p className="font-semibold text-secondary-900">info@nevadaprobate.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image/Visual */}
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="space-y-4">
                    <div className="h-4 bg-primary-200 rounded w-3/4" />
                    <div className="h-4 bg-secondary-200 rounded w-1/2" />
                    <div className="h-4 bg-accent-200 rounded w-5/6" />
                    <div className="h-4 bg-primary-100 rounded w-2/3" />
                  </div>
                  <div className="mt-6 pt-6 border-t border-secondary-200">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary-600">$450,000</span>
                      <span className="text-sm text-secondary-500">Estimated Value</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-200 rounded-full opacity-20 animate-bounce-gentle" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary-200 rounded-full opacity-20 animate-bounce-gentle" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
