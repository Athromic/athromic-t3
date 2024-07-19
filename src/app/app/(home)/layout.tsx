import "@/styles/globals.css";
import cx from "classnames";
import { sfPro, inter } from "../../fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";

export const metadata = {
  title: "Athromic - App",
  description:
    "Coming Soon.",
  metadataBase: new URL("https://www.athromic.com"),
  icons: {
    icon: '/favicon.ico', // /public path
  },
};

import { TRPCReactProvider } from "@/trpc/react";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
        <div className="fixed h-screen w-full bg-gradient-to-br from-indigo-100 via-cyan-50 to-pink-100">
          <div className="relative fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-pink-100 opacity-50" />
          </div>
        </div>
        <Nav />
        <main className="flex min-h-screen w-full flex-col items-center justify-center py-32">
          <TRPCReactProvider>
            {children}
          </TRPCReactProvider>
        </main>
        <Footer />
  );
}