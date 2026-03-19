/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  // Enable source maps in production for Lighthouse and debugging (optional; increases deploy size)
  productionBrowserSourceMaps: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com', pathname: '/**' },
      { protocol: 'https', hostname: 'via.placeholder.com', pathname: '/**' },
    ],
    formats: ['image/webp', 'image/avif'],
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
  // Vercel optimization
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Malformed URLs (GSC "Not found (404)" – ensure 301 so crawlers don't see 404)
      { source: '/$', destination: '/', permanent: true },
      { source: '/%24', destination: '/', permanent: true },
      { source: '/$$', destination: '/', permanent: true },
      // Redirect old /lander page to homepage
      {
        source: '/lander',
        destination: '/',
        permanent: true,
      },
      {
        source: '/lander/',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
