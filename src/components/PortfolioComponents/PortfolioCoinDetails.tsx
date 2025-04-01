"use client";
import { SearchResult } from "@/lib/types/SearchResult";
import { ChevronLeft } from "lucide-react";
import React, { type ChangeEvent } from "react";
import CoinBrand from "../UI/CoinBrand";
import SelectableWrapper from "../UI/SelectableWrapper";
import FormControl from "../UI/FormControl";
import { type PortfolioCoinWithMarketData } from "@/lib/types/PortfolioCoinWithMarketData";
import { usePortfolioSubmit } from "@/hooks/usePortfolioSubmit";

interface PortfolioCoinDetailsProps {
  selectedCoin: SearchResult | null;
  coinToEdit?: PortfolioCoinWithMarketData;
  onGoBack: () => void;
  onAddCoin: () => void;
  onCancelAddCoin: () => void;
}

const PortfolioCoinDetails = ({
  selectedCoin,
  coinToEdit,
  onGoBack,
  onAddCoin,
  onCancelAddCoin,
}: PortfolioCoinDetailsProps) => {
  const {
    amount,
    setAmount,
    date,
    setDate,
    formSubmitAttempted,
    handleAddCoin,
    handleDeleteCoin,
    minDate,
    maxDate,
    amountInvalid,
    dateInvalid,
    selectedCurrency,
  } = usePortfolioSubmit(coinToEdit, onAddCoin);

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

  const addCoinHandler = () => {
    if (selectedCoin) {
      handleAddCoin(selectedCoin);
    } else {
      handleAddCoin();
    }
  };

  const generateCoinBranding = () => {
    if (selectedCoin) {
      return (
        <CoinBrand
          className="py-8"
          name={selectedCoin.name}
          symbol={selectedCoin.symbol}
          imageUrl={selectedCoin.image}
        />
      );
    } else if (coinToEdit) {
      return (
        <CoinBrand
          className="py-8"
          name={coinToEdit.name}
          symbol={coinToEdit.symbol}
          imageUrl={coinToEdit.image}
        />
      );
    }
    return null;
  };

  const cancelButton = (
    <button
      className="p-2 text-center w-full bg-white dark:bg-violet-900/50 rounded"
      onClick={onCancelAddCoin}
    >
      Cancel
    </button>
  );

  const deleteButton = (
    <button
      className="p-2 text-center w-full bg-red-700 text-white rounded"
      onClick={handleDeleteCoin}
    >
      Delete Coin
    </button>
  );

  return (
    <div className="text-violet-900 bg-indigo-600/15 dark:text-white dark:bg-indigo-950 rounded-t-xl p-4 relative h-full">
      <button onClick={onGoBack} className="absolute top-4 left-4">
        <ChevronLeft size={24} />
      </button>
      <h2 className="text-lg text-center mb-4">Enter Coin Details</h2>
      {(selectedCoin || coinToEdit) && (
        <div className="flex flex-col w-full h-full gap-4 overflow-y-scroll pb-24">
          {generateCoinBranding()}
          <FormControl
            label="Amount Purchased"
            id="amount"
            name="amount"
            value={amount}
            onChange={handleAmountChange}
            type="number"
            step={0.01}
            min={0.01}
            placeholder="0.00"
            helperText={`Enter the amount you purchased in your currently selected currency. Selected Currency: ${selectedCurrency}`}
            hasError={formSubmitAttempted && amountInvalid}
            errorText="Please enter a valid amount."
          />
          <FormControl
            label="Date Purchased"
            id="date"
            name="date"
            value={date}
            onChange={handleDateChange}
            type="date"
            min={minDate}
            max={maxDate}
            placeholder="MM/DD/YYYY"
            helperText="Enter the date you purchased the coin. You can only select a date
              up to a year ago."
            hasError={formSubmitAttempted && dateInvalid}
            errorText="Please enter the date you purchased the coin."
          />
          <div
            className={`flex-1 ${
              ((!selectedCoin && !coinToEdit) ||
                amountInvalid ||
                dateInvalid) &&
              "opacity-50 pointer-events-none"
            }`}
          >
            <SelectableWrapper selected>
              <button
                className="p-2 text-center w-full"
                onClick={addCoinHandler}
              >
                Save Currency
              </button>
            </SelectableWrapper>
          </div>
          {coinToEdit ? deleteButton : cancelButton}
        </div>
      )}
    </div>
  );
};

export default PortfolioCoinDetails;
