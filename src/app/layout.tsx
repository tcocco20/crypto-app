import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import DesktopHeader from "@/components/DesktopHeader";
import MobileNavbar from "@/components/MobileNavbar";
import MobileHeader from "@/components/MobileHeader";
import DarkModeWrapper from "@/components/utilityComponents/DarkModeWrapper";

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
    <html lang="en">
      <StoreProvider>
        <DarkModeWrapper>
          <body
            className={`${inter.className} dark:bg-gray-800 dark:md:bg-gray-900`}
          >
            <MobileHeader />
            <DesktopHeader />
            {children}
            <MobileNavbar />
          </body>
        </DarkModeWrapper>
      </StoreProvider>
    </html>
  );
}
