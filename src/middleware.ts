import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Block access to firecrawl dashboard in production
  if (request.nextUrl.pathname === '/firecrawl-dashboard') {
    const isDevelopment = process.env.NODE_ENV === 'development';
    const hasAccessKey = process.env.FIRECRAWL_ACCESS_KEY === process.env.FIRECRAWL_SECRET_KEY;
    
    if (!isDevelopment && !hasAccessKey) {
      // Redirect to homepage with access denied message
      const url = request.nextUrl.clone();
      url.pathname = '/';
      url.searchParams.set('error', 'access-denied');
      return NextResponse.redirect(url);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: '/firecrawl-dashboard',
};
