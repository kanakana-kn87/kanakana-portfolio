import type { NextConfig } from "next";
import { join } from 'path';

const nextConfig: NextConfig = {
    webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': join(__dirname, 'src'),
    };
    return config;
  },
};

export default nextConfig;
