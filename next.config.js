/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  env: {
    BASE_URL: "https://verda.monster",
    BASE_WEBSOCKET_URL: "wss://verda.monster/wss",
  },
};

module.exports = nextConfig;
