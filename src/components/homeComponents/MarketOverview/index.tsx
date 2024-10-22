import { CoinData } from "@/actions/getCoinsList";
import React from "react";
import MobileCoinOverview from "./MobileCoinOverview";

interface MarketOverviewProps {
  coins: CoinData[];
}

const MarketOverview = ({ coins }: MarketOverviewProps) => {
  const renderCoins = () => {
    return coins.map((coin) => {
      return <MobileCoinOverview key={coin.id} />;
    });
  };
  return <div>{renderCoins()}</div>;
};

export default MarketOverview;
