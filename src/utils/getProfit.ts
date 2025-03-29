import { type IndividualCoin } from "@/lib/types/IndividualCoin";
import { type PortfolioCoin } from "@/lib/types/PortfolioCoin";

export const getProfitDetails = (
  coin: IndividualCoin,
  portfolio: PortfolioCoin[]
) => {
  const coinInPortfolio = portfolio.find((item) => item.id === coin.id);
  //   const profit = coinInPortfolio ? coinInPortfolio.profit : 0;
  //   const totalInvestment = coinInPortfolio ? coinInPortfolio.totalInvestment : 0;
  //   const currentPrice = coin.current_price.usd || 0;

  //   const profitPercentage = totalInvestment
  //     ? ((currentPrice - totalInvestment) / totalInvestment) * 100
  //     : 0;

  return {
    // profit,
    // profitPercentage,
    // currentPrice,
    // totalInvestment,
    inPortfolio: !!coinInPortfolio,
  };
};
