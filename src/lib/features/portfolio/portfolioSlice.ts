import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store";

export interface PortfolioState {
  coins: any[];
}

const initialState: PortfolioState = {
  coins: [],
};

export const portfolioSlice = createSlice({
  name: "portfolio",
  initialState,
  reducers: {
    addCoin: (state, action: PayloadAction<any>) => {
      state.coins.push(action.payload);
    },
  },
});

export const { addCoin } = portfolioSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default portfolioSlice.reducer;
