import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  const pathname = url.pathname;

  // Skip middleware for API routes, static files, and Next.js internals
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon.ico') ||
    pathname.match(/\.(svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot)$/)
  ) {
    return NextResponse.next();
  }

  // Force HTTPS (only in production)
  if (
    process.env.NODE_ENV === 'production' &&
    url.protocol === 'http:' &&
    !hostname.includes('localhost')
  ) {
    url.protocol = 'https:';
    return NextResponse.redirect(url, 301);
  }

  // Force www subdomain (only in production, skip localhost)
  if (
    process.env.NODE_ENV === 'production' &&
    !hostname.startsWith('www.') &&
    !hostname.includes('localhost') &&
    !hostname.includes('127.0.0.1')
  ) {
    url.host = `www.${hostname}`;
    return NextResponse.redirect(url, 301);
  }

  // Next.js trailingSlash: true handles trailing slashes automatically
  // We just need to ensure www and https redirects

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|woff|woff2|ttf|eot)).*)',
  ],
};

