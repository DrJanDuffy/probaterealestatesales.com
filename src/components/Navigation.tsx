'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, MapPin, FileText, Phone, Home } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: FileText },
    { name: 'About', href: '/#about', icon: FileText },
    { name: 'Contact', href: '/#contact', icon: Phone },
  ],
  locations: [
    { name: 'All Locations', href: '/locations', description: 'View all Nevada probate real estate locations' },
    { name: 'Las Vegas', href: '/locations/las-vegas', description: 'Downtown & Strip area probate services' },
    { name: 'Henderson', href: '/locations/henderson', description: 'Green Valley & Anthem probate expertise' },
    { name: 'Summerlin', href: '/locations/summerlin', description: 'Master-planned community probate real estate' },
    { name: 'North Las Vegas', href: '/locations/north-las-vegas', description: 'Aliante & Centennial Hills services' },
    { name: 'Boulder City', href: '/locations/boulder-city', description: 'Historic area probate management' },
    { name: 'Mesquite', href: '/locations/mesquite', description: 'Golf community probate real estate' },
    { name: 'Spring Valley', href: '/locations/spring-valley', description: 'Residential area probate services' },
    { name: 'Enterprise', href: '/locations/enterprise', description: 'Southwest Las Vegas probate expertise' },
  ],
  resources: [
    { name: 'Nevada Probate Guide', href: '/resources/nevada-probate-guide', description: 'Complete guide to Nevada probate process' },
    { name: 'FAQ', href: '/#faq', description: 'Frequently asked questions about probate' },
    { name: 'Timeline', href: '/resources/nevada-probate-guide#timeline', description: '6-8 month Nevada probate timeline' },
    { name: 'Costs', href: '/resources/nevada-probate-guide#costs', description: 'Nevada probate costs breakdown' },
  ],
};

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <MapPin className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">
                Nevada Probate Real Estate
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {/* Main Navigation */}
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}

            {/* Locations Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setLocationsOpen(!locationsOpen)}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
              >
                Locations
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {locationsOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    {navigation.locations.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        onClick={() => setLocationsOpen(false)}
                      >
                        <div className="font-medium">{item.name}</div>
                        <div className="text-gray-500 text-xs">{item.description}</div>
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
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors flex items-center"
              >
                Resources
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {resourcesOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1">
                    {navigation.resources.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                        onClick={() => setResourcesOpen(false)}
                      >
                        <div className="font-medium">{item.name}</div>
                        <div className="text-gray-500 text-xs">{item.description}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link
              href="tel:+1-702-555-0123"
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
            >
              Call (702) 555-0123
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Main Navigation */}
            {navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Locations Section */}
            <div className="border-t border-gray-200 pt-4">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Nevada Locations
              </div>
              {navigation.locations.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Resources Section */}
            <div className="border-t border-gray-200 pt-4">
              <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Resources
              </div>
              {navigation.resources.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="border-t border-gray-200 pt-4">
              <Link
                href="tel:+1-702-555-0123"
                className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-md text-base font-medium hover:bg-blue-700 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Call (702) 555-0123
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
