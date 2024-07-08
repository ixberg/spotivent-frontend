/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ["randomuser.me", "res.cloudinary.com"],
  },
};

module.exports = nextConfig;
