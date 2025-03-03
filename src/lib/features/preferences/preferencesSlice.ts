import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PreferencesState {
  selectedCurrency: string;
  darkMode: boolean;
  searchDrawerOpen: boolean;
  supportedCurrencies: string[];
}

const initialState: PreferencesState = {
  selectedCurrency: "USD",
  darkMode: true,
  searchDrawerOpen: false,
  supportedCurrencies: [],
};

export const preferencesSlice = createSlice({
  name: "preferences",
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      document.documentElement.classList.toggle("dark");
      state.darkMode = !state.darkMode;
    },
    setSelectedCurrency: (state, action: PayloadAction<string>) => {
      state.selectedCurrency = action.payload;
    },
    toggleSearchDrawer: (state) => {
      state.searchDrawerOpen = !state.searchDrawerOpen;
    },
    setSupportedCurrencies(state, action: PayloadAction<string[]>) {
      state.supportedCurrencies = action.payload;
    },
  },
});

export const {
  toggleDarkMode,
  setSelectedCurrency,
  toggleSearchDrawer,
  setSupportedCurrencies,
} = preferencesSlice.actions;

export default preferencesSlice.reducer;
