'use client';

import Link from 'next/link';
import { ArrowRight, Clock, FileText, Calculator, Home, HelpCircle, Users, Phone } from 'lucide-react';

export default function HomePageNavigation() {
  const quickLinks = [
    {
      icon: Clock,
      title: 'Probate Timeline',
      description: 'Understand the 6-8 month process',
      href: '#timeline',
      color: 'blue'
    },
    {
      icon: FileText,
      title: 'Property Checklist',
      description: 'Step-by-step guide',
      href: '#checklist',
      color: 'green'
    },
    {
      icon: Calculator,
      title: 'Cost Calculator',
      description: 'Estimate probate costs',
      href: '#cost-calculator',
      color: 'purple'
    },
    {
      icon: Home,
      title: 'Property Valuation',
      description: 'Get free property estimate',
      href: '#valuation',
      color: 'orange'
    },
    {
      icon: HelpCircle,
      title: 'FAQ',
      description: 'Common questions answered',
      href: '#faq',
      color: 'red'
    },
    {
      icon: Phone,
      title: 'Free Consultation',
      description: 'Speak with Dr. Duffy',
      href: '#contact',
      color: 'teal'
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-br from-gray-50 to-blue-50 border-b border-gray-200">
      <div className="container-max">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary-900 mb-3">
            Quick Navigation
          </h2>
          <p className="text-secondary-600 max-w-2xl mx-auto">
            Jump to the information you need most. All tools and resources are available right here on this page.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {quickLinks.map((link, index) => {
            const Icon = link.icon;
            const colorClasses = {
              blue: 'bg-blue-100 text-blue-600 hover:bg-blue-200',
              green: 'bg-green-100 text-green-600 hover:bg-green-200',
              purple: 'bg-purple-100 text-purple-600 hover:bg-purple-200',
              orange: 'bg-orange-100 text-orange-600 hover:bg-orange-200',
              red: 'bg-red-100 text-red-600 hover:bg-red-200',
              teal: 'bg-teal-100 text-teal-600 hover:bg-teal-200'
            };
            
            return (
              <a
                key={index}
                href={link.href}
                className={`${colorClasses[link.color as keyof typeof colorClasses]} rounded-lg p-4 text-center transition-all duration-200 hover:shadow-md group`}
              >
                <Icon className="h-6 w-6 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-sm mb-1">{link.title}</h3>
                <p className="text-xs opacity-80">{link.description}</p>
              </a>
            );
          })}
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            href="/resources/" 
            className="inline-flex items-center text-primary-600 hover:text-primary-800 font-medium text-sm"
          >
            View All Resources
            <ArrowRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

