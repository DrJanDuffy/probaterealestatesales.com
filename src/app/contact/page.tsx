import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Contact Us | Probate Real Estate Sales | Las Vegas, NV',
  description: 'Contact Dr. Jan Duffy for probate real estate services in Las Vegas, Nevada. Free consultation available. Call (702) 830-9222 or email DrJanSells@ProbateRealEstateSales.com',
  keywords: 'contact probate real estate, Las Vegas probate realtor, probate real estate consultation, Nevada probate help',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/contact/',
  },
  openGraph: {
    title: 'Contact Us | Probate Real Estate Sales',
    description: 'Contact Dr. Jan Duffy for expert probate real estate services. Free consultation available.',
    type: 'website',
    url: 'https://www.probaterealestatesales.com/contact/',
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <SchemaMarkup type="contact" />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Talk
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get in touch with our probate real estate experts. We're here to help you navigate the probate process with confidence.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl p-8 text-center">
              <Phone className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Phone</h3>
              <a href="tel:+1-702-830-9222" className="text-primary-600 hover:text-primary-800 font-medium text-lg">
                (702) 830-9222
              </a>
              <p className="text-sm text-secondary-600 mt-2">Call us anytime</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-8 text-center">
              <Mail className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Email</h3>
              <a href="mailto:DrJanSells@ProbateRealEstateSales.com" className="text-green-600 hover:text-green-800 font-medium text-lg break-all">
                DrJanSells@ProbateRealEstateSales.com
              </a>
              <p className="text-sm text-secondary-600 mt-2">Email us today</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-violet-100 rounded-xl p-8 text-center">
              <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">Visit</h3>
              <p className="text-secondary-700 font-medium">
                400 S 4th Street<br />
                Suite 250 B<br />
                Las Vegas, NV 89101
              </p>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-gray-50 rounded-xl p-8 text-center mb-12">
            <Clock className="h-8 w-8 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-secondary-900 mb-4">Office Hours</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
              <div>
                <p className="font-medium text-secondary-900">Monday - Friday</p>
                <p className="text-secondary-600">8:00 AM - 6:00 PM</p>
              </div>
              <div>
                <p className="font-medium text-secondary-900">Saturday</p>
                <p className="text-secondary-600">9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-2 text-center">
              Send Us a Message
            </h2>
            <p className="text-secondary-600 text-center mb-8">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-secondary-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-secondary-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="Tell us about your probate property situation..."
                ></textarea>
              </div>

              <div className="flex items-start">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  required
                  className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded mt-1"
                />
                <label htmlFor="consent" className="ml-3 text-sm text-secondary-600">
                  I agree to receive marketing communications via voice call, text message, or email from Probate Real Estate Sales. 
                  Text HELP to (702) 830-9222 for assistance. Consent is not a condition of purchase. Msg/data rates may apply. 
                  Reply STOP to unsubscribe.
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-4 rounded-md font-medium text-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Call us directly for a free probate consultation. We're here to help you navigate the process.
          </p>
          <a
            href="tel:+1-702-830-9222"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-md font-medium text-lg hover:bg-blue-50 transition-colors"
          >
            <Phone className="h-5 w-5 mr-2" />
            Call (702) 830-9222
          </a>
        </div>
      </section>
    </main>
  );
}

