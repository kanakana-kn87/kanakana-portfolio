import type { Metadata } from "next";
import { Zen_Kurenaido } from "next/font/google";
import "./globals.css";

const zenKurenaido = Zen_Kurenaido({
  weight: ["400"]
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={zenKurenaido.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
