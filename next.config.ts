import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Dynamic base path for subdomain/subdirectory resilience */
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
  
  // Enable standalone output for Docker optimization
  output: "standalone",
  
  // Image optimization settings for self-hosting
  images: {
    unoptimized: true, // Recommended for VPS/Docker unless using a specific loader
  },
};

export default nextConfig;
