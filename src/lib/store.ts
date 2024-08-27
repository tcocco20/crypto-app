import { configureStore } from "@reduxjs/toolkit";
import { portfolioSlice } from "./features/portfolio/portfolioSlice";
import { preferencesSlice } from "./features/preferences/preferencesSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      portfolio: portfolioSlice.reducer,
      preferences: preferencesSlice.reducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
