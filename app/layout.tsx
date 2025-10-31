import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import BackgroundMusic from "@/components/background-music";
import "./globals.css";
// (Font imports removed — fonts were initialized but not used; keep layout minimal)

export const metadata: Metadata = {
  title: "TYCOON ĐIỆN LỰC - ELV",
  description:
    "Trò chơi mô phỏng quản lý Tập đoàn Điện Lực trong 5 năm nhiệm kỳ",
  generator: "v0.app"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`font-sans antialiased`}>
        {children}
        <BackgroundMusic />
        <Analytics />
      </body>
    </html>
  );
}
