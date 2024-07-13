import "../styles/globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import {
  defaultMetadata,
  ogMetadata,
  twitterMetadata,
} from "./shared-metadata";
import Background from "../components/background/";
import { TailwindIndicator } from "../components/tailwind-indicator";
import { Toaster } from "../components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export const metadata: Metadata = {
  ...defaultMetadata,
  twitter: {
    ...twitterMetadata,
  },
  openGraph: {
    ...ogMetadata,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} ${calSans.variable} font-inter`}>
          <Background />

          {children}
          <Toaster />
          <TailwindIndicator />
          <Analytics />
        </body>
      </html>
  );
}
