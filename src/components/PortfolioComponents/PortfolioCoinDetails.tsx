"use client";
import { SearchResult } from "@/lib/types/SearchResult";
import { ChevronLeft } from "lucide-react";
import React from "react";
import CoinBrand from "../UI/CoinBrand";
import { useAppSelector } from "@/lib/hooks";
import SelectableWrapper from "../UI/SelectableWrapper";
import FormControl from "../UI/FormControl";

interface PortfolioCoinDetailsProps {
  selectedCoin: SearchResult | null;
  onGoBack: () => void;
  onAddCoin: () => void;
  onCancelAddCoin: () => void;
}

const PortfolioCoinDetails = ({
  selectedCoin,
  onGoBack,
  onAddCoin,
  onCancelAddCoin,
}: PortfolioCoinDetailsProps) => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );
  const today = new Date().toISOString().split("T")[0];
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const minDate = oneYearAgo.toISOString().split("T")[0];

  return (
    <div className="text-violet-900 bg-indigo-600/15 dark:text-white dark:bg-indigo-950 rounded-t-xl p-4 relative h-full">
      <button onClick={onGoBack} className="absolute top-4 left-4">
        <ChevronLeft size={24} />
      </button>
      <h2 className="text-lg text-center mb-4">Enter Coin Details</h2>
      {selectedCoin && (
        <div className="flex flex-col w-full h-full gap-4 overflow-y-scroll pb-24">
          <CoinBrand
            name={selectedCoin.name}
            symbol={selectedCoin.symbol}
            imageUrl={selectedCoin.image}
            className="py-8"
          />
          <FormControl
            label="Amount Purchased"
            id="amount"
            name="amount"
            type="number"
            step={0.01}
            placeholder="0.00"
            helperText={`Enter the amount you purchased in your currently selected currency. Selected Currency: ${selectedCurrency}`}
          />
          <FormControl
            label="Date Purchased"
            id="amount"
            name="amount"
            type="date"
            min={minDate}
            max={today}
            placeholder="MM/DD/YYYY"
            helperText="Enter the date you purchased the coin. You can only select a date
              up to a year ago."
          />
          <SelectableWrapper selected>
            <button className="p-2 text-center w-full" onClick={onAddCoin}>
              Save Currency
            </button>
          </SelectableWrapper>
          <button
            className="p-2 text-center w-full bg-white dark:bg-violet-900/50 rounded"
            onClick={onCancelAddCoin}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default PortfolioCoinDetails;
