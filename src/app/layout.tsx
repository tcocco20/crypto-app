import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MobileNavbar from "@/components/MobileNavbar";
import Providers from "@/app/Providers";
import { ToastContainer } from "react-toastify";
import Header from "@/components/UI/Header";

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
        className={`${inter.className} bg-gray-200/45 dark:bg-gray-950 transition-all duration-500`}
      >
        <Providers>
          <Header />
          <main className="flex min-h-screen flex-col px-3 md:px-8 lg:px-12 xl:px-24">
            {children}
          </main>
          <MobileNavbar />
          <div id="portal-root"></div>
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
