import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, FileText } from 'lucide-react';

const footerNavigation = {
  services: [
    { name: 'Probate Real Estate', href: '/#services' },
    { name: 'Trust Administration', href: '/resources/nevada-probate-guide#costs' },
    { name: 'Certificate of Incumbency', href: '/resources/nevada-probate-guide#process' },
    { name: 'Property Valuation', href: '/locations/las-vegas' },
  ],
  locations: [
    { name: 'Las Vegas', href: '/locations/las-vegas' },
    { name: 'Henderson', href: '/locations/henderson' },
    { name: 'Summerlin', href: '/locations/summerlin' },
    { name: 'North Las Vegas', href: '/locations/north-las-vegas' },
    { name: 'Boulder City', href: '/locations/boulder-city' },
    { name: 'Mesquite', href: '/locations/mesquite' },
    { name: 'Spring Valley', href: '/locations/spring-valley' },
    { name: 'Enterprise', href: '/locations/enterprise' },
  ],
  resources: [
    { name: 'Nevada Probate Guide', href: '/resources/nevada-probate-guide' },
    { name: 'Timeline & Process', href: '/resources/nevada-probate-guide#timeline' },
    { name: 'Costs & Fees', href: '/resources/nevada-probate-guide#costs' },
    { name: 'FAQ', href: '/#faq' },
  ],
  legal: [
    { name: 'Nevada Probate Laws', href: '/resources/nevada-probate-guide#advantages' },
    { name: 'Clark County Court', href: '/locations/las-vegas' },
    { name: 'Small Estate Options', href: '/resources/nevada-probate-guide#advantages' },
    { name: 'Trust vs Probate', href: '/resources/nevada-probate-guide#costs' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <MapPin className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Nevada Probate Real Estate</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Expert probate real estate services across Nevada. Nevada's fastest probate process: 6-8 months vs California's 9-18 months.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-blue-400" />
                <a href="tel:+1-702-555-0123" className="hover:text-white transition-colors">
                  (702) 555-0123
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />
                <a href="mailto:info@nevadaprobate.com" className="hover:text-white transition-colors">
                  info@nevadaprobate.com
                </a>
              </div>
              <div className="flex items-center text-gray-300">
                <Clock className="h-4 w-4 mr-2 text-blue-400" />
                <span>Nevada Probate: 6-8 Months</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Services</h3>
            <ul className="space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Nevada Locations</h3>
            <ul className="space-y-2">
              {footerNavigation.locations.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Resources</h3>
            <ul className="space-y-2">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-lg font-semibold mb-4 text-blue-400 mt-6">Legal</h3>
            <ul className="space-y-2">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Nevada Probate Real Estate Sales. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
          
          {/* Nevada Advantage Highlight */}
          <div className="mt-6 p-4 bg-blue-900 rounded-lg">
            <div className="text-center">
              <p className="text-blue-200 font-semibold">
                🎯 <strong>Nevada Advantage:</strong> 6-8 month probate timeline vs California's 9-18 months
              </p>
              <p className="text-blue-100 text-sm mt-1">
                Clark County court costs: $1,000 | Trust administration: $2,500
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
