import Card from "@/components/UI/Card";
import PortfolioDetails from "./PortfolioDetails";
import MarketDetails from "./MarketDetails";
import { type PortfolioCoinWithMarketData } from "@/lib/types/PortfolioCoinWithMarketData";

interface PortfolioCoinCardProps {
  coin: PortfolioCoinWithMarketData;
  selectedCurrency: string;
}

const PortfolioCoinCard = ({
  coin,
  selectedCurrency,
}: PortfolioCoinCardProps) => {
  return (
    <Card className="p-px md:p-[2px] rounded-md md:flex">
      <PortfolioDetails coin={coin} selectedCurrency={selectedCurrency} />
      <MarketDetails coin={coin} selectedCurrency={selectedCurrency} />
    </Card>
  );
};

export default PortfolioCoinCard;
