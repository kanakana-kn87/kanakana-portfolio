// src/app/page.tsx

import { Suspense } from 'react';
import SpinnerComponent from '@/components/Spinner';
import Main from './main';
export default function Home() {
  return (
    // ⭐ Suspenseをpage.tsxで使う！
    <Suspense fallback={<SpinnerComponent />}>
      <Main />
    </Suspense>
  );
}