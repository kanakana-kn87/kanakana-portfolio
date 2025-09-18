import type { Metadata } from "next";
import { Zen_Kurenaido } from "next/font/google";
import "@/scss/globals.scss";
import config from "@/server/configLoader";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={config.app.meta.language as string}>
      <body
        className={zenKurenaido.className}
        suppressHydrationWarning={false}
      >
        {children}
      </body>
    </html>
  );
}
