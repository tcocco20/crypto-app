"use client";
import { SearchResult } from "@/lib/types/SearchResult";
import { ChevronLeft } from "lucide-react";
import React from "react";
import CoinBrand from "../UI/CoinBrand";
import { useAppSelector } from "@/lib/hooks";
import SelectableWrapper from "../UI/SelectableWrapper";

interface PortfolioCoinDetailsProps {
  selectedCoin: SearchResult | null;
  onGoBack: () => void;
}

const PortfolioCoinDetails = ({
  selectedCoin,
  onGoBack,
}: PortfolioCoinDetailsProps) => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );

  return (
    <div className="text-violet-900 bg-indigo-600/15 dark:text-white dark:bg-indigo-950 rounded-t-xl p-4 relative h-full">
      <button onClick={onGoBack} className="absolute top-4 left-4">
        <ChevronLeft size={24} />
      </button>
      <h2 className="text-lg text-center mb-4">Enter Coin Details</h2>
      {selectedCoin && (
        <div className="flex flex-col w-full gap-4">
          <CoinBrand
            name={selectedCoin.name}
            symbol={selectedCoin.symbol}
            imageUrl={selectedCoin.image}
            className="py-8"
          />
          <div>
            <label htmlFor="amount">Amount Purchased</label>
            <input
              id="amount"
              name="amount"
              type="number"
              step={0.01}
              className="w-full dark:bg-violet-950/50 rounded p-2 mb-2"
              placeholder="0.00"
            />
            <p className="text-xs dark:text-gray-400">
              Enter the amount you purchased in your currently selected
              currency. Selected Currency: {selectedCurrency}
            </p>
          </div>
          <div>
            <label htmlFor="amount">Date Purchased</label>
            <input
              id="amount"
              name="amount"
              type="number"
              step={0.01}
              className="w-full dark:bg-violet-950/50 rounded p-2 mb-2"
              placeholder="MM/DD/YYYY"
            />
            <p className="text-xs dark:text-gray-400">
              Enter the date you purchased the coin.
            </p>
          </div>
          <SelectableWrapper selected>
            <button className="p-2 text-center w-full">Save Currency</button>
          </SelectableWrapper>
          <button className="p-2 text-center w-full bg-violet-900/50 rounded">Cancel</button>
        </div>
      )}
    </div>
  );
};

export default PortfolioCoinDetails;
