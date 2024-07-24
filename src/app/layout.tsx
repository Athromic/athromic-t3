import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { inter } from "./inter";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.athromic.com"),
  icons: {
    icon: [
      {
        sizes: "any",
        url: "/static/favicon.ico",
      },
      {
        type: "image/svg+xml",
        url: "/static/favicon.svg",
      },
    ],
    apple: "/static/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    images: "https://react.email/static/cover.png",
  },
  openGraph: {
    images: "static/cover.png",
    type: "website",
    url: "https://www.athromic.com",
  },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans text-slate-12 selection:bg-cyan-5 selection:text-cyan-12 bg-black`}
      >
        {children}

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
};

export default RootLayout;
