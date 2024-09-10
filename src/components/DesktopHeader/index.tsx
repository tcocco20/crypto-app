"use client";

import { useIsMobile } from "@/hooks/useIsMobile";

const DesktopHeader = () => {
  const isMobile = useIsMobile();

  if (isMobile) return null;

  return <header>DesktopHeader</header>;
};

export default DesktopHeader;
