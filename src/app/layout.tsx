import "@/styles/globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: "Athromic",
  description:
    "Coming Soon.",
  metadataBase: new URL("https://www.athromic.com"),
};

import { TRPCReactProvider } from "@/trpc/react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-100 via-cyan-50 to-pink-100" />
        <Nav />
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
        <TRPCReactProvider> {children}</TRPCReactProvider>
        </main>
        <Footer />
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
