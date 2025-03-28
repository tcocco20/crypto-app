"use client";
import { useAppSelector } from "@/lib/hooks";
import { type ReactNode } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonThemeWrapper = ({ children }: { children: ReactNode }) => {
  const darkMode = useAppSelector((state) => state.preferences.darkMode);
  const skeletonColor = darkMode ? "#454563" : "#f9f9f9";

  return (
    <SkeletonTheme baseColor={skeletonColor} highlightColor="#444">
      {children}
    </SkeletonTheme>
  );
};

export default SkeletonThemeWrapper;
