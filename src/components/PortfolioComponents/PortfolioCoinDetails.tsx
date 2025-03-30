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
import {
  addCoinToPortfolio,
  editPortfolioCoin,
  removeCoinById,
} from "@/lib/features/portfolio/portfolioSlice";
import { type PortfolioCoinWithMarketData } from "@/lib/types/PortfolioCoinWithMarketData";
import { getInputDateFromPortfolioCoin } from "@/utils/getInputDateFromPortfolioCoin";
import { getDateForApi } from "@/utils/getDateForApi";
import { toast } from "react-toastify";

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
  const today = new Date().toISOString().split("T")[0];
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const minDate = oneYearAgo.toISOString().split("T")[0];
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );

  const [amount, setAmount] = useState(
    coinToEdit?.amountPurchased[selectedCurrency] || ""
  );
  const [date, setDate] = useState(
    coinToEdit && new Date(coinToEdit.datePurchased) > new Date(minDate)
      ? getInputDateFromPortfolioCoin(coinToEdit.datePurchased)
      : ""
  );
  const [formSubmitAttempted, setFormSubmitAttempted] = useState(false);

  const dispatch = useAppDispatch();

  const handleAddCoin = async () => {
    setFormSubmitAttempted(true);
    if ((!selectedCoin && !coinToEdit) || !date || invalidateAmount()) {
      return;
    }

    const datePurchased = formatPortfolioCoinDate(date);
    const apiDate = getDateForApi(date);
    let priceAtPurchase: MarketDataArray = {};

    try {
      if (selectedCoin) {
        priceAtPurchase = await actions.getHistoricalDataForPortfolio(
          selectedCoin.id,
          apiDate
        );
      } else {
        priceAtPurchase = await actions.getHistoricalDataForPortfolio(
          coinToEdit!.coinId,
          apiDate
        );
      }
    } catch (error) {
      toast.error("Error fetching historical data. Please try again later.");
      return;
    }

    const amountPurchased = getAmountPurchased(
      priceAtPurchase,
      +amount,
      selectedCurrency
    );

    if (selectedCoin && !coinToEdit) {
      const { id, name, symbol, image } = selectedCoin;

      dispatch(
        addCoinToPortfolio({
          id: Math.random().toString(36).substring(2, 9),
          coinId: id,
          name,
          symbol,
          image,
          datePurchased,
          priceAtPurchase,
          amountPurchased,
        })
      );
    } else if (selectedCoin && coinToEdit) {
      const { id, name, symbol, image } = selectedCoin;

      dispatch(
        editPortfolioCoin({
          id: coinToEdit.id,
          coinId: id,
          name,
          symbol,
          image,
          datePurchased,
          priceAtPurchase,
          amountPurchased,
        })
      );
    } else {
      dispatch(
        editPortfolioCoin({
          id: coinToEdit!.id,
          coinId: coinToEdit!.coinId,
          name: coinToEdit!.name,
          symbol: coinToEdit!.symbol,
          image: coinToEdit!.image,
          datePurchased,
          priceAtPurchase,
          amountPurchased,
        })
      );
    }

    onAddCoin();
  };

  const handleDeleteCoin = () => {
    dispatch(removeCoinById(coinToEdit!.id));
    onCancelAddCoin();
  };

  const invalidateAmount = () => {
    return !amount || +amount <= 0;
  };

  const invalidateDate = () => {
    const formattedDate = new Date(formatPortfolioCoinDate(date));
    return (
      !date || formattedDate < new Date(minDate) || formattedDate > new Date()
    );
  };

  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value);
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
            hasError={formSubmitAttempted && invalidateAmount()}
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
            hasError={formSubmitAttempted && invalidateDate()}
            errorText="Please enter the date you purchased the coin."
          />
          <div
            className={`flex-1 ${
              ((!selectedCoin && !coinToEdit) ||
                invalidateAmount() ||
                invalidateDate()) &&
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
          {coinToEdit ? deleteButton : cancelButton}
        </div>
      )}
    </div>
  );
};

export default PortfolioCoinDetails;
