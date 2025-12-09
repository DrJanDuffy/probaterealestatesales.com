'use client';

import { ChevronRight, Home } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  // Always include Home as the first item
  const allItems = [{ name: 'Home', url: '/' }, ...items];

  return (
    <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-3 text-sm">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li key={item.url} className="flex items-center">
                {index > 0 && (
                  <ChevronRight className="h-4 w-4 text-gray-400 mx-2" aria-hidden="true" />
                )}
                {isLast ? (
                  <span className="text-gray-900 font-medium flex items-center" aria-current="page">
                    {index === 0 && <Home className="h-4 w-4 mr-1" />}
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-gray-600 hover:text-primary-600 transition-colors flex items-center"
                  >
                    {index === 0 && <Home className="h-4 w-4 mr-1" />}
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
