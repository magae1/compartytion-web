import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
        pathname: "/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/",
        has: [{ type: "cookie", key: "SESSION" }],
        permanent: false,
        destination: "/dashboard",
      },
      {
        source: "/dashboard",
        missing: [{ type: "cookie", key: "SESSION" }],
        permanent: false,
        destination: "/login",
      },
      {
        source: "/grounds/:id",
        destination: "/grounds/:id/home",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
