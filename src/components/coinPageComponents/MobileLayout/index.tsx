"use client";

import { IndividualCoin } from "@/lib/types/IndividualCoin";
import React from "react";
import CoinBrand from "@/components/UI/CoinBrand";
import InvestmentDetails from "../InvestmentDetails";
import CoinDescription from "../CoinDescription";
import Card from "@/components/UI/Card";
import MarketData from "../MarketData";
import ExtraLinks from "../ExtraLinks";
import { useAppSelector } from "@/lib/hooks";

interface MobileLayoutProps {
  coin: IndividualCoin;
}

const MobileLayout = ({ coin }: MobileLayoutProps) => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  ).toLowerCase();

  return (
    <div className="flex flex-col gap-2 md:hidden pt-8 pb-20 dark:text-white">
      <CoinBrand
        name={coin.name}
        symbol={coin.symbol}
        imageUrl={coin.image.small}
        className="py-4"
      />
      <InvestmentDetails coin={coin} selectedCurrency={selectedCurrency} />
      <Card className="py-4 px-4">
        <CoinDescription description={coin.description} />
      </Card>
      <MarketData coin={coin} selectedCurrency={selectedCurrency} />
      <ExtraLinks
        homepage={coin.links.homepage}
        blockchainSite={coin.links.blockchain_site[0]}
        blockchainSite2={coin.links.blockchain_site[1]}
      />
    </div>
  );
};

export default MobileLayout;
