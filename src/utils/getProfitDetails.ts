import { type IndividualCoin } from "@/lib/types/IndividualCoin";
import { type PortfolioCoin } from "@/lib/types/PortfolioCoin";
import { getCurrentValueOfInitialInvestment } from "./getCurrentValueOfInitialInvestment";

export const getProfitDetails = (
  coin: IndividualCoin,
  portfolio: PortfolioCoin[],
  selectedCurrency: string
) => {
  const inPortfolio = portfolio.some((item) => item.id === coin.id);
  if (!inPortfolio) {
    return {
      inPortfolio,
    };
  }
  const portfolioCoin = portfolio.find(
    (item) => item.id === coin.id
  ) as PortfolioCoin;

  const currentValue = getCurrentValueOfInitialInvestment(
    portfolioCoin.amountPurchased[selectedCurrency],
    portfolioCoin.priceAtPurchase[selectedCurrency],
    coin.current_price[selectedCurrency]
  );

  const profit = Math.abs(
    currentValue - portfolioCoin.amountPurchased[selectedCurrency]
  );
  const profitUp =
    currentValue > portfolioCoin.amountPurchased[selectedCurrency];

  return {
    profit,
    profitUp,
    inPortfolio,
  };
};
