import { createSlice, PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store";

export interface PortfolioState {
  selectedCurrency: string;
  darkMode: boolean;
}

const initialState: PortfolioState = {
  selectedCurrency: "USD",
  darkMode: true,
};

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    setSelectedCurrency: (state, action: PayloadAction<string>) => {
      state.selectedCurrency = action.payload;
    },
  },
});

export const { toggleDarkMode, setSelectedCurrency } = preferencesSlice.actions;

// // Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default preferencesSlice.reducer;
