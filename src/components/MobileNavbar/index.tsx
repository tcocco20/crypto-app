import NavLink from "./NavLink";

const MobileNavbar = () => {
  return (
    <nav className="z-50 fixed bottom-0 left-0 border-t border-t-gray-600 w-full bg-gradient-to-b from-indigo-950/30 from-75% to-gray-800 backdrop-blur-sm p-2 flex justify-between">
      <NavLink label="Overview" icon="/icons/home.svg" href="/" />
      <NavLink
        label="Converter"
        icon="/icons/converter.svg"
        href="/converter"
      />
      <NavLink
        label="Portfolio"
        icon="/icons/portfolio.svg"
        href="/portfolio"
      />
    </nav>
  );
};

export default MobileNavbar;
