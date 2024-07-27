// src/app/layout.tsx
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { inter } from "./inter";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "@/components/ui/sonner";
import Head from "next/head";
import type { Viewport } from "next";

export const metadata = {
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

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="dark">
      <Head>
        <meta
          content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;"
          name="viewport"
        />

        <meta name="viewport" content="width=device-width" />
      </Head>
      <body
        className={`${inter.variable} font-sans text-slate-12 selection:bg-cyan-5 selection:text-cyan-12 bg-black`}
      >
        <NextUIProvider>{children}</NextUIProvider>
        <Toaster />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
