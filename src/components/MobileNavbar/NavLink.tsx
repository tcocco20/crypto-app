"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  href: string;
  icon: string;
  label: string;
}

const NavLink = ({ href, icon, label }: NavLinkProps) => {
  const path = usePathname();
  const active = href === path;
  return (
    <div
      className={`p-[1px] ${
        active
          ? "relative bg-gradient-to-b from-indigo-300 to-indigo-600 rounded-md shadow-2xl shadow-indigo-500"
          : ""
      }`}
    >
      <Link
        href={href}
        className={`flex flex-col justify-center items-center py-1 px-6 rounded-md ${
          active && "bg-indigo-700/90"
        }`}
      >
        <Image src={icon} width={20} height={20} alt={`Link to ${label}`} />
        <p className="text-xs font-extralight text-white">{label}</p>
      </Link>
    </div>
  );
};

export default NavLink;
