export const getCurrentValueOfInitialInvestment = (
  initialInvestment: number,
  initialPrice: number,
  currentPrice: number
) => {
  return +((initialInvestment / initialPrice) * currentPrice).toFixed(2);
};
