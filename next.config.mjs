/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  experimental: {
    optimizePackageImports: ['@lottiefiles/dotlottie-react', 'framer-motion'],
  },
  
  // Note: compiler.removeConsole is not supported in Turbopack yet
  // Will be enabled automatically in production builds
  
  // Image optimization
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: process.env.NODE_ENV === 'development' ? 0 : 60,
  },
  
  // Reduce JavaScript bundle size
  swcMinify: true,
  
  // Enable gzip compression
  compress: true,
  
  // Optimize fonts
  optimizeFonts: true,
  
  // Reduce memory usage - disabled in development for better HMR
  onDemandEntries: process.env.NODE_ENV === 'development' ? {
    maxInactiveAge: 1000,
    pagesBufferLength: 10,
  } : {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
  
  // Headers for better caching
  async headers() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/:path*',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-cache, no-store, must-revalidate',
            },
          ],
        },
      ];
    }
    
    return [
      {
        source: '/lottie/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.lottie',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;