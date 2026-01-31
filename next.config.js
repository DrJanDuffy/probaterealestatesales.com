/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    optimizePackageImports: ['lucide-react'],
    ppr: 'incremental',
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
      // Redirect old /lander page to homepage (middleware handles www/https)
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
