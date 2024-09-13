import Image from "next/image";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";

const DesktopNav = () => {
  return (
    <nav className="flex justify-between px-4 lg:px-12 xl:px-20 py-8">
      <Image
        src="/images/logo.png"
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
