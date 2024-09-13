import HeaderActions from "./HeaderActions";
import HeaderInfo from "./HeaderInfo";

const MobileHeader = () => {
  return (
    <header className="block md:hidden">
      <HeaderActions />
      <HeaderInfo />
    </header>
  );
};

export default MobileHeader;
