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
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'probaterealestatesales.com',
          },
        ],
        destination: 'https://www.probaterealestatesales.com/:path*',
        permanent: true,
      },
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
