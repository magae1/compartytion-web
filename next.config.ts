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
        has: [{ type: "cookie", key: "JSESSIONID" }],
        permanent: false,
        destination: "/dashboard",
      },
      {
        source: "/dashboard",
        missing: [{ type: "cookie", key: "JSESSIONID" }],
        permanent: false,
        destination: "/login",
      },
    ];
  },
};

export default nextConfig;
