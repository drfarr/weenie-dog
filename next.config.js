/** @type {import('next').NextConfig} */
require("./lib/trpc/env");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["encrypted-tbn0.gstatic.com"],
  },
};

module.exports = nextConfig;
