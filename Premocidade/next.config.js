/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'akamai',
    path: '',
  },
  trailingSlash: true,
  // Improve SEO
  poweredByHeader: false,
  // Better compression
  compress: true,
}

module.exports = nextConfig
