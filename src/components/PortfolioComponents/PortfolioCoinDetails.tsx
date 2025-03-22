"use client";
import { SearchResult } from "@/lib/types/SearchResult";
import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
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
  const [amount, setAmount] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  ).toLowerCase();
  const dispatch = useAppDispatch();
  const today = new Date().toISOString().split("T")[0];
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const minDate = oneYearAgo.toISOString().split("T")[0];

  const handleAddCoin = async () => {
    if (!selectedCoin || !amount || !date) {
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
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            step={0.01}
            placeholder="0.00"
            helperText={`Enter the amount you purchased in your currently selected currency. Selected Currency: ${selectedCurrency}`}
          />
          <FormControl
            label="Date Purchased"
            id="date"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            type="date"
            min={minDate}
            max={today}
            placeholder="MM/DD/YYYY"
            helperText="Enter the date you purchased the coin. You can only select a date
              up to a year ago."
          />
          <SelectableWrapper selected>
            <button className="p-2 text-center w-full" onClick={handleAddCoin}>
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
