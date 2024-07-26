import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { inter } from "./inter";
import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.athromic.com"),
  icons: {
    icon: [
      {
        sizes: "any",
        url: "/static/favicon.ico",
      },
    ],
    apple: "/static/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    images: "static/cover.svg",
  },
  openGraph: {
    images: "static/cover.svg",
    type: "website",
    url: "https://www.athromic.com",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans text-slate-12 selection:bg-cyan-5 selection:text-cyan-12 bg-black overflow:hidden`}
      >
        <NextUIProvider>{children}</NextUIProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
