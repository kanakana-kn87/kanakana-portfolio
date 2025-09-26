import type { Metadata } from "next";
import { Zen_Kurenaido } from "next/font/google";
import "@/scss/globals.scss";
import config from "@/server/configLoader";
import { Suspense } from "react";
// src/app/page.tsx (サーバーコンポーネントの例)
import { serverLogger } from "@/server/lib/logger";
import SpinnerComponent from "@/components/Spinner";
import Providers from "./providers"; 
import "@radix-ui/themes/styles.css";

const zenKurenaido = Zen_Kurenaido({
  weight: ["400"],
  subsets: ["latin"],
  variable: '--font-zen',
});

export const metadata: Metadata = {
  title: config.app.title as string,
  description: config.app.description as string,
  other: {
    charset: config.app.meta.encode as string, // ⭐ これでかなかながUTF-8に設定したことになる！
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  serverLogger.info("ホームページがサーバーでレンダリングされました。");
  return (
    <html lang={config.app.meta.language as string}>
      <body className={zenKurenaido.className} suppressHydrationWarning={true}>
        {/* ⭐️ Providers（クライアント）で囲む！ */}
        <Providers> 
          <Suspense fallback={<SpinnerComponent />}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}