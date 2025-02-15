import { configureStore } from "@reduxjs/toolkit";
import { portfolioSlice } from "./features/portfolio/portfolioSlice";
import { preferencesSlice } from "./features/preferences/preferencesSlice";
import { CoinListSlice } from "./features/coinList/coinListSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      portfolio: portfolioSlice.reducer,
      preferences: preferencesSlice.reducer,
      coinList: CoinListSlice.reducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
