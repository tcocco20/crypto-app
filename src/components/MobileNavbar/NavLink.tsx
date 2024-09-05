import Link from "next/link";
import Image from "next/image";

interface NavLinkProps {
  href: string;
  icon: string;
  label: string;
}

const NavLink = ({ href, icon, label }: NavLinkProps) => {
  //   const router = useRouter();
  //   const { pathname } = router;
  const active = false;
  return (
    <div
      className={`${
        active
          ? "relative p-[1px] bg-gradient-to-b from-indigo-300 to-indigo-600 rounded-md shadow-2xl shadow-indigo-500"
          : ""
      }`}
    >
      <Link
        href={href}
        className={`flex flex-col justify-center items-center py-2 px-6 rounded-md ${
          active && "bg-indigo-700/90"
        }`}
      >
        <Image src={icon} width={24} height={24} alt={`Link to ${label}`} />
        <p className="text-xs font-extralight text-white">{label}</p>
      </Link>
    </div>
  );
};

export default NavLink;
