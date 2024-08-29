import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PreferencesState {
  selectedCurrency: string;
  darkMode: boolean;
}

const initialState: PreferencesState = {
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

export default preferencesSlice.reducer;
