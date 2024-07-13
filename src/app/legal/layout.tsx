import type { Metadata } from "next";
import {
  defaultMetadata,
  ogMetadata,
  twitterMetadata,
} from "../../app/shared-metadata";
import HomeFooter from "../../components/footer/home";
import HomeNavbar from "../../components/navbar/home";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";

export const metadata: Metadata = {
  ...defaultMetadata,
  title: "Legal - OpenBio",
  twitter: {
    ...twitterMetadata,
    title: "Legal - OpenBio",
  },
  openGraph: {
    ...ogMetadata,
    title: "Legal - OpenBio",
  },
};

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

import Background from "../../components/background/";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${calSans.variable} font-inter`}>
      <Background />
    <section className="container mx-auto flex h-full w-full flex-col items-center justify-center gap-y-6 pb-4 pt-24 md:pb-8">
      <HomeNavbar />

      <div className="w-full max-w-3xl rounded-lg border border-border bg-background px-3 py-4 md:px-6 md:py-8">
        <article className="prose dark:prose-invert prose-headings:font-cal prose-p:text-sm">
          {children}
        </article>
      </div>

      <HomeFooter />
    </section>
    </body>
    </html>
  );
}
