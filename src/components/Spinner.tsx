"use client";

import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

export default function MyLottiePlayer() {
  return (
    <Player
      autoplay
      loop
      src="/Lottie/loading.json" // ⭐ publicディレクトリのファイルを指定！
      style={{ height: '300px', width: '300px' }}
      speed={20}
    />
  );
}