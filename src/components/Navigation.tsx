'use client';

import {
  Award,
  BookOpen,
  ChevronDown,
  FileText,
  Home,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Users,
  X,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const navigation = {
  main: [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: FileText },
    { name: 'Locations', href: '/locations', icon: MapPin },
    { name: 'Resources', href: '/resources', icon: BookOpen },
    { name: 'Blog', href: '/blog', icon: BookOpen },
    { name: 'FAQ', href: '/faq', icon: BookOpen },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Contact', href: '/contact', icon: MessageSquare },
  ],
  blog: [
    { name: 'All Posts', href: '/blog', description: 'Latest blog posts and articles' },
    {
      name: 'Probate Videos',
      href: '/blog/probate-videos',
      description: 'Educational video content',
    },
    {
      name: 'Market Updates',
      href: '/blog/market-updates',
      description: 'Real estate market trends',
    },
  ],
  locations: [
    {
      name: 'All Nevada Locations',
      href: '/locations',
      description: 'Complete coverage across Nevada',
    },
    {
      name: 'Las Vegas',
      href: '/locations/las-vegas',
      description: 'Downtown & Strip area probate services',
    },
    {
      name: 'Henderson',
      href: '/locations/henderson',
      description: 'Green Valley & Anthem probate expertise',
    },
    {
      name: 'Summerlin',
      href: '/locations/summerlin',
      description: 'Master-planned community probate real estate',
    },
    {
      name: 'North Las Vegas',
      href: '/locations/north-las-vegas',
      description: 'Aliante & Centennial Hills services',
    },
    {
      name: 'Boulder City',
      href: '/locations/boulder-city',
      description: 'Historic area probate management',
    },
    {
      name: 'Mesquite',
      href: '/locations/mesquite',
      description: 'Golf community probate real estate',
    },
    {
      name: 'Spring Valley',
      href: '/locations/spring-valley',
      description: 'Residential area probate services',
    },
    {
      name: 'Enterprise',
      href: '/locations/enterprise',
      description: 'Southwest Las Vegas probate expertise',
    },
  ],
  resources: [
    {
      name: 'Nevada Probate Guide',
      href: '/resources/nevada-probate-guide',
      description: 'Complete guide to Nevada probate process',
    },
    {
      name: 'Las Vegas Guide',
      href: '/resources/las-vegas-probate-guide',
      description: 'Las Vegas & Clark County probate guide',
    },
    {
      name: 'FAQ & Q&A',
      href: '/faq',
      description: 'Comprehensive probate real estate questions & answers',
    },
    {
      name: 'Probate Timeline',
      href: '/resources/nevada-probate-guide#timeline',
      description: '6-8 month Nevada probate timeline',
    },
    {
      name: 'Probate Costs',
      href: '/resources/nevada-probate-guide#costs',
      description: 'Nevada probate costs breakdown',
    },
    {
      name: 'Court Process',
      href: '/resources/nevada-probate-guide#process',
      description: 'Clark County court procedures',
    },
  ],
  services: [
    {
      name: 'Probate Division',
      href: '/probate-division/',
      description: 'Dedicated probate & trust division',
    },
    {
      name: 'Probate Homes for Sale',
      href: '/probate-homes-for-sale/',
      description: 'Browse probate listings',
    },
    {
      name: 'Trust Property Sales',
      href: '/trust-property-sales/',
      description: 'Trust & estate property sales',
    },
    {
      name: 'Conservatorship Real Estate',
      href: '/conservatorship-real-estate/',
      description: 'Court-approved conservatorship sales',
    },
    {
      name: 'Probate Property Buyers',
      href: '/probate-property-buyers/',
      description: 'Sell probate property quickly',
    },
    {
      name: 'Probate Estate Sales',
      href: '/probate-estate-sales/',
      description: 'Complete estate liquidation',
    },
    {
      name: 'All Services',
      href: '/services/',
      description: 'Full service overview',
    },
  ],
};

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center hover:opacity-80 transition-opacity focus-ring rounded-md p-1"
              aria-label="Dr. Jan Duffy - Probate Real Estate Home"
            >
              <Award className="h-8 w-8 text-primary-600" />
              <span className="ml-2 text-xl font-bold text-secondary-900">Dr. Jan Duffy</span>
              <span className="ml-2 text-sm text-secondary-600 hidden sm:block">
                Probate Real Estate
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            {/* Phone Number - Prominent */}
            <div className="flex items-center gap-2 px-3 py-2 bg-primary-50 rounded-lg">
              <Phone className="h-4 w-4 text-primary-600" />
              <a
                href="tel:+1-702-830-9222"
                className="text-primary-600 font-semibold text-sm hover:text-primary-700 transition-colors focus-ring rounded-md px-1"
                aria-label="Call Dr. Jan Duffy at (702) 830-9222"
              >
                (702) 830-9222
              </a>
            </div>

            {/* Main Navigation */}
            <Link
              href="/"
              className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors focus-ring rounded-md"
              aria-label="Home page"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setServicesOpen(!servicesOpen)}
                className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors flex items-center focus-ring rounded-md"
                aria-label="Services menu"
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {servicesOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 z-50 border border-gray-100">
                  <div className="py-2">
                    {navigation.services.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-600 transition-colors focus-ring rounded-md mx-1"
                        onClick={() => setServicesOpen(false)}
                        aria-label={`${item.name} - ${item.description}`}
                      >
                        <div className="font-medium">{item.name}</div>
                        <div className="text-secondary-500 text-xs">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLocationsOpen(!locationsOpen)}
                className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors flex items-center focus-ring rounded-md"
                aria-label="Locations menu"
                aria-expanded={locationsOpen}
              >
                Locations
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {locationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 z-50 border border-gray-100">
                  <div className="py-2">
                    {navigation.locations.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-600 transition-colors focus-ring rounded-md mx-1"
                        onClick={() => setLocationsOpen(false)}
                        aria-label={`${item.name} - ${item.description}`}
                      >
                        <div className="font-medium">{item.name}</div>
                        <div className="text-secondary-500 text-xs">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Resources Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setResourcesOpen(!resourcesOpen)}
                className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors flex items-center focus-ring rounded-md"
                aria-label="Resources menu"
                aria-expanded={resourcesOpen}
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {resourcesOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 z-50 border border-gray-100">
                  <div className="py-2">
                    {navigation.resources.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-600 transition-colors focus-ring rounded-md mx-1"
                        onClick={() => setResourcesOpen(false)}
                        aria-label={`${item.name} - ${item.description}`}
                      >
                        <div className="font-medium">{item.name}</div>
                        <div className="text-secondary-500 text-xs">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Blog Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setBlogOpen(!blogOpen)}
                className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors flex items-center focus-ring rounded-md"
                aria-label="Blog menu"
                aria-expanded={blogOpen}
              >
                Blog
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {blogOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 z-50 border border-gray-100">
                  <div className="py-2">
                    {navigation.blog.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-secondary-700 hover:bg-primary-50 hover:text-primary-600 transition-colors focus-ring rounded-md mx-1"
                        onClick={() => setBlogOpen(false)}
                        aria-label={`${item.name} - ${item.description}`}
                      >
                        <div className="font-medium">{item.name}</div>
                        <div className="text-secondary-500 text-xs">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* About Link */}
            <Link
              href="/about"
              className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors focus-ring rounded-md"
              aria-label="About Dr. Jan Duffy"
            >
              About
            </Link>

            {/* Contact Link */}
            <Link
              href="/contact"
              className="text-secondary-700 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors focus-ring rounded-md"
              aria-label="Contact us"
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              href="http://drjanduffy.realscout.com/onboarding"
              className="bg-primary-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary-700 hover-lift transition-all duration-200 focus-ring"
              aria-label="Get your free probate consultation"
              rel="noopener noreferrer"
            >
              Free Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-3">
            {/* Mobile Phone Link */}
            <a
              href="tel:+1-702-830-9222"
              className="flex items-center gap-1 px-3 py-1.5 bg-primary-50 rounded-md text-primary-600 font-semibold text-sm hover:bg-primary-100 transition-colors focus-ring"
              aria-label="Call (702) 830-9222"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">(702) 830-9222</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-secondary-700 hover:text-primary-600 p-2 focus-ring rounded-md transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-secondary-200 animate-slide-up">
          <div className="px-2 pt-2 pb-3 space-y-1 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {/* Main Navigation */}
            <Link
              href="/"
              className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors focus-ring"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Home page"
            >
              Home
            </Link>
            <Link
              href="/faq"
              className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors focus-ring"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Frequently asked questions"
            >
              FAQ
            </Link>

            {/* Services Section */}
            <div className="border-t border-secondary-200 pt-4">
              <div className="px-3 py-2 text-xs font-semibold text-secondary-500 uppercase tracking-wider">
                Services
              </div>
              {navigation.services.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors focus-ring"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label={`${item.name} - ${item.description}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Locations Section */}
            <div className="border-t border-secondary-200 pt-4">
              <div className="px-3 py-2 text-xs font-semibold text-secondary-500 uppercase tracking-wider">
                Nevada Locations
              </div>
              {navigation.locations.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors focus-ring"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label={`${item.name} - ${item.description}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Resources Section */}
            <div className="border-t border-secondary-200 pt-4">
              <div className="px-3 py-2 text-xs font-semibold text-secondary-500 uppercase tracking-wider">
                Resources
              </div>
              {navigation.resources.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors focus-ring"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label={`${item.name} - ${item.description}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Blog Section */}
            <div className="border-t border-secondary-200 pt-4">
              <div className="px-3 py-2 text-xs font-semibold text-secondary-500 uppercase tracking-wider">
                Blog
              </div>
              {navigation.blog.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors focus-ring"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label={`${item.name} - ${item.description}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* About Link */}
            <Link
              href="/about"
              className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-md border-t border-secondary-200 pt-4 transition-colors focus-ring"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="About Dr. Jan Duffy"
            >
              About
            </Link>

            {/* Contact Link */}
            <Link
              href="/contact"
              className="block px-3 py-2 text-base font-medium text-secondary-700 hover:text-primary-600 hover:bg-primary-50 rounded-md transition-colors focus-ring"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Contact us"
            >
              Contact
            </Link>

            {/* Mobile CTA */}
            <div className="border-t border-secondary-200 pt-4">
              <Link
                href="http://drjanduffy.realscout.com/onboarding"
                className="block w-full text-center bg-primary-600 text-white px-4 py-3 rounded-md text-base font-medium hover:bg-primary-700 hover-lift transition-all duration-200 focus-ring"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Get your free probate consultation"
                rel="noopener noreferrer"
              >
                Free Consultation
              </Link>
            </div>

            {/* Contact Info */}
            <div className="border-t border-secondary-200 pt-4 px-3">
              <div className="text-sm text-secondary-600">
                <div className="flex items-center gap-2 mb-2">
                  <Phone className="h-4 w-4" />
                  <a href="tel:+1-702-830-9222" className="text-primary-600 font-medium">
                    (702) 830-9222
                  </a>
                </div>
                <div className="text-xs text-secondary-500">
                  Nevada's Fastest Probate: 6-8 Months
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
