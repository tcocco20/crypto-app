import CoinBrand from "@/components/UI/CoinBrand";
import React from "react";
import CoinLink from "../CoinLink";
import InvestmentDetails from "../InvestmentDetails";
import MarketData from "../MarketData";
import CoinDescription from "../CoinDescription";
import ExtraLinks from "../ExtraLinks";
import { type IndividualCoin } from "@/lib/types/IndividualCoin";

interface DesktopLayoutProps {
  coin: IndividualCoin;
}

const DesktopLayout = ({ coin }: DesktopLayoutProps) => {
  return (
    <section className="hidden md:grid md:grid-cols-7 gap-4 dark:text-white pt-8 pb-20">
      <div className="md:col-span-2 flex flex-col gap-4">
        <CoinBrand
          name={coin.name}
          symbol={coin.symbol}
          imageUrl={coin.image.large}
          className="flex-1"
        />
        <CoinLink url={coin.links.homepage} />
      </div>
      <InvestmentDetails coin={coin} selectedCurrency="usd" />
      <MarketData coin={coin} />
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
