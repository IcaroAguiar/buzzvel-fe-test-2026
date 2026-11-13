import type { NextConfig } from "next";

const config: NextConfig = {
  images: { qualities: [75, 90] },
  reactStrictMode: true,
  poweredByHeader: false,
  experimental: { cpus: 2 },
};

export default config;
