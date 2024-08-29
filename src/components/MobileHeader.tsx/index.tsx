import HeaderActions from "./HeaderActions";
import HeaderInfo from "./HeaderInfo";

const MobileHeader = () => {
  return (
    <header className="bg-gray-800">
      <HeaderActions />
      <HeaderInfo />
    </header>
  );
};

export default MobileHeader;
