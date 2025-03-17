import Card from "@/components/UI/Card";
import PortfolioDetails from "./PortfolioDetails";
import MarketDetails from "./MarketDetails";

const PortfolioCoinCard = () => {
  return (
    <Card className="p-px md:p-[2px] rounded-md md:flex">
      <PortfolioDetails />
      <MarketDetails />
    </Card>
  );
};

export default PortfolioCoinCard;
