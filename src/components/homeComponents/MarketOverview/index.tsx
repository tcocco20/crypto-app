"use client";
import { CoinData } from "@/actions/getCoinsList";
import React from "react";
import MobileCoinOverview from "./MobileCoinOverview";

interface MarketOverviewProps {
  coins: CoinData[];
}

const MarketOverview = ({ coins }: MarketOverviewProps) => {
  const renderCoins = () => {
    return coins.map((coin) => {
      return <MobileCoinOverview key={coin.id} coin={coin} />;
    });
  };
  return (
    <div className="text-white flex flex-col gap-1 pb-16 mb-2">{renderCoins()}</div>
  );
};

export default MarketOverview;
