"use client";
import React from "react";
import DesktopSearchComponent from "../UI/DesktopSearchComponent";
import FormControl from "../UI/FormControl";
import { useAppSelector } from "@/lib/hooks";

const AddPortfolioCoinModalContent = () => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );

  const today = new Date().toISOString().split("T")[0];
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const minDate = oneYearAgo.toISOString().split("T")[0];

  const handleItemSelect = () => {
    // Do something
  };
  return (
    <div className="space-y-4">
      <DesktopSearchComponent
        onItemSelect={handleItemSelect}
        searchBarClasses="w-full"
        clearOnSelect={false}
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
    </div>
  );
};

export default AddPortfolioCoinModalContent;
