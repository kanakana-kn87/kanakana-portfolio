// components/SpinnerComponent.tsx (元のファイルだよ！)
import dynamic from 'next/dynamic';
import React from 'react';

// ClientLottieコンポーネントを動的にインポートするよ！
// ssr: false は使わない！
const ClientLottie = dynamic(() => import('./Spinner'), { ssr: false });

export default function SpinnerComponent() {
  return <ClientLottie />;
}