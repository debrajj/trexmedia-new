/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
  },
  compress: true,
  output: 'standalone',
};

export default nextConfig;