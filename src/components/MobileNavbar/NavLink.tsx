"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SelectableWrapper from "../UI/SelectableWrapper";

interface NavLinkProps {
  href: string;
  icon: string;
  label: string;
}

const NavLink = ({ href, icon, label }: NavLinkProps) => {
  const path = usePathname();
  const active = href === path;
  return (
    <SelectableWrapper selected={active}>
      <Link
        href={href}
        className="flex flex-col justify-center items-center py-1 px-6"
      >
        <Image src={icon} width={20} height={20} alt={`Link to ${label}`} />
        <p className="text-xs font-extralight text-white">{label}</p>
      </Link>
    </SelectableWrapper>
  );
};

export default NavLink;
