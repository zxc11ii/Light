/** @type {import('next').NextConfig} */
const nextConfig = {
  // убирает служебный кружок Next.js в углу экрана в режиме разработки
  devIndicators: false,
  images: {
    // фотографии лежат локально в /public/foto
    formats: ['image/webp'],
  },
};

export default nextConfig;
