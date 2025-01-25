import { IndividualCoin } from "@/lib/types/IndividualCoin";
import React from "react";
import MobileCoinDescription from "../MobileCoinDescription";
import CoinBrand from "@/components/UI/CoinBrand";

interface MobileLayoutProps {
  coin: IndividualCoin;
}

const MobileLayout = ({ coin }: MobileLayoutProps) => {
  return (
    <div className="items-center md:hidden py-4">
      <CoinBrand
        name={coin.name}
        symbol={coin.symbol}
        imageUrl={coin.image.small}
      />
      <MobileCoinDescription coin={coin} />
    </div>
  );
};

export default MobileLayout;
