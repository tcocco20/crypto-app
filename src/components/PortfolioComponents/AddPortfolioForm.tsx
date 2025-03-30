"use client";
import React, { type ChangeEvent, type MouseEvent, useState } from "react";
import CoinBrand from "../UI/CoinBrand";
import DesktopSearchComponent from "../UI/DesktopSearchComponent";
import FormControl from "../UI/FormControl";
import { DialogClose } from "@radix-ui/react-dialog";
import SelectableWrapper from "../UI/SelectableWrapper";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { type SearchResult } from "@/lib/types/SearchResult";
import {
  addCoinToPortfolio,
  editPortfolioCoin,
  removeCoinById,
} from "@/lib/features/portfolio/portfolioSlice";
import { formatPortfolioCoinDate } from "@/utils/formatPortfolioCoinDate";
import { getAmountPurchased } from "@/utils/getAmountPurchased";
import actions from "@/actions";
import { MarketDataArray } from "@/utils/types/MarketDataArray";
import { PortfolioCoinWithMarketData } from "@/lib/types/PortfolioCoinWithMarketData";
import { getInputDateFromPortfolioCoin } from "@/utils/getInputDateFromPortfolioCoin";
import { getDateForApi } from "@/utils/getDateForApi";

interface AddPortfolioFormProps {
  coinToEdit?: PortfolioCoinWithMarketData;
}

const AddPortfolioForm = ({ coinToEdit }: AddPortfolioFormProps) => {
  const today = new Date().toISOString().split("T")[0];
  const oneYearAgo = new Date(today);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const minDate = oneYearAgo.toISOString().split("T")[0];
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );

  const dispatch = useAppDispatch();
  const [selectedCoin, setSelectedCoin] = useState<SearchResult | null>(null);
  const [amount, setAmount] = useState(
    coinToEdit?.amountPurchased[selectedCurrency] || ""
  );
  const [formSubmitAttempted, setFormSubmitAttempted] = useState(false);
  const [date, setDate] = useState(
    coinToEdit && new Date(coinToEdit.datePurchased) > new Date(minDate)
      ? getInputDateFromPortfolioCoin(coinToEdit.datePurchased)
      : ""
  );

  const handleItemSelect = (item?: SearchResult) => {
    setSelectedCoin(item!);
  };

  const handleAddCoin = async (event: MouseEvent<HTMLButtonElement>) => {
    setFormSubmitAttempted(true);
    if (!selectedCoin || !date || invalidateAmount()) {
      event.preventDefault();
      return;
    }

    const datePurchased = formatPortfolioCoinDate(date);
    const apiDate = getDateForApi(date);
    let priceAtPurchase: MarketDataArray = {};

    try {
      priceAtPurchase = await actions.getHistoricalDataForPortfolio(
        selectedCoin.id,
        apiDate
      );
    } catch (error) {
      alert(`Error adding coin to portfolio: ${error}`);
      return;
    }

    const { id, name, symbol, image } = selectedCoin;
    const amountPurchased = getAmountPurchased(
      priceAtPurchase,
      +amount,
      selectedCurrency
    );

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
  };

  const handleEditCoin = async (event: MouseEvent<HTMLButtonElement>) => {
    setFormSubmitAttempted(true);
    if (!date || invalidateAmount()) {
      event.preventDefault();
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
      alert(`Error adding coin to portfolio: ${error}`);
      return;
    }

    const amountPurchased = getAmountPurchased(
      priceAtPurchase,
      +amount,
      selectedCurrency
    );

    if (selectedCoin) {
      const { id, name, symbol, image } = selectedCoin;

      dispatch(
        editPortfolioCoin({
          id: coinToEdit!.id,
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
  };

  const handleDeleteCoin = () => {
    dispatch(removeCoinById(coinToEdit!.id));
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

  const cancelButton = (
    <DialogClose asChild>
      <button className="flex-1 py-2 text-center w-full bg-indigo-600/15 dark:bg-violet-900/50 rounded disabled:opacity-50">
        Cancel
      </button>
    </DialogClose>
  );

  const deleteButton = (
    <DialogClose asChild>
      <button
        className="flex-1 py-2 text-center w-full bg-red-700 text-white rounded disabled:opacity-50"
        onClick={handleDeleteCoin}
      >
        Delete Coin
      </button>
    </DialogClose>
  );

  const generateCoinBranding = () => {
    if (selectedCoin) {
      return (
        <CoinBrand
          className="col-span-2"
          name={selectedCoin.name}
          symbol={selectedCoin.symbol}
          imageUrl={selectedCoin.image}
        />
      );
    } else if (coinToEdit) {
      return (
        <CoinBrand
          className="col-span-2"
          name={coinToEdit.name}
          symbol={coinToEdit.symbol}
          imageUrl={coinToEdit.image}
        />
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      {generateCoinBranding()}
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
          value={amount}
          onChange={handleAmountChange}
          name="amount"
          type="number"
          step={0.01}
          placeholder="0.00"
          disabled={!selectedCoin && !coinToEdit}
          helperText={`Enter the amount you purchased in your currently selected currency. Selected Currency: ${selectedCurrency}`}
          hasError={invalidateAmount()}
          errorText="Please enter a valid amount."
        />
        <FormControl
          label="Date Purchased"
          id="date"
          name="date"
          type="date"
          value={date}
          onChange={handleDateChange}
          min={minDate}
          max={today}
          disabled={!selectedCoin && !coinToEdit}
          placeholder="MM/DD/YYYY"
          helperText="Enter the date you purchased the coin. You can only select a date up to a year ago."
          hasError={formSubmitAttempted && !date}
          errorText="Please enter the date you purchased the coin."
        />
        <div className="flex items-center gap-2 text-center">
          {coinToEdit ? deleteButton : cancelButton}
          <div
            className={`flex-1 ${
              ((!selectedCoin && !coinToEdit) ||
                (formSubmitAttempted && (invalidateAmount() || !date))) &&
              "opacity-50 pointer-events-none"
            }`}
          >
            <SelectableWrapper selected>
              <DialogClose asChild>
                <button
                  className="p-2 text-center w-full"
                  onClick={coinToEdit ? handleEditCoin : handleAddCoin}
                >
                  Save Currency
                </button>
              </DialogClose>
            </SelectableWrapper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPortfolioForm;
