import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "wmprawiro - Product Designer",
  description:
    "Portfolio of Wahyu Maulana Prawiro, a Product Designer with strong experience in building complex Fintech ecosystems.",
  keywords: [
    "Product Designer",
    "UI/UX",
    "Fintech",
    "Design System",
    "Portfolio",
  ],
  authors: [{ name: "Wahyu Maulana Prawiro" }],
  creator: "Wahyu Maulana Prawiro",
  openGraph: {
    title: "wmprawiro - Product Designer",
    description:
      "Portfolio of Wahyu Maulana Prawiro, a Product Designer with strong experience in building complex Fintech ecosystems.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${notoSansMono.variable} antialiased bg-black text-white min-h-screen`}
      >
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
