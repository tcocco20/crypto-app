import Link from "next/link";

import Image from "next/image";

const NavLink = () => {
  return (
    <div className="relative p-[1px] bg-gradient-to-b from-indigo-300 to-indigo-600 rounded-md">
      <Link
        href="/"
        className="flex flex-col justify-center items-center py-2 px-6 rounded-md bg-indigo-700/90"
      >
        <Image src={"/icons/home.svg"} alt="" width={24} height={24} />
        <p className="text-xs font-extralight text-white">Overview</p>
      </Link>
    </div>
  );
};

export default NavLink;
