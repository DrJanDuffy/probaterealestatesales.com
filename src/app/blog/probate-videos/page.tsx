import { ArrowLeft, Clock, Play, Video } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import SchemaMarkup from '@/components/SchemaMarkup';

export const metadata: Metadata = {
  title: 'Probate Real Estate Videos | Educational Content | Las Vegas',
  description:
    "Watch educational videos about probate real estate processes, timelines, and best practices. Learn from Dr. Jan Duffy's expertise in Nevada probate.",
  keywords:
    'probate videos, probate real estate videos, Nevada probate education, probate process videos, estate sales videos',
  alternates: {
    canonical: 'https://www.probaterealestatesales.com/blog/probate-videos/',
  },
  openGraph: {
    title: 'Probate Real Estate Videos | Educational Content',
    description: 'Watch educational videos about probate real estate processes and best practices.',
    type: 'website',
    url: 'https://www.probaterealestatesales.com/blog/probate-videos/',
  },
};

export default function ProbateVideosPage() {
  const breadcrumbs = [
    { name: 'Home', url: '/' },
    { name: 'Blog', url: '/blog/' },
    { name: 'Probate Videos', url: '/blog/probate-videos/' },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Breadcrumb items={breadcrumbs.slice(1)} />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-primary-100 hover:text-white mb-6"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Blog
          </Link>
          <div className="text-center">
            <Video className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Probate Real Estate Videos</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Learn about probate real estate processes through our educational video content.
            </p>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video Placeholders */}
            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center relative">
                <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>10:30</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Understanding Nevada Probate Timeline
                </h3>
                <p className="text-gray-400 text-sm">
                  Learn about Nevada's 6-8 month probate process and what to expect at each stage.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center relative">
                <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>8:15</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Certificate of Incumbency Explained
                </h3>
                <p className="text-gray-400 text-sm">
                  Complete guide to Nevada's certificate of incumbency for trust administration.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center relative">
                <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>12:45</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Clark County Probate Court Procedures
                </h3>
                <p className="text-gray-400 text-sm">
                  Step-by-step walkthrough of Clark County probate court processes and requirements.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center relative">
                <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>15:20</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Pricing Your Probate Property
                </h3>
                <p className="text-gray-400 text-sm">
                  Learn how to properly value and price inherited properties for sale.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-red-400 to-red-600 flex items-center justify-center relative">
                <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>9:30</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Trust vs. Probate Administration
                </h3>
                <p className="text-gray-400 text-sm">
                  Understanding the differences between trust administration and probate processes.
                </p>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
              <div className="aspect-video bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center relative">
                <Play className="h-16 w-16 text-white group-hover:scale-110 transition-transform" />
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-75 text-white px-3 py-1 rounded flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>7:45</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  Working with Probate Commissioners
                </h3>
                <p className="text-gray-400 text-sm">
                  Tips for navigating Clark County probate commissioner schedules and requirements.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-secondary-600 mb-4">
              More videos coming soon! Check back regularly for new educational content.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors"
            >
              Request Specific Topics
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions After Watching?</h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your specific probate real estate situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-md font-medium text-lg hover:bg-blue-50 transition-colors"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
      <SchemaMarkup
        type="article"
        breadcrumbs={breadcrumbs}
        video={{
          name: 'Probate Real Estate Educational Videos',
          description:
            'Educational videos about probate real estate processes, timelines, and best practices in Nevada.',
          thumbnailUrl:
            'https://www.probaterealestatesales.com/images/probate-videos-thumbnail.jpg',
          uploadDate: new Date().toISOString(),
          publisher: {
            name: 'Las Vegas Probate Real Estate Sales',
            logo: 'https://www.probaterealestatesales.com/logo.png',
          },
        }}
      />
    </main>
  );
}
