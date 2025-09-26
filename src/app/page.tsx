// src/app/page.tsx

import { Suspense } from "react";
import Main from "./main";
import SpinnerComponent from "@/components/Spinner";
import ThemeToggler from "@/components/Mode";

const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export default async function Home() {
  await delay(500);
  return (
    // ⭐ Suspenseをpage.tsxで使う！
    <Suspense fallback={<SpinnerComponent />}>
      <Main />
      <ThemeToggler />
    </Suspense>
  );
}
