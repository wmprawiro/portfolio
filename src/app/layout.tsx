import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { SiteNavbar } from "@/components/site-navbar";

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "wmprawiro - ウェブデザイナー・開発者",
  description:
    "ワヒュー・マウラナ・プラウィロのポートフォリオ - フィンテックとWeb3技術を専門とするウェブデザイナー兼開発者。",
  keywords: [
    "ウェブデザイン",
    "ウェブ開発",
    "UI/UX",
    "フィンテック",
    "Web3",
    "ポートフォリオ",
  ],
  authors: [{ name: "Wahyu Maulana Prawiro" }],
  creator: "Wahyu Maulana Prawiro",
  openGraph: {
    title: "wmprawiro - ウェブデザイナー・開発者",
    description:
      "ワヒュー・マウラナ・プラウィロのポートフォリオ - フィンテックとWeb3技術を専門とするウェブデザイナー兼開発者。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark">
      <body
        className={`${notoSansMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        <SiteNavbar />
        <main className="pt-11.5">{children}</main>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
