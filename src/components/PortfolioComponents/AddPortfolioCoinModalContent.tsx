"use client";
import React, { useState } from "react";
import DesktopSearchComponent from "../UI/DesktopSearchComponent";
import FormControl from "../UI/FormControl";
import { useAppSelector } from "@/lib/hooks";
import SelectableWrapper from "../UI/SelectableWrapper";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { SearchResult } from "@/lib/types/SearchResult";
import CoinBrand from "../UI/CoinBrand";

const AddPortfolioCoinModalContent = () => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );
  const [selectedCoin, setSelectedCoin] = useState<SearchResult | null>(null);

  const today = new Date().toISOString().split("T")[0];
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const minDate = oneYearAgo.toISOString().split("T")[0];

  const handleItemSelect = (item?: SearchResult) => {
    setSelectedCoin(item!);
  };
  return (
    <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white dark:bg-gray-950 p-8 rounded-lg text-indigo-900 dark:text-white min-w-[50rem] lg:min-w-[60rem]">
      <DialogTitle className="flex justify-between items-center">
        <h2 className="text-xl">Select Coin</h2>
        <DialogClose asChild>
          <button className="p-px rounded-full border border-indigo-900 dark:border-white">
            <X size={12} />
          </button>
        </DialogClose>
      </DialogTitle>
      <DialogDescription className="mt-1 text-indigo-900/60 dark:text-gray-400 mb-4">
        Search for a coin to add to portfolio
      </DialogDescription>
      <div className="grid grid-cols-5 gap-4">
        {selectedCoin && (
          <CoinBrand
            className="col-span-2"
            name={selectedCoin.name}
            symbol={selectedCoin.symbol}
            imageUrl={selectedCoin.image}
          />
        )}
        <div className="space-y-4 col-span-3 col-start-3">
          <DesktopSearchComponent
            onItemSelect={handleItemSelect}
            searchBarClasses="w-full"
            clearOnSelect={false}
            wrapperClasses="h-auto"
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
            helperText="Enter the date you purchased the coin. You can only select a date up to a year ago."
          />
          <div className="flex items-center gap-2 text-center">
            <button className="flex-1 py-2 text-center w-full dark:bg-violet-900/50 rounded">
              Cancel
            </button>
            <SelectableWrapper selected widthClasses="flex-1">
              <button className="p-2 text-center w-full">Save Currency</button>
            </SelectableWrapper>
          </div>
        </div>
      </div>
    </DialogContent>
  );
};

export default AddPortfolioCoinModalContent;
