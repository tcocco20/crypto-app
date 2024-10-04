"use client";
import React from "react";
import SelectableWrapper from "../UI/SelectableWrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HomeNav = () => {
  const path = usePathname();
  return (
    <div className="py-1 px-2 bg-white dark:bg-violet-900/20 hidden md:flex items-center rounded-md self-start gap-1 my-10 text-indigo-900 dark:text-white">
      <SelectableWrapper py="py-3" selected={path === "/"}>
        <Link href="/" className="px-28 py-5 text-lg font-light">
          Coins
        </Link>
      </SelectableWrapper>
      <SelectableWrapper py="py-3" selected={path === "/converter"}>
        <Link href="/converter" className="px-28 py-5 text-lg font-light">
          Converter
        </Link>
      </SelectableWrapper>
    </div>
  );
};

export default HomeNav;
