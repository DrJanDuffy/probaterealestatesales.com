import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | Probate Real Estate Sales',
  description: 'The page you are looking for does not exist.',
  robots: 'noindex, nofollow',
};

export default function FireCrawlDashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-gray-400 text-6xl mb-4">404</div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h1>
          <p className="text-gray-600 mb-6">
            The page you are looking for does not exist or has been removed.
          </p>
          <a 
            href="/"
            className="inline-block px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Return to Homepage
          </a>
        </div>
      </div>
    </div>
  );
}
