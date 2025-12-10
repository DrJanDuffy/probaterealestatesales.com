import { Award, BookOpen, Clock, FileText, Mail, MapPin, Phone, Shield, Users } from 'lucide-react';
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
    <footer className="bg-secondary-900 text-white border-t-4 border-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center mb-4 hover:opacity-80 transition-opacity focus-ring-dark rounded-md p-1 inline-flex"
              aria-label="Dr. Jan Duffy - Probate Real Estate Home"
            >
              <Award className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-bold">Dr. Jan Duffy</span>
              <span className="ml-2 text-sm text-secondary-400">Probate Real Estate</span>
            </Link>
            <p className="text-secondary-300 mb-6 max-w-md leading-relaxed">
              Expert probate real estate services across Nevada. Nevada's fastest probate process:
              6-8 months vs California's 9-18 months.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-secondary-300 group">
                <Phone className="h-5 w-5 mr-3 text-primary-400 group-hover:text-primary-300 transition-colors" />
                <a
                  href="tel:+1-702-830-9222"
                  className="hover:text-white transition-colors font-medium focus-ring-dark rounded-md px-1"
                  aria-label="Call Dr. Jan Duffy at (702) 830-9222"
                >
                  (702) 830-9222
                </a>
              </div>
              <div className="flex items-center text-secondary-300 group">
                <Mail className="h-5 w-5 mr-3 text-primary-400 group-hover:text-primary-300 transition-colors" />
                <a
                  href="mailto:DrJanSells@ProbateRealEstateSales.com"
                  className="hover:text-white transition-colors break-all focus-ring-dark rounded-md px-1"
                  aria-label="Email Dr. Jan Duffy"
                >
                  DrJanSells@ProbateRealEstateSales.com
                </a>
              </div>
              <div className="flex items-start text-secondary-300 group">
                <MapPin className="h-5 w-5 mr-3 text-primary-400 mt-0.5 group-hover:text-primary-300 transition-colors flex-shrink-0" />
                <a
                  href="https://maps.google.com/?q=400+S+4th+Street+Suite+250+B+Las+Vegas+NV+89101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors focus-ring-dark rounded-md px-1"
                  aria-label="View office location on Google Maps"
                >
                  400 S 4th Street Suite 250 B, Las Vegas, NV 89101
                </a>
              </div>
              <div className="flex items-center text-secondary-300">
                <Clock className="h-5 w-5 mr-3 text-primary-400" />
                <span className="font-medium">Nevada Probate: 6-8 Months</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400 flex items-center">
              <FileText className="h-5 w-5 mr-2" />
              Services
            </h3>
            <ul className="space-y-3">
              {footerNavigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-white transition-colors block group focus-ring-dark rounded-md p-1 -ml-1"
                    aria-label={`${item.name} - ${item.description}`}
                  >
                    <div className="font-medium group-hover:text-primary-300 transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-secondary-400 mt-0.5">{item.description}</div>
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
            <ul className="space-y-3">
              {footerNavigation.locations.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-white transition-colors block group focus-ring-dark rounded-md p-1 -ml-1"
                    aria-label={`${item.name} - ${item.description}`}
                  >
                    <div className="font-medium group-hover:text-primary-300 transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-secondary-400 mt-0.5">{item.description}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Probate Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-400 flex items-center">
              <Shield className="h-5 w-5 mr-2" />
              Probate Services
            </h3>
            <ul className="space-y-3">
              {footerNavigation.probateServices.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-white transition-colors block group focus-ring-dark rounded-md p-1 -ml-1"
                    aria-label={`${item.name} - ${item.description}`}
                  >
                    <div className="font-medium group-hover:text-primary-300 transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-secondary-400 mt-0.5">{item.description}</div>
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
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-white transition-colors block group focus-ring-dark rounded-md p-1 -ml-1"
                    aria-label={`${item.name} - ${item.description}`}
                  >
                    <div className="font-medium group-hover:text-primary-300 transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-secondary-400 mt-0.5">{item.description}</div>
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="text-lg font-semibold mb-4 text-primary-400 mt-8 flex items-center">
              <Users className="h-5 w-5 mr-2" />
              About
            </h3>
            <ul className="space-y-3">
              {footerNavigation.about.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-secondary-300 hover:text-white transition-colors block group focus-ring-dark rounded-md p-1 -ml-1"
                    aria-label={`${item.name} - ${item.description}`}
                  >
                    <div className="font-medium group-hover:text-primary-300 transition-colors">
                      {item.name}
                    </div>
                    <div className="text-xs text-secondary-400 mt-0.5">{item.description}</div>
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
            <div className="flex flex-wrap gap-4 text-sm text-secondary-400">
              <Link
                href="/about/"
                className="hover:text-white transition-colors focus-ring-dark rounded-md px-2 py-1"
                aria-label="About page"
              >
                About
              </Link>
              <Link
                href="/contact/"
                className="hover:text-white transition-colors focus-ring-dark rounded-md px-2 py-1"
                aria-label="Contact page"
              >
                Contact
              </Link>
              <Link
                href="/blog/"
                className="hover:text-white transition-colors focus-ring-dark rounded-md px-2 py-1"
                aria-label="Blog"
              >
                Blog
              </Link>
              <Link
                href="/faq/"
                className="hover:text-white transition-colors focus-ring-dark rounded-md px-2 py-1"
                aria-label="FAQ"
              >
                FAQ
              </Link>
              <Link
                href="/testimonials/"
                className="hover:text-white transition-colors focus-ring-dark rounded-md px-2 py-1"
                aria-label="Testimonials"
              >
                Testimonials
              </Link>
              <Link
                href="/home-valuation/"
                className="hover:text-white transition-colors focus-ring-dark rounded-md px-2 py-1"
                aria-label="Home Valuation"
              >
                Home Valuation
              </Link>
              <Link
                href="/mortgage-calculator/"
                className="hover:text-white transition-colors focus-ring-dark rounded-md px-2 py-1"
                aria-label="Mortgage Calculator"
              >
                Mortgage Calculator
              </Link>
              <Link
                href="/privacy/"
                className="hover:text-white transition-colors focus-ring-dark rounded-md px-2 py-1"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms/"
                className="hover:text-white transition-colors focus-ring-dark rounded-md px-2 py-1"
                aria-label="Terms of Service"
              >
                Terms of Service
              </Link>
              <Link
                href="/sitemap.xml"
                className="hover:text-white transition-colors focus-ring-dark rounded-md px-2 py-1"
                aria-label="Sitemap"
              >
                Sitemap
              </Link>
              <Link
                href="/probate-division/"
                className="hover:text-white transition-colors focus-ring-dark rounded-md px-2 py-1"
                aria-label="Probate Division"
              >
                Probate Division
              </Link>
            </div>
          </div>

          {/* Nevada Advantage Highlight */}
          <div className="mt-8 p-5 bg-gradient-to-r from-primary-900 to-primary-800 rounded-lg border border-primary-700">
            <div className="text-center">
              <p className="text-primary-100 font-semibold text-lg mb-2">
                🎯 <strong>Nevada Advantage:</strong> 6-8 month probate timeline vs California's
                9-18 months
              </p>
              <p className="text-primary-200 text-sm">
                Clark County court costs: $1,000 | Trust administration: $2,500
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-6 text-center">
            <Link
              href="http://drjanduffy.realscout.com/onboarding"
              className="inline-flex items-center bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 hover-lift transition-all duration-200 focus-ring-dark"
              aria-label="Get your free probate consultation"
              rel="noopener noreferrer"
            >
              Get Your Free Probate Consultation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
