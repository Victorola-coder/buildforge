/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
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
};

export default nextConfig;
