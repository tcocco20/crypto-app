import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import StoreProvider from "./StoreProvider";

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
      <body className={inter.className}>
        <StoreProvider>
          <div className="h-24 bg-red-400">
            <div className="">
              <Link href="/">Home</Link>
              <Link href="/portfolio">Portfolio</Link>
            </div>
          </div>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}
