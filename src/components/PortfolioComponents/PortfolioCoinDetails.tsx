"use client";
import { SearchResult } from "@/lib/types/SearchResult";
import { ChevronLeft } from "lucide-react";
import React, { type ChangeEvent, useState } from "react";
import CoinBrand from "../UI/CoinBrand";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import SelectableWrapper from "../UI/SelectableWrapper";
import FormControl from "../UI/FormControl";
import { getAmountPurchased } from "@/utils/getAmountPurchased";
import { formatPortfolioCoinDate } from "@/utils/formatPortfolioCoinDate";
import { MarketDataArray } from "@/utils/types/MarketDataArray";
import actions from "@/actions";
import { addCoinToPortfolio } from "@/lib/features/portfolio/portfolioSlice";

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
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");
  const [formSubmitAttempted, setFormSubmitAttempted] = useState(false);
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );
  const dispatch = useAppDispatch();
  const today = new Date().toISOString().split("T")[0];
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const minDate = oneYearAgo.toISOString().split("T")[0];

  const handleAddCoin = async () => {
    setFormSubmitAttempted(true);
    if (!selectedCoin || !date || invalidateAmount()) {
      return;
    }

    const datePurchased = formatPortfolioCoinDate(date);
    let priceAtPurchase: MarketDataArray = {};

    try {
      priceAtPurchase = await actions.getHistoricalDataForPortfolio(
        selectedCoin.id,
        datePurchased
      );
    } catch (error) {
      alert(`Error adding coin to portfolio: ${error}`);
    }

    const { id, name, symbol, image } = selectedCoin;
    const amountPurchased = getAmountPurchased(
      priceAtPurchase,
      +amount,
      selectedCurrency
    );

    dispatch(
      addCoinToPortfolio({
        id,
        name,
        symbol,
        image,
        datePurchased,
        priceAtPurchase,
        amountPurchased,
      })
    );

    onAddCoin();
  };

  const invalidateAmount = () => {
    return formSubmitAttempted && (!amount || +amount <= 0);
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
  };

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
            value={amount}
            onChange={handleAmountChange}
            type="number"
            step={0.01}
            min={0.01}
            placeholder="0.00"
            helperText={`Enter the amount you purchased in your currently selected currency. Selected Currency: ${selectedCurrency}`}
            hasError={invalidateAmount()}
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
            max={today}
            placeholder="MM/DD/YYYY"
            helperText="Enter the date you purchased the coin. You can only select a date
              up to a year ago."
            hasError={formSubmitAttempted && !date}
            errorText="Please enter the date you purchased the coin."
          />
          <div
            className={`flex-1 ${
              (!selectedCoin ||
                (formSubmitAttempted && (invalidateAmount() || !date))) &&
              "opacity-50 pointer-events-none"
            }`}
          >
            <SelectableWrapper selected>
              <button
                className="p-2 text-center w-full"
                onClick={handleAddCoin}
              >
                Save Currency
              </button>
            </SelectableWrapper>
          </div>
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
