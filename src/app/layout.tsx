import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import "./globals.css";
import { SiteNavbar } from "@/components/site-navbar";

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin"],
});

// Helvetica will be used via CSS as it's a system font

export const metadata: Metadata = {
  title: "wmprawiro - Web Designer & Developer",
  description:
    "Portfolio of Wahyu Maulana Prawiro - Web Designer & Developer specializing in finance and Web3 technologies.",
  keywords: [
    "web design",
    "web development",
    "UI/UX",
    "finance",
    "Web3",
    "portfolio",
  ],
  authors: [{ name: "Wahyu Maulana Prawiro" }],
  creator: "Wahyu Maulana Prawiro",
  openGraph: {
    title: "wmprawiro - Web Designer & Developer",
    description:
      "Portfolio of Wahyu Maulana Prawiro - Web Designer & Developer specializing in finance and Web3 technologies.",
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
        <SiteNavbar />
        <main className="pt-11.5">{children}</main>
      </body>
    </html>
  );
}
