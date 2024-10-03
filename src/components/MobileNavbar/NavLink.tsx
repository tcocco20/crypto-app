"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SelectableWrapper from "../UI/SelectableWrapper";
import { useAppSelector } from "@/lib/hooks";

interface NavLinkProps {
  href: string;
  icon: string;
  label: string;
}

const NavLink = ({ href, icon, label }: NavLinkProps) => {
  const path = usePathname();
  const active = href === path;
  const isDarkMode = useAppSelector((state) => state.preferences.darkMode);

  return (
    <SelectableWrapper selected={active} shadowSize="shadow-2xl">
      <Link
        href={href}
        className="flex flex-col justify-center items-center py-1 px-6 text-black dark:text-white"
      >
        <Image
          src={`${icon}${!isDarkMode ? "-light" : ""}.svg`}
          width={20}
          height={20}
          alt={`Link to ${label}`}
        />
        <p className="text-xs font-extralight">{label}</p>
      </Link>
    </SelectableWrapper>
  );
};

export default NavLink;
