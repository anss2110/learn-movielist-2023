/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'image.tmdb.org',
      'via.placeholder.com'
    ]
  }
}

module.exports = nextConfig
