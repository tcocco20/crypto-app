import { GlobalMarketData } from "@/lib/types/GlobalMarketData";
import HeaderActions from "./HeaderActions";
import HeaderInfo from "./HeaderInfo";

interface MobileHeaderProps {
  data: GlobalMarketData;
}

const MobileHeader = ({ data }: MobileHeaderProps) => {
  return (
    <header className="block md:hidden">
      <HeaderActions />
      <HeaderInfo marketData={data} />
    </header>
  );
};

export default MobileHeader;
