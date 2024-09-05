import NavLink from "./NavLink";

const MobileNavbar = () => {
  return (
    <nav className="z-50 fixed bottom-0 left-0 border-t border-t-gray-600 w-full bg-indigo-950/30 backdrop-blur-sm p-3 flex justify-between">
      <NavLink />
      <NavLink />
      <NavLink />
    </nav>
  );
};

export default MobileNavbar;
