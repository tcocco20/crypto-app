import DesktopNav from "./DesktopNav";
import TopBar from "./TopBar";

const DesktopHeader = () => {
  return (
    <header className="hidden md:block">
      <TopBar />
      <DesktopNav />
    </header>
  );
};

export default DesktopHeader;
