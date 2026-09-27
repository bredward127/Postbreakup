import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The paid PDF lives outside /public so it's only reachable via /api/download.
  outputFileTracingIncludes: {
    "/api/download": ["./private/**"],
  },
};

export default nextConfig;
