/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
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
