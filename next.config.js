/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.iconscout.com'],
  },
}

module.exports = {
  ...nextConfig,
  distDir: '.next',
  // other Next.js configuration options
}
