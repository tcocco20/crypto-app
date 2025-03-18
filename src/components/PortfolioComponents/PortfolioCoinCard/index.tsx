import Card from "@/components/UI/Card";
import PortfolioDetails from "./PortfolioDetails";
import MarketDetails from "./MarketDetails";
import { type PortfolioCoin } from "@/lib/types/PortfolioCoin";

interface PortfolioCoinCardProps {
  coin: PortfolioCoin;
}

const PortfolioCoinCard = ({ coin }: PortfolioCoinCardProps) => {
  return (
    <Card className="p-px md:p-[2px] rounded-md md:flex">
      <PortfolioDetails coin={coin} />
      <MarketDetails />
    </Card>
  );
};

export default PortfolioCoinCard;
