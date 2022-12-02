/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  env: {
    MOVIE_DB_API_KEY: process.env.MOVIE_DB_API_KEY,
    MOVIE_DB_URL: process.env.MOVIE_DB_URL,
  },
};

module.exports = nextConfig;
