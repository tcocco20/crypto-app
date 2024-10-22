import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DesktopHeader from "@/components/DesktopHeader";
import MobileNavbar from "@/components/MobileNavbar";
import MobileHeader from "@/components/MobileHeader";
import Providers from "@/app/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Crypto Tracker",
  description: "Track your crypto investments",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-gray-200/45 dark:bg-gray-800 dark:md:bg-gray-900 transition-all duration-500`}
      >
        <Providers>
          <MobileHeader />
          <DesktopHeader />
          <main className="flex min-h-screen flex-col px-3 md:px-24">
            {children}
          </main>
          <MobileNavbar />
          <div id="portal-root"></div>
        </Providers>
      </body>
    </html>
  );
}
