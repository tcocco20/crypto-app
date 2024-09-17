"use client";

import { useAppSelector } from "@/lib/hooks";
import { type ReactNode } from "react";

const DarkModeWrapper = ({ children }: { children: ReactNode }) => {
  const darkMode = useAppSelector((state) => state.preferences.darkMode);

  return (
    <div
      className={`${
        darkMode ? "dark " : ""
      }dark:bg-gray-800 dark:md:bg-gray-900 w-full h-full transition-all duration-500`}
    >
      {children}
    </div>
  );
};

export default DarkModeWrapper;
