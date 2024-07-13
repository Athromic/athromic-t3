import HomeFooter from "../../components/footer/home";
import HomeNavbar from "../../components/navbar/home";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
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
