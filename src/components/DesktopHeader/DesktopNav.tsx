"use client";
import Image from "next/image";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import { useAppSelector } from "@/lib/hooks";

const DesktopNav = () => {
  const darkMode = useAppSelector((state) => state.preferences.darkMode);
  return (
    <nav className="flex justify-between px-4 lg:px-12 xl:px-20 py-8">
      <Image
        src={darkMode ? "/images/logo.png" : "/images/logo-light.png"}
        width={200}
        height={60}
        alt="Company Logo"
      />
      <NavLinks />
      <NavActions />
    </nav>
  );
};

export default DesktopNav;
