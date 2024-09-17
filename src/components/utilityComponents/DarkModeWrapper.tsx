"use client";

import { useAppSelector } from "@/lib/hooks";
import React, { ReactNode } from "react";

const DarkModeWrapper = ({ children }: { children: ReactNode }) => {
  const darkMode = useAppSelector((state) => state.preferences.darkMode);

  //   console.log(darkMode);

  return <div className={darkMode ? "dark" : undefined}>{children}</div>;
};

export default DarkModeWrapper;
