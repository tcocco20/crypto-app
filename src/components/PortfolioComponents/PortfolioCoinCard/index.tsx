import Card from "@/components/UI/Card";
import PortfolioDetails from "./PortfolioDetails";
import MarketDetails from "./MarketDetails";
import { type PortfolioCoinWithMarketData } from "@/lib/types/PortfolioCoinWithMarketData";
import { Dialog, DialogPortal, DialogTrigger } from "@radix-ui/react-dialog";
import EditPortfolioCoinModal from "../EditPortfolioCoinModal";

interface PortfolioCoinCardProps {
  coin: PortfolioCoinWithMarketData;
  selectedCurrency: string;
}

const PortfolioCoinCard = ({
  coin,
  selectedCurrency,
}: PortfolioCoinCardProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="p-px md:p-[2px] rounded-md md:flex">
          <PortfolioDetails coin={coin} selectedCurrency={selectedCurrency} />
          <MarketDetails coin={coin} selectedCurrency={selectedCurrency} />
        </Card>
      </DialogTrigger>
      <DialogPortal>
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-950/20 z-50 backdrop-blur-sm" />
        <EditPortfolioCoinModal coin={coin} />
      </DialogPortal>
    </Dialog>
  );
};

export default PortfolioCoinCard;
