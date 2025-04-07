"use client";
import { House, Layers } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const path = usePathname();
  return (
    <div className="flex gap-2 lg:gap-5 items-center">
      <div className="flex gap-2 items-center">
        <Link
          href="/"
          className={`${
            path === "/" || path === "/converter"
              ? "text-indigo-900 dark:text-white"
              : "text-indigo-900/40 dark:text-gray-500 hover:opacity-75 hover:text-indigo-900 dark:hover:text-white transition-all duration-200"
          } lg:text-lg flex gap-3 items-center`}
        >
          <House size={26} />
          Home
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <Link
          className={`${
            path === "/portfolio"
              ? "text-indigo-900 dark:text-white"
              : "text-indigo-900/40 dark:text-gray-500 hover:opacity-75 hover:text-indigo-900 dark:hover:text-white transition-all duration-200"
          } lg:text-lg flex gap-3 items-center`}
          href="/portfolio"
        >
          <Layers />
          Portfolio
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
