"use client";

import { useAppSelector } from "@/lib/hooks";
import PortfolioCoinCard from "./PortfolioCoinCard";
import NoCoins from "./NoCoins";

const PortfolioCoins = () => {
  const coins = useAppSelector((state) => state.portfolio.coins);

  if (coins.length === 0) {
    return <NoCoins />;
  }

  const generateCoinCards = () => {
    return coins.map((coin) => <PortfolioCoinCard key={coin.id} coin={coin} />);
  };

  return <>{generateCoinCards()}</>;
};

export default PortfolioCoins;
