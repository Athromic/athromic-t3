import "@/styles/globals.css";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Analytics as VercelAnalytics } from "@vercel/analytics/react";
import { SpeedInsights } from '@vercel/speed-insights/next';

export const metadata = {
  title: "Athromic",
  description:
    "Coming Soon.",
  metadataBase: new URL("https://www.athromic.com"),
  icons: {
    icon: '/favicon.ico', // /public path
  },
};

import { GridBackground } from "@/components/shared/background-grid";

import { TRPCReactProvider } from "@/trpc/react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body className={cx(sfPro.variable, inter.variable)}>
          <div className="fixed inset-0 -z-10 w-full h-screen">
            <GridBackground />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-pink-100 opacity-70" />
          </div>
        <Nav />
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          <TRPCReactProvider>
            {children}
          </TRPCReactProvider>
        </main>
        <Footer />
        <VercelAnalytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
