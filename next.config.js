/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  basePath: process.env.NODE_ENV === 'production' ? '/unmukto.org' : '', // GitHub Pages repository name
  assetPrefix: process.env.NODE_ENV === 'production' ? '/unmukto.org/' : '', // GitHub Pages repository name with trailing slash
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
