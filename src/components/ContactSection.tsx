import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-4">
            Get in Touch
          </h2>
          <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
            Ready to discuss your probate real estate needs? Contact us for a free, 
            no-obligation consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-secondary-50 rounded-2xl p-8">
            <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
              Send us a Message
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="input-field"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    className="input-field"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="input-field"
                  placeholder="Enter your email address"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="input-field"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="propertyAddress" className="block text-sm font-medium text-secondary-700 mb-2">
                  Property Address
                </label>
                <input
                  type="text"
                  id="propertyAddress"
                  name="propertyAddress"
                  className="input-field"
                  placeholder="Enter the property address (if known)"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="input-field resize-none"
                  placeholder="Tell us about your situation and how we can help..."
                />
              </div>
              
              <button type="submit" className="btn-primary w-full group">
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-secondary-900 mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <Phone className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Phone</h4>
                    <p className="text-secondary-600">(702) 830-9222</p>
                    <p className="text-sm text-secondary-500">Available 24/7 for urgent matters</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-100 rounded-full">
                    <Mail className="h-6 w-6 text-accent-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Email</h4>
                    <p className="text-secondary-600">info@nevadaprobate.com</p>
                    <p className="text-sm text-secondary-500">We respond within 2 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary-100 rounded-full">
                    <MapPin className="h-6 w-6 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Office</h4>
                    <p className="text-secondary-600">City Centre Place</p>
                    <p className="text-secondary-600">400 S 4th Street Suite 250 B</p>
                    <p className="text-secondary-600">Las Vegas, NV 89101</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <Clock className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Business Hours</h4>
                    <p className="text-secondary-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                    <p className="text-secondary-600">Saturday: 9:00 AM - 2:00 PM</p>
                    <p className="text-sm text-secondary-500">Sunday: By appointment only</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6">
              <h4 className="text-lg font-semibold text-secondary-900 mb-3">
                Emergency After Hours
              </h4>
              <p className="text-secondary-600 mb-4">
                For urgent probate matters outside business hours, call our emergency line:
              </p>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-600 mb-2">(702) 999-8888</div>
                <p className="text-sm text-secondary-500">Available 24/7 for urgent matters</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
