import type { Metadata } from "next";
import { Zen_Kurenaido } from "next/font/google";
import "@/scss/globals.scss";
import config from "@/server/configLoader";
import { Suspense } from 'react';
// src/app/page.tsx (サーバーコンポーネントの例)
import { serverLogger } from '@/server/lib/logger';
import SpinnerComponent from '@/components/Spinner';



const zenKurenaido = Zen_Kurenaido({
  weight: ["400"],
});

export const metadata: Metadata = {
  title: config.app.title as string,
  description: config.app.description as string,
  other: {
    charset: config.app.meta.encode as string, // ⭐ これでかなかながUTF-8に設定したことになる！
  },
};

export default async function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  serverLogger.info('ホームページがサーバーでレンダリングされました。');
  return (
    <html lang={config.app.meta.language as string}>
      <body
        className={zenKurenaido.className}
        suppressHydrationWarning={true}
      >

        <Suspense fallback={<SpinnerComponent />}>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
