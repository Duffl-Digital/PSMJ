import type { NextConfig } from "next";

const nextConfig: NextConfig = {
trailingSlash: true,  
  output: "export",

  images: {
    unoptimized: true,
  },

  devIndicators: false,
};

export default nextConfig;
