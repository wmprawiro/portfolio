import type { Metadata } from "next";
import { Noto_Sans_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wmprawiro.dev"),
  title: {
    default: "wmprawiro — Product Engineer",
    template: "%s | wmprawiro",
  },
  description:
    "Portfolio of Wahyu Maulana Prawiro, a Product Engineer with strong experience in building complex Fintech ecosystems.",
  keywords: [
    "Product Engineer",
    "UI/UX",
    "Fintech",
    "Design System",
    "Portfolio",
    "Wahyu Maulana Prawiro",
  ],
  authors: [{ name: "Wahyu Maulana Prawiro" }],
  creator: "Wahyu Maulana Prawiro",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "wmprawiro — Product Engineer",
    description:
      "Portfolio of Wahyu Maulana Prawiro, a Product Engineer with strong experience in building complex Fintech ecosystems.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "wmprawiro",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "wmprawiro — Product Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "wmprawiro — Product Engineer",
    description:
      "Portfolio of Wahyu Maulana Prawiro, a Product Engineer with strong experience in building complex Fintech ecosystems.",
    creator: "@wmprawiro",
    images: ["/opengraph-image"],
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
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:font-mono focus:text-xs"
        >
          Skip to main content
        </a>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Wahyu Maulana Prawiro",
              url: "https://wmprawiro.dev",
              jobTitle: "Product Engineer",
              email: "work@wmprawiro.dev",
              description:
                "Product Engineer specializing in system analysis, end-to-end SDLC, and scalable architectures with strong experience in the fintech sector.",
              sameAs: [
                "https://twitter.com/wmprawiro",
                "https://linkedin.com/in/wmprawiro",
                "https://github.com/wmprawiro",
                "https://figma.com/@wmprawiro",
              ],
            }),
          }}
        />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
