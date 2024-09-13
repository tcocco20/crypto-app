import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <div className="flex gap-5 items-center">
      <div className="flex gap-2">
        <Link href="/" className="text-white text-lg">
          Home
        </Link>
      </div>
      <div className="flex gap-2">
        <Link className="text-white text-lg" href="/portfolio">
          Portfolio
        </Link>
      </div>
    </div>
  );
};

export default NavLinks;
