import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, //
  },

  async rewrites() {
    return [
      {
        source: '/images/:path*',
        destination: '/image/:path*',
      },
    ];
  },
};

export default nextConfig;

