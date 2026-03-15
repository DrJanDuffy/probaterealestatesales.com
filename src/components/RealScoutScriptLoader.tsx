'use client';

import { useRealScoutScript } from '@/hooks/useRealScoutScript';

interface RealScoutScriptLoaderProps {
  children: React.ReactNode;
  fallback?: React.ReactNode;
}

/**
 * Loads the RealScout script once, then renders children (e.g. <realscout-office-listings>).
 * Use on pages that render the widget directly (e.g. Services) so the script is not loaded globally.
 */
export default function RealScoutScriptLoader({ children, fallback }: RealScoutScriptLoaderProps) {
  const loaded = useRealScoutScript();

  if (!loaded) {
    return (
      fallback ?? (
        <div className="bg-gray-100 rounded-xl p-12 border border-gray-200 animate-pulse">
          <div className="h-64 flex items-center justify-center text-gray-500">
            Loading property listings...
          </div>
        </div>
      )
    );
  }

  return <>{children}</>;
}
