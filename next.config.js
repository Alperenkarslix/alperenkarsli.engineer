/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // GitHub Pages için base path (repository adınızla değiştirin)
  // basePath: '/alperenkarsli.engineer',
  // assetPrefix: '/alperenkarsli.engineer/',
}

module.exports = nextConfig
