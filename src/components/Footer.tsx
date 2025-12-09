import { Award, BookOpen, Clock, FileText, Mail, MapPin, Phone, Users } from 'lucide-react';
import Link from 'next/link';

const footerNavigation = {
  services: [
    {
      name: 'Probate Sales',
      href: '/services#probate-sales',
      description: 'Court-approved property sales',
    },
    {
      name: 'Estate Liquidation',
      href: '/services#estate-liquidation',
      description: 'Complete estate property management',
    },
    {
      name: 'Property Valuation',
      href: '/services#property-valuation',
      description: 'Expert market analysis',
    },
    {
      name: 'Court Representation',
      href: '/services#court-representation',
      description: 'Legal compliance support',
    },
  ],
  locations: [
    { name: 'Las Vegas', href: '/locations/las-vegas', description: 'Downtown & Strip area' },
    { name: 'Henderson', href: '/locations/henderson', description: 'Green Valley & Anthem' },
    { name: 'Summerlin', href: '/locations/summerlin', description: 'Master-planned community' },
    {
      name: 'North Las Vegas',
      href: '/locations/north-las-vegas',
      description: 'Aliante & Centennial Hills',
    },
    { name: 'Boulder City', href: '/locations/boulder-city', description: 'Historic area' },
    { name: 'Mesquite', href: '/locations/mesquite', description: 'Golf community' },
    { name: 'Spring Valley', href: '/locations/spring-valley', description: 'Residential area' },
    { name: 'Enterprise', href: '/locations/enterprise', description: 'Southwest Las Vegas' },
  ],
  resources: [
    {
      name: 'Nevada Probate Guide',
      href: '/resources/nevada-probate-guide',
      description: 'Complete guide to Nevada probate',
    },
    {
      name: 'Las Vegas Guide',
      href: '/resources/las-vegas-probate-guide',
      description: 'Las Vegas & Clark County guide',
    },
    {
      name: 'Probate Timeline',
      href: '/resources/nevada-probate-guide#timeline',
      description: '6-8 month timeline',
    },
    {
      name: 'Probate Costs',
      href: '/resources/nevada-probate-guide#costs',
      description: 'Costs breakdown',
    },
    {
      name: 'Court Process',
      href: '/resources/nevada-probate-guide#process',
      description: 'Clark County procedures',
    },
  ],
  probateServices: [
    {
      name: 'Probate Homes for Sale',
      href: '/probate-homes-for-sale',
      description: 'Find probate properties',
    },
    {
      name: 'Trust Property Sales',
      href: '/trust-property-sales',
      description: 'Trust real estate sales',
    },
    {
      name: 'Conservatorship Real Estate',
      href: '/conservatorship-real-estate',
      description: 'Court-supervised sales',
    },
    {
      name: 'Probate Property Buyers',
      href: '/probate-property-buyers',
      description: 'Buyer resources',
    },
    {
      name: 'Probate Property Valuation',
      href: '/probate-property-valuation',
      description: 'Property appraisals',
    },
    {
      name: 'Probate Estate Sales',
      href: '/probate-estate-sales',
      description: 'Estate liquidation',
    },
  ],
  about: [
    { name: 'About Dr. Duffy', href: '/#about', description: 'Expert credentials' },
    { name: 'Ph.D. in Research', href: '/#about', description: 'Academic excellence' },
    { name: '20+ Years Experience', href: '/#about', description: 'Las Vegas real estate' },
    { name: 'Court Trusted', href: '/#about', description: 'Professional recognition' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <Award className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold">Dr. Jan Duffy</span>
              <span className="ml-2 text-sm text-secondary-400">Probate Real Estate</span>
            </div>
            <p className="text-secondary-300 mb-4 max-w-md">
              Expert probate real estate services across Nevada. Nevada's fastest probate process:
              6-8 months vs California's 9-18 months.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-secondary-300">
                <Phone className="h-4 w-4 mr-2 text-primary-400" />
                <a href="tel:+1-702-830-9222" className="hover:text-white transition-colors">
                  (702) 830-9222
                </a>
              </div>
              <div className="flex items-center text-secondary-300">
                <Mail className="h-4 w-4 mr-2 text-primary-400" />
                <a
                  href="mailto:DrJanSells@ProbateRealEstateSales.com"
                  className="hover:text-white transition-colors"
                >
                  DrJanSells@ProbateRealEstateSales.com
                </a>
              </div>
              <div className="flex items-center text-secondary-300">
                <MapPin className="h-4 w-4 mr-2 text-primary-400" />
                <span>400 S 4th Street Suite 250 B, Las Vegas, NV 89101</span>
              </div>
              <div className="flex items-center text-secondary-300">
                <Clock className="h-4 w-4 mr-2 text-primary-400" />
                <span>Nevada Probate: 6-8 Months</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Services
            </h3>
            <ul className="space-y-2">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-white transition-colors block"
                  >
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-secondary-400">{item.description}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400 flex items-center">
              <MapPin className="h-5 w-5 mr-2" />
              Nevada Locations
            </h3>
            <ul className="space-y-2">
              {footerNavigation.locations.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-white transition-colors block"
                  >
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-secondary-400">{item.description}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Probate Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Probate Services
            </h3>
            <ul className="space-y-2">
              {footerNavigation.probateServices.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-white transition-colors block"
                  >
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-secondary-400">{item.description}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400 flex items-center">
              <BookOpen className="h-5 w-5 mr-2" />
              Resources
            </h3>
            <ul className="space-y-2">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-white transition-colors block"
                  >
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-secondary-400">{item.description}</div>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4 text-primary-400 mt-6 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              About
            </h3>
            <ul className="space-y-2">
              {footerNavigation.about.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-white transition-colors block"
                  >
                    <div className="font-medium">{item.name}</div>
                    <div className="text-xs text-secondary-400">{item.description}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-secondary-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-secondary-400 text-sm mb-4 md:mb-0">
              © 2025 Berkshire Hathaway HomeServices Nevada Properties - Probate Real Estate
              Division. Comprehensive Real Estate Services by Dr. Jan Duffy S.0197614. All rights
              reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-secondary-400">
              <Link href="/about/" className="hover:text-white transition-colors">
                About
              </Link>
              <Link href="/contact/" className="hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="/blog/" className="hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/faq/" className="hover:text-white transition-colors">
                FAQ
              </Link>
              <Link href="/testimonials/" className="hover:text-white transition-colors">
                Testimonials
              </Link>
              <Link href="/home-valuation/" className="hover:text-white transition-colors">
                Home Valuation
              </Link>
              <Link href="/mortgage-calculator/" className="hover:text-white transition-colors">
                Mortgage Calculator
              </Link>
              <Link href="/privacy/" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms/" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap.xml" className="hover:text-white transition-colors">
                Sitemap
              </Link>
              <Link href="/probate-division/" className="hover:text-white transition-colors">
                Probate Division
              </Link>
            </div>
          </div>

          {/* Nevada Advantage Highlight */}
          <div className="mt-6 p-4 bg-primary-900 rounded-lg">
            <div className="text-center">
              <p className="text-primary-200 font-semibold">
                🎯 <strong>Nevada Advantage:</strong> 6-8 month probate timeline vs California's
                9-18 months
              </p>
              <p className="text-primary-100 text-sm mt-1">
                Clark County court costs: $1,000 | Trust administration: $2,500
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-6 text-center">
            <Link
              href="http://drjanduffy.realscout.com/onboarding"
              className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-md font-medium hover:bg-primary-700 transition-colors"
            >
              Get Your Free Probate Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
