/** @type {import('next').NextConfig} */
require("./lib/trpc/env");
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: [
      "encrypted-tbn0.gstatic.com",
      "lh3.googleusercontent.com",
      "localhost",
    ],
  },
};

module.exports = nextConfig;
