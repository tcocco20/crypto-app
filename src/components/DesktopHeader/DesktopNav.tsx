import Image from "next/image";
import NavLinks from "./NavLinks";

const DesktopNav = () => {
  return (
    <nav className="flex justify-between px-20 py-8">
      <Image
        src="/images/logo.png"
        width={200}
        height={60}
        alt="Company Logo"
      />
      <NavLinks />
    </nav>
  );
};

export default DesktopNav;
