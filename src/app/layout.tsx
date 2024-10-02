import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import DesktopHeader from "@/components/DesktopHeader";
import MobileNavbar from "@/components/MobileNavbar";
import MobileHeader from "@/components/MobileHeader";

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
        <StoreProvider>
          <MobileHeader />
          <DesktopHeader />
          {children}
          <MobileNavbar />
        </StoreProvider>
      </body>
    </html>
  );
}
