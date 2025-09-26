// next.config.js の世界へレッツゴー！

import type { NextConfig } from "next";
import { join } from "path";

const nextConfig: NextConfig = {
  webpack(config, { isServer, dev, webpack }) { 
    
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": join(__dirname, "src"),
    };
    
    // ⭐️ 開発モード (dev) かつ サーバー側 (isServer) の時だけポーリング設定を有効にする
    if (dev && isServer) {
      config.watchOptions = {
        poll: 800,
        ignored: /node_modules/,
      };
    } 
    // ⭐️ if文の閉じカッコを修正。watchOptionsはisServerの時しか使えないから、if文の外では定義しないよ！
    
    return config;
  },
};

export default nextConfig;