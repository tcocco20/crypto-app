"use client";

import Card from "@/components/UI/Card";
import PortfolioDetails from "./PortfolioDetails";
import MarketDetails from "./MarketDetails";
import { type PortfolioCoinWithMarketData } from "@/lib/types/PortfolioCoinWithMarketData";
import { useIsMobile } from "@/hooks/useIsMobile";
import MobileCoinWrapper from "./MobileCoinWrapper";
import DesktopCoinWrapper from "./DesktopCoinWrapper";

interface PortfolioCoinCardProps {
  coin: PortfolioCoinWithMarketData;
  selectedCurrency: string;
  formatter: Intl.NumberFormat;
  supported: boolean;
}

const PortfolioCoinCard = ({
  coin,
  selectedCurrency,
  formatter,
  supported,
}: PortfolioCoinCardProps) => {
  const isMobile = useIsMobile();

  const coinCard = (
    <Card className="p-px md:p-[2px] rounded-md md:flex text-start">
      <PortfolioDetails
        coin={coin}
        selectedCurrency={selectedCurrency}
        formatter={formatter}
        supported={supported}
      />
      <MarketDetails
        coin={coin}
        selectedCurrency={selectedCurrency}
        formatter={formatter}
        supported={supported}
      />
    </Card>
  );

  return isMobile ? (
    <MobileCoinWrapper coin={coin}>{coinCard}</MobileCoinWrapper>
  ) : (
    <DesktopCoinWrapper coin={coin}>{coinCard}</DesktopCoinWrapper>
  );
};

export default PortfolioCoinCard;
