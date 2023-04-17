/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MOVIEDB_URL: process.env.MOVIEDB_URL,
    MOVIEDB_IMAGE_URL: process.env.MOVIEDB_IMAGE_URL,
    MOVIEDB_API_KEY: process.env.MOVIEDB_API_KEY,
    URL: process.env.URL,
  },
}

module.exports = nextConfig
