// src/app/page.tsx

import { Suspense } from "react";
import Main from "./main";
import SpinnerComponent from '@/components/Spinner';

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default async function Home() {
  await delay(1000);
  return (
    // ⭐ Suspenseをpage.tsxで使う！
    <Suspense fallback={<SpinnerComponent />}>
      <Main />
    </Suspense>
  );
}
