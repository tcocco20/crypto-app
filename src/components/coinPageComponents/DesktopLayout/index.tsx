"use client";

import CoinBrand from "@/components/UI/CoinBrand";
import React from "react";
import CoinLink from "../CoinLink";
import InvestmentDetails from "../InvestmentDetails";
import MarketData from "../MarketData";
import CoinDescription from "../CoinDescription";
import ExtraLinks from "../ExtraLinks";
import { type IndividualCoin } from "@/lib/types/IndividualCoin";
import { useAppSelector } from "@/lib/hooks";

interface DesktopLayoutProps {
  coin: IndividualCoin;
}

const DesktopLayout = ({ coin }: DesktopLayoutProps) => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  ).toLowerCase();
  
  return (
    <section className="hidden md:grid md:grid-cols-7 md:gap-1 lg:gap-2 xl:gap-4 dark:text-white">
      <div className="md:col-span-2 flex flex-col gap-4">
        <CoinBrand
          name={coin.name}
          symbol={coin.symbol}
          imageUrl={coin.image.large}
          className="flex-1"
        />
        <CoinLink url={coin.links.homepage} />
      </div>
      <InvestmentDetails coin={coin} selectedCurrency={selectedCurrency} />
      <MarketData coin={coin} selectedCurrency={selectedCurrency} />
      <CoinDescription description={coin.description} />
      <ExtraLinks
        homepage={coin.links.homepage}
        blockchainSite={coin.links.blockchain_site[0]}
        blockchainSite2={coin.links.blockchain_site[1]}
      />
    </section>
  );
};

export default DesktopLayout;
