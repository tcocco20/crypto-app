"use client";
import {
  addCoin,
  removeCoinById,
} from "@/lib/features/portfolio/portfolioSlice";
import {
  setSelectedCurrency,
  toggleDarkMode,
} from "@/lib/features/preferences/preferencesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

interface TestComponentProps {
  apiMessage?: string;
}

const TestComponent = ({ apiMessage }: TestComponentProps) => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );
  const darkMode = useAppSelector((state) => state.preferences.darkMode);
  const coins = useAppSelector((state) => state.portfolio.coins);
  const dispatch = useAppDispatch();

  const handleSetSelectedCurrency = () => {
    selectedCurrency === "EUR"
      ? dispatch(setSelectedCurrency("USD"))
      : dispatch(setSelectedCurrency("EUR"));
  };

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const handleDeleteCoin = () => {
    dispatch(removeCoinById("test"));
  };

  const handleAddCoin = () => {
    dispatch(
      addCoin({
        id: "test",
        amount: 1,
        dateAdded: new Date(),
        name: "Test Coin",
        symbol: "TST",
      })
    );
  };

  return (
    <div className="dark:text-white">
      <h2 className="text-2xl text-center my-12">Test Area</h2>
      {!!apiMessage && <p>{apiMessage}</p>}
      <div className="flex gap-5">
        <div className="flex flex-col gap-4">
          <p>Selected Currency:</p>
          <p>{selectedCurrency}</p>
          <button
            className="p-4 bg-blue-300 rounded-md text-sm"
            onClick={handleSetSelectedCurrency}
          >
            Change Selected Currency
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <p>Dark Mode:</p>
          <p>{darkMode ? "true" : "false"}</p>
          <button
            className="p-4 bg-blue-300 rounded-md text-sm"
            onClick={handleToggleDarkMode}
          >
            Toggle Dark Mode
          </button>
        </div>
        <div className="flex flex-col gap-4">
          <p>Coins Array:</p>
          <p>{!!coins.length && coins.map((coin) => coin.name)}</p>
          <button
            className="p-4 bg-blue-300 rounded-md text-sm"
            onClick={handleAddCoin}
          >
            Add to coins array
          </button>
          <button
            className="p-4 bg-blue-300 rounded-md text-sm"
            onClick={handleDeleteCoin}
          >
            delete from coins array
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestComponent;
