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
        <House size={26} className={path === "/" ? "text-white" : "text-gray-500"} />
        <Link
          href="/"
          className={`${
            path === "/" ? "text-white" : "text-gray-500"
          } lg:text-lg`}
        >
          Home
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <Layers
          className={path === "/portfolio" ? "text-white" : "text-gray-500"}
        />
        <Link
          className={`${
            path === "/portfolio" ? "text-white" : "text-gray-500"
          } lg:text-lg`}
          href="/portfolio"
        >
          Portfolio
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
