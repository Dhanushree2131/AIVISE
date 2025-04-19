/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
      },
    ],
  },
  experimental: {
    allowedDevOrigins: ["http://localhost:3000", "http://192.168.216.20"],
  },
};

export default nextConfig;
