import actions from "@/actions";
import DesktopHeader from "../DesktopHeader";
import MobileHeader from "../MobileHeader";

const Header = async () => {
  const data = await actions.getGlobalMarketData();
  return (
    <>
      <MobileHeader data={data} />
      <DesktopHeader data={data} />
    </>
  );
};

export default Header;
