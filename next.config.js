/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"]
  },
  eslint: {
    dirs: ["src"]
  }
}

module.exports = nextConfig
