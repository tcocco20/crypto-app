"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import TopBar from "./TopBar";

const DesktopHeader = () => {
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return (
    <header>
      <TopBar />
    </header>
  );
};

export default DesktopHeader;
