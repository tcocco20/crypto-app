import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import MobileLayout from "@/components/MobileLayout";
import DesktopHeader from "@/components/DesktopHeader";

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
      <body className={`${inter.className} bg-gray-800 md:bg-gray-900`}>
        <StoreProvider>
          <MobileLayout />
          <DesktopHeader />
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
