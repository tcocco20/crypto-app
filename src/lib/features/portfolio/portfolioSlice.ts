import { UserCoin } from "@/lib/types/UserCoin";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PortfolioState {
  coins: UserCoin[];
}

const initialState: PortfolioState = {
  coins: [],
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addCoin: (state, action: PayloadAction<UserCoin>) => {
      state.coins.push(action.payload);
    },
    removeCoinById: (state, action: PayloadAction<string>) => {
      state.coins = state.coins.filter((coin) => coin.id !== action.payload);
    },
  },
});

export const { addCoin, removeCoinById } = portfolioSlice.actions;

export default portfolioSlice.reducer;
