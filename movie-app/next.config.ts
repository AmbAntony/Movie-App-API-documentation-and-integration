import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

images: {
    // Add all external domains that host your images here.
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'm.media-amazon.com',
            port: '',
            pathname: '/images/**',
        }
        ]
  }
};


export default nextConfig;
