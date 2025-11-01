import type { Metadata } from 'next';
import Link from 'next/link';
import { Calculator, TrendingUp, DollarSign, Home, Phone, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Home Valuation | Probate Property Value Assessment | Las Vegas',
  description: 'Get a free home valuation for your probate property in Las Vegas. Expert property value assessment to help you understand your inherited property worth.',
  keywords: 'home valuation, property value assessment, probate property valuation, Las Vegas home appraisal, free home estimate',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/home-valuation/',
  },
  openGraph: {
    title: 'Free Home Valuation | Probate Property Assessment',
    description: 'Get a free home valuation for your probate property in Las Vegas.',
    type: 'website',
    url: 'https://www.probaterealestatesales.com/home-valuation/',
  },
};

export default function HomeValuationPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Calculator className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Free Home Valuation
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Get an accurate estimate of your probate property's value in Las Vegas, Nevada.
          </p>
        </div>
      </section>

      {/* Valuation Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg p-8 md:p-12">
            <h2 className="text-3xl font-bold text-secondary-900 mb-6 text-center">
              Request Your Free Property Valuation
            </h2>
            <p className="text-secondary-600 text-center mb-8">
              Fill out the form below and our probate real estate experts will provide you with a comprehensive property valuation.
            </p>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="propertyAddress" className="block text-sm font-medium text-secondary-700 mb-2">
                    Property Address *
                  </label>
                  <input
                    type="text"
                    id="propertyAddress"
                    name="propertyAddress"
                    required
                    placeholder="Street Address"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-secondary-700 mb-2">
                    City *
                  </label>
                  <select
                    id="city"
                    name="city"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select City</option>
                    <option value="las-vegas">Las Vegas</option>
                    <option value="henderson">Henderson</option>
                    <option value="summerlin">Summerlin</option>
                    <option value="north-las-vegas">North Las Vegas</option>
                    <option value="boulder-city">Boulder City</option>
                    <option value="mesquite">Mesquite</option>
                    <option value="spring-valley">Spring Valley</option>
                    <option value="enterprise">Enterprise</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-secondary-700 mb-2">
                    ZIP Code *
                  </label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    required
                    placeholder="89101"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="propertyType" className="block text-sm font-medium text-secondary-700 mb-2">
                    Property Type *
                  </label>
                  <select
                    id="propertyType"
                    name="propertyType"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="">Select Type</option>
                    <option value="single-family">Single Family Home</option>
                    <option value="condo">Condo</option>
                    <option value="townhouse">Townhouse</option>
                    <option value="multi-family">Multi-Family</option>
                    <option value="land">Land</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="bedrooms" className="block text-sm font-medium text-secondary-700 mb-2">
                    Bedrooms
                  </label>
                  <input
                    type="number"
                    id="bedrooms"
                    name="bedrooms"
                    min="0"
                    placeholder="3"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="bathrooms" className="block text-sm font-medium text-secondary-700 mb-2">
                    Bathrooms
                  </label>
                  <input
                    type="number"
                    id="bathrooms"
                    name="bathrooms"
                    min="0"
                    step="0.5"
                    placeholder="2"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
                <div>
                  <label htmlFor="squareFeet" className="block text-sm font-medium text-secondary-700 mb-2">
                    Square Feet
                  </label>
                  <input
                    type="number"
                    id="squareFeet"
                    name="squareFeet"
                    min="0"
                    placeholder="2000"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="yearBuilt" className="block text-sm font-medium text-secondary-700 mb-2">
                  Year Built
                </label>
                <input
                  type="number"
                  id="yearBuilt"
                  name="yearBuilt"
                  min="1800"
                  max={new Date().getFullYear()}
                  placeholder="2000"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="ownerName" className="block text-sm font-medium text-secondary-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="ownerName"
                    name="ownerName"
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
                <label htmlFor="notes" className="block text-sm font-medium text-secondary-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  rows={4}
                  placeholder="Tell us about the property condition, recent renovations, or any special features..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white px-6 py-4 rounded-md font-medium text-lg hover:bg-primary-700 transition-colors flex items-center justify-center"
                >
                  <Calculator className="h-5 w-5 mr-2" />
                  Get Free Valuation
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-secondary-900 mb-12 text-center">
            Why Get a Professional Valuation?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-md">
              <TrendingUp className="h-12 w-12 text-primary-600 mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Accurate Market Value
              </h3>
              <p className="text-secondary-600">
                Get an accurate estimate based on current Las Vegas real estate market conditions and comparable sales.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <DollarSign className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Maximize Sale Price
              </h3>
              <p className="text-secondary-600">
                Understand your property's worth to price it competitively and maximize your sale proceeds.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-md">
              <Home className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-secondary-900 mb-2">
                Probate-Specific Insights
              </h3>
              <p className="text-secondary-600">
                Our valuations consider probate-specific factors and timelines that affect property value.
              </p>
            </div>
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
            Call us directly at (702) 830-9222 for a free consultation and property valuation.
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

