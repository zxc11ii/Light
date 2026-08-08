/** @type {import('next').NextConfig} */
const nextConfig = {
  // убирает служебный кружок Next.js в углу экрана в режиме разработки
  devIndicators: false,
  images: {
    // фотографии лежат локально в /public/foto
    formats: ['image/webp'],
    unoptimized: true, // для статического экспорта
  },
  output: 'export', // статический экспорт для GitHub Pages
  basePath: '/Light', // имя репозитория
};

export default nextConfig;
