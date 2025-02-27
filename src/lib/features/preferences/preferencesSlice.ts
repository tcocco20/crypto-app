import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PreferencesState {
  selectedCurrency: string;
  darkMode: boolean;
  searchDrawerOpen: boolean;
}

const initialState: PreferencesState = {
  selectedCurrency: "USD",
  darkMode: true,
  searchDrawerOpen: false,
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
  },
});

export const { toggleDarkMode, setSelectedCurrency, toggleSearchDrawer } =
  preferencesSlice.actions;

export default preferencesSlice.reducer;
