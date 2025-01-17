import { GlobalMarketData } from "@/lib/types/GlobalMarketData";
import DesktopNav from "./DesktopNav";
import TopBar from "./TopBar";

interface DesktopHeaderProps {
  data: GlobalMarketData;
}

const DesktopHeader = ({ data }: DesktopHeaderProps) => {
  return (
    <header className="hidden md:block">
      <TopBar marketData={data} />
      <DesktopNav />
    </header>
  );
};

export default DesktopHeader;
