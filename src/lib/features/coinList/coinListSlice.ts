import { type ListCoin } from "@/lib/types/ListCoin";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface CoinListState {
  coins: ListCoin[];
  pagesLoaded: number;
}

const initialState: CoinListState = {
  coins: [],
  pagesLoaded: 0,
};

export const CoinListSlice = createSlice({
  name: "coinData",
  initialState,
  reducers: {
    setCoins: (state, action: PayloadAction<ListCoin[]>) => {
      state.coins = action.payload;
      state.pagesLoaded = 1;
    },
    loadCoins: (state, action: PayloadAction<ListCoin[]>) => {
      state.coins = [...state.coins, ...action.payload];
      state.pagesLoaded += 1;
    },
  },
});

export const { loadCoins, setCoins } = CoinListSlice.actions;

export default CoinListSlice.reducer;
