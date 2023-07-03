/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"]
  },
  eslint: {
    dirs: ["src"]
  },
  typescript: {
    ignoreBuildErrors: true
  }
}

module.exports = nextConfig
