"use client";

import React, { useState } from "react";
import ConverterCurrencySelector from "./ConverterCurrencySelector";
import { Repeat } from "lucide-react";
import utils from "@/utils";
import { ListCoin } from "@/lib/types/ListCoin";

interface ConverterSelectorProps {
  fromCurrency: ListCoin | undefined;
  toCurrency: ListCoin | undefined;
  fromQuantity: number | undefined;
  coins: ListCoin[];
  setFromCurrency: (coin: ListCoin) => void;
  setToCurrency: (coin: ListCoin) => void;
  setFromQuantity: (quantity: number) => void;
}

const ConverterSelector = ({
  fromCurrency,
  fromQuantity,
  toCurrency,
  coins,
  setFromCurrency,
  setToCurrency,
  setFromQuantity,
}: ConverterSelectorProps) => {
  const [hasError, setHasError] = useState(false);

  const handleSwitchCurrency = () => {
    if (!fromCurrency || !toCurrency) {
      setHasError(true);
      return;
    }
    const temp = fromCurrency;
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  const convertCurrency = () => {
    if (!fromQuantity || !fromCurrency || !toCurrency) return;
    return utils.getDisplayNumber(
      utils.convertCurrencies(
        fromCurrency.current_price,
        toCurrency.current_price,
        fromQuantity
      )
    );
  };

  return (
    <>
      <div className="flex flex-col gap-5 relative">
        <ConverterCurrencySelector
          onSelectCurrency={setFromCurrency}
          selectedCurrency={fromCurrency}
          isFromCurrency
          coins={coins}
          quantity={fromQuantity}
          setQuantity={setFromQuantity}
        />
        <ConverterCurrencySelector
          onSelectCurrency={setToCurrency}
          selectedCurrency={toCurrency}
          coins={coins}
          quantity={convertCurrency()}
        />
        <button
          onClick={handleSwitchCurrency}
          className="p-3 bg-indigo-800 dark:bg-white text-sm absolute rounded-full rotate-90 translate-x-1/2 top-1/2 right-1/2 -translate-y-1/2 dark:border-4 dark:border-gray-800 active:opacity-50 text-white dark:text-indigo-800"
        >
          <Repeat size={24} />
        </button>
      </div>
      {hasError && (
        <p className="text-red-500 text-xs">
          Please select both currencies before trying to switch
        </p>
      )}
    </>
  );
};

export default ConverterSelector;
