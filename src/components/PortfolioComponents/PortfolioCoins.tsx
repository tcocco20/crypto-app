"use client";

import { useAppSelector } from "@/lib/hooks";
import PortfolioCoinCard from "./PortfolioCoinCard";
import NoCoins from "./NoCoins";
import { useEffect, useState } from "react";
import { type PortfolioCoinWithMarketData } from "@/lib/types/PortfolioCoinWithMarketData";
import actions from "@/actions";
import { getCurrentValueOfInitialInvestment } from "@/utils/getCurrentValueOfInitialInvestment";
import { PortfolioCoin } from "@/lib/types/PortfolioCoin";

const dummyCoins = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    image: "missing",
    amountPurchased: { usd: 5000 },
    datePurchased: new Date(),
    priceAtPurchase: { usd: 10000 },
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    image: "missing",
    amountPurchased: { usd: 4000 },
    datePurchased: new Date(),
    priceAtPurchase: { usd: 500 },
  },
] as PortfolioCoin[];

const PortfolioCoins = () => {
  const [portfolioCoins, setPortfolioCoins] = useState<
    PortfolioCoinWithMarketData[]
  >([]);
  const coins = useAppSelector((state) => state.portfolio.coins);
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );

  useEffect(() => {
    const fetchCoins = async () => {
      const coinMarketData = await actions.getSimpleCoinPriceData(
        dummyCoins.map((coin) => coin.id),
        selectedCurrency
      );

      const portfolioCoinsWithMarketData: PortfolioCoinWithMarketData[] =
        dummyCoins.map((coin) => {
          const marketData = coinMarketData[coin.id];
          const currentValue = getCurrentValueOfInitialInvestment(
            coin.amountPurchased[selectedCurrency],
            coin.priceAtPurchase[selectedCurrency],
            marketData.price
          );

          return {
            ...coin,
            ...marketData,
            currentValue,
          };
        });

      setPortfolioCoins(portfolioCoinsWithMarketData);
    };

    // if (coins.length > 0) fetchCoins();
    fetchCoins();
  }, [coins, selectedCurrency]);

  if (dummyCoins.length === 0) {
    return <NoCoins />;
  }

  const generateCoinCards = () => {
    return portfolioCoins.map((coin) => (
      <PortfolioCoinCard
        key={coin.id}
        coin={coin}
        selectedCurrency={selectedCurrency}
      />
    ));
  };

  return <>{generateCoinCards()}</>;
};

export default PortfolioCoins;
