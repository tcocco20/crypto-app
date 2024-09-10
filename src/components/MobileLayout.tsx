"use client";
import React from "react";
import MobileNavbar from "@/components/MobileNavbar";
import MobileHeader from "@/components/MobileHeader";
import { useIsMobile } from "@/hooks/useIsMobile";

const MobileLayout = () => {
  const isMobile = useIsMobile();

  if (!isMobile) return null;
  
  return (
    <>
      <MobileHeader />
      <MobileNavbar />
    </>
  );
};

export default MobileLayout;
