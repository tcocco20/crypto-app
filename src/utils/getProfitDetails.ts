import { type IndividualCoin } from "@/lib/types/IndividualCoin";
import { type PortfolioCoin } from "@/lib/types/PortfolioCoin";
import { getCurrentValueOfInitialInvestment } from "./getCurrentValueOfInitialInvestment";

export const getProfitDetails = (
  coin: IndividualCoin,
  portfolio: PortfolioCoin[],
  selectedCurrency: string
) => {
  const inPortfolio = portfolio.some((item) => item.coinId === coin.id);
  if (!inPortfolio) {
    return {
      inPortfolio,
    };
  }
  const portfolioCoins = portfolio.filter((item) => item.coinId === coin.id);
  const currentPrice = coin.current_price[selectedCurrency];

  const currentValues = portfolioCoins.map((portfolioCoin) =>
    getCurrentValueOfInitialInvestment(
      portfolioCoin.amountPurchased[selectedCurrency],
      portfolioCoin.priceAtPurchase[selectedCurrency],
      currentPrice,
    )
  );

  const totalProfit = currentValues.reduce(
    (prev, cur, index) =>
      prev + (cur - portfolioCoins[index].amountPurchased[selectedCurrency]),
    0
  );
  const profitUp = totalProfit > 0;
  const profit = Math.abs(totalProfit);

  return {
    profit,
    profitUp,
    inPortfolio,
  };
};
