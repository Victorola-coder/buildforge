/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        port: "",
        protocol: "https",
        hostname: "cdn.dropp.cloud",
        pathname: "/**",
      },
      {
        port: "",
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/api/portraits/**",
      },
    ],
  },
  env: {
    EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || "fuckoff",
  },
  output: 'standalone'
};

export default nextConfig;
