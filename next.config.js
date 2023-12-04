/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  env: {
    BASE_URL: "https://verda.monster",
  },
};

module.exports = nextConfig;
