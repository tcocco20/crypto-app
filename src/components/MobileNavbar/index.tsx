import NavLink from "./NavLink";

const MobileNavbar = () => {
  return (
    <nav className="z-50 fixed bottom-0 left-0 border-t dark:border-t-gray-600 w-full bg-indigo-950/90 dark:bg-gradient-to-b dark:from-indigo-950/30 dark:from-65% dark:to-gray-800 backdrop-blur-sm p-2 flex justify-between md:hidden">
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
