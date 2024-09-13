import { House, Layers } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <div className="flex gap-5 items-center">
      <div className="flex gap-2 items-center">
        <House color="white" />
        <Link href="/" className="text-white text-lg">
          Home
        </Link>
      </div>
      <div className="flex gap-2 items-center">
        <Layers color="white" />
        <Link className="text-white text-lg" href="/portfolio">
          Portfolio
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
