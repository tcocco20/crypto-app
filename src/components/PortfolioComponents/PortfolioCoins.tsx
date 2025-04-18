"use client";

import { useAppSelector } from "@/lib/hooks";
import PortfolioCoinCard from "./PortfolioCoinCard";
import NoCoins from "./NoCoins";
import { useEffect, useState } from "react";
import { type PortfolioCoinWithMarketData } from "@/lib/types/PortfolioCoinWithMarketData";
import actions from "@/actions";
import { getCurrentValueOfInitialInvestment } from "@/utils/getCurrentValueOfInitialInvestment";
import { getCurrencyFormatter } from "@/utils/formatCurrency";

const PortfolioCoins = () => {
  const [portfolioCoins, setPortfolioCoins] = useState<
    PortfolioCoinWithMarketData[]
  >([]);
  const [componentMounted, setComponentMounted] = useState(false);
  const coins = useAppSelector((state) => state.portfolio.coins);
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );
  const { formatter, supported } = getCurrencyFormatter(selectedCurrency);

  useEffect(() => {
    const fetchCoins = async () => {
      const coinMarketData = await actions.getSimpleCoinPriceData(
        coins.map((coin) => coin.coinId),
        selectedCurrency
      );

      const portfolioCoinsWithMarketData: PortfolioCoinWithMarketData[] =
        coins.map((coin) => {
          const marketData = coinMarketData[coin.coinId];
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

    if (coins.length > 0) fetchCoins();
    fetchCoins();
  }, [coins, selectedCurrency]);

  useEffect(() => {
    setComponentMounted(true);
  }, []);

  if (!componentMounted) {
    return null;
  }

  if (coins.length === 0) {
    return <NoCoins />;
  }

  const generateCoinCards = () => {
    return portfolioCoins.map((coin) => (
      <PortfolioCoinCard
        formatter={formatter}
        supported={supported}
        key={coin.id}
        coin={coin}
        selectedCurrency={selectedCurrency}
      />
    ));
  };

  return <>{generateCoinCards()}</>;
};

export default PortfolioCoins;
