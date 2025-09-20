// src/app/page.tsx

import { Suspense } from "react";
import SpinnerComponent from "@/components/Spinner";
import Main from "./main";
const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default async function Home() {
  await delay(3000);
  return (
    // ⭐ Suspenseをpage.tsxで使う！
    <Suspense fallback={<SpinnerComponent />}>
      <Main />
    </Suspense>
  );
}
