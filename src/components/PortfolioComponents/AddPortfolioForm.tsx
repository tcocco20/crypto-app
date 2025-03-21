"use client";
import React, { useState } from "react";
import CoinBrand from "../UI/CoinBrand";
import DesktopSearchComponent from "../UI/DesktopSearchComponent";
import FormControl from "../UI/FormControl";
import { DialogClose } from "@radix-ui/react-dialog";
import SelectableWrapper from "../UI/SelectableWrapper";
import { useAppSelector } from "@/lib/hooks";
import { type SearchResult } from "@/lib/types/SearchResult";

const AddPortfolioForm = () => {
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
          wrapperClasses="!h-auto"
        />
        <FormControl
          label="Amount Purchased"
          id="amount"
          name="amount"
          type="number"
          step={0.01}
          placeholder="0.00"
          disabled={!selectedCoin}
          helperText={`Enter the amount you purchased in your currently selected currency. Selected Currency: ${selectedCurrency}`}
        />
        <FormControl
          label="Date Purchased"
          id="date"
          name="date"
          type="date"
          min={minDate}
          max={today}
          disabled={!selectedCoin}
          placeholder="MM/DD/YYYY"
          helperText="Enter the date you purchased the coin. You can only select a date up to a year ago."
        />
        <div className="flex items-center gap-2 text-center">
          <DialogClose asChild>
            <button className="flex-1 py-2 text-center w-full dark:bg-violet-900/50 rounded">
              Cancel
            </button>
          </DialogClose>
          <SelectableWrapper selected widthClasses="flex-1">
            <DialogClose asChild>
              <button className="p-2 text-center w-full">Save Currency</button>
            </DialogClose>
          </SelectableWrapper>
        </div>
      </div>
    </div>
  );
};

export default AddPortfolioForm;
