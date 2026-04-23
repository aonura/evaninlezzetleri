import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Prisma'yı Next.js bundle'ına dahil etme, native Node.js modülü olarak kullan
  serverExternalPackages: ["@prisma/client", "prisma"],
};

export default nextConfig;
