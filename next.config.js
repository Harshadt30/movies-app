/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    MOVIEDB_URL: process.env.MOVIEDB_URL,
    MOVIEDB_IMAGE_URL: process.env.MOVIEDB_IMAGE_URL,
    MOVIEDB_API_KEY: process.env.MOVIEDB_API_KEY,
  },
}

module.exports = nextConfig
