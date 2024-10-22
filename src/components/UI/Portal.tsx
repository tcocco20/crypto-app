"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
}

const Portal = ({ children }: PortalProps) => {
  const [mounted, setMounted] = useState(false);
  const portalElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    portalElementRef.current = document.getElementById("portal-root");
    setMounted(true);
  }, []);

  if (!mounted || !portalElementRef.current) {
    return null;
  }

  return createPortal(children, portalElementRef.current);
};

export default Portal;
