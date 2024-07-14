import HomeFooter from "../../components/footer/home";
import HomeNavbar from "../../components/navbar/home";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";
import Background from "../../components/background/";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function Layout({ children }: { children: React.ReactNode }) {

  
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${calSans.variable} font-inter`}>
      <Background />
    <div className="container mx-auto flex min-h-screen w-full flex-col items-center justify-center py-4 md:py-8">
      <HomeNavbar />

      <div className="flex w-full max-w-3xl flex-1 flex-col items-center justify-center py-20">
        {children}
      </div>

      <HomeFooter />
      <SpeedInsights />
      <Analytics />
    </div>
    </body>
    </html>
  );
}
