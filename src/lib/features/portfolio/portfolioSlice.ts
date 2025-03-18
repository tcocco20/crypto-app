import { PortfolioCoin } from "@/lib/types/PortfolioCoin";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const loadPortfolioFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const coins = localStorage.getItem("portfolio");
    if (coins) {
      return JSON.parse(coins) as PortfolioCoin[];
    }
  }
  return [] as PortfolioCoin[];
};

export interface PortfolioState {
  coins: PortfolioCoin[];
}

const initialState: PortfolioState = {
  coins: loadPortfolioFromLocalStorage(),
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addCoinToPortfolio: (state, action: PayloadAction<PortfolioCoin>) => {
      state.coins.push(action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("portfolio", JSON.stringify(state.coins));
      }
    },
    removeCoinById: (state, action: PayloadAction<string>) => {
      state.coins = state.coins.filter((coin) => coin.id !== action.payload);
      if (typeof window !== "undefined") {
        localStorage.setItem("portfolio", JSON.stringify(state.coins));
      }
    },
  },
});

export const { addCoinToPortfolio, removeCoinById } = portfolioSlice.actions;

export default portfolioSlice.reducer;
