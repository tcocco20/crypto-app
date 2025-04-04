"use client";
import React, { type ChangeEvent, useState } from "react";
import CoinBrand from "../UI/CoinBrand";
import DesktopSearchComponent from "../UI/DesktopSearchComponent";
import FormControl from "../UI/FormControl";
import { DialogClose } from "@radix-ui/react-dialog";
// import SelectableWrapper from "../UI/SelectableWrapper";
import { type SearchResult } from "@/lib/types/SearchResult";
import { PortfolioCoinWithMarketData } from "@/lib/types/PortfolioCoinWithMarketData";
import { usePortfolioSubmit } from "@/hooks/usePortfolioSubmit";
import SecondaryButton from "../UI/SecondaryButton";
import PrimaryButton from "../UI/PrimaryButton";

interface AddPortfolioFormProps {
  coinToEdit?: PortfolioCoinWithMarketData;
}

const AddPortfolioForm = ({ coinToEdit }: AddPortfolioFormProps) => {
  const [selectedCoin, setSelectedCoin] = useState<SearchResult | null>(null);

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
  } = usePortfolioSubmit(coinToEdit);

  const handleItemSelect = (item?: SearchResult) => {
    setSelectedCoin(item!);
  };

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

  const cancelButton = (
    <DialogClose asChild>
      <SecondaryButton cancelButton className="flex-1 py-2">
        Cancel
      </SecondaryButton>
    </DialogClose>
  );

  const deleteButton = (
    <DialogClose asChild>
      <SecondaryButton onClick={handleDeleteCoin} className="flex-1 py-2">
        Delete Coin
      </SecondaryButton>
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
          min={5}
          step={0.01}
          placeholder="0.00"
          disabled={!selectedCoin && !coinToEdit}
          helperText={`Enter the amount you purchased in your currently selected currency. Selected Currency: ${selectedCurrency}`}
          hasError={formSubmitAttempted && amountInvalid}
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
          max={maxDate}
          disabled={!selectedCoin && !coinToEdit}
          placeholder="MM/DD/YYYY"
          helperText="Enter the date you purchased the coin. You can only select a date up to a year ago."
          hasError={formSubmitAttempted && dateInvalid}
          errorText="Please enter a valid date."
        />
        <div className="flex items-center gap-2 text-center">
          {coinToEdit ? deleteButton : cancelButton}
          <DialogClose asChild>
            <PrimaryButton
              disabled={
                (!selectedCoin && !coinToEdit) || amountInvalid || dateInvalid
              }
              onClick={addCoinHandler}
            >
              Save Currency
            </PrimaryButton>
          </DialogClose>
          {/* <div
            className={`flex-1 ${
              ((!selectedCoin && !coinToEdit) ||
                amountInvalid ||
                dateInvalid) &&
              "opacity-50 pointer-events-none"
            }`}
          >
            <SelectableWrapper selected>
              <DialogClose asChild>
                <button
                  className="p-2 text-center w-full"
                  onClick={addCoinHandler}
                >
                  Save Currency
                </button>
              </DialogClose>
            </SelectableWrapper>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default AddPortfolioForm;
