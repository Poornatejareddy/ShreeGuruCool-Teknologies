import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Allows ALL external images (use with caution)
      },
    ],
  },
};

export default nextConfig;
