"use client";

import React, { useEffect, useState } from "react";
import ConverterCurrencySelector from "./ConverterCurrencySelector";
import { Repeat } from "lucide-react";
import utils from "@/utils";
import { ListCoin } from "@/lib/types/ListCoin";

interface ConverterSelectorProps {
  fromCurrency: { coin: ListCoin; index: number } | undefined;
  toCurrency: { coin: ListCoin; index: number } | undefined;
  fromQuantity: number | undefined;
  setFromCurrency: (index: number) => void;
  setToCurrency: (index: number) => void;
  setFromQuantity: (quantity: number) => void;
}

const ConverterSelectorContainer = ({
  fromCurrency,
  fromQuantity,
  toCurrency,
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
    const temp = fromCurrency.index;
    setFromCurrency(toCurrency.index);
    setToCurrency(temp);
  };

  const convertCurrency = () => {
    if (!fromQuantity || !fromCurrency || !toCurrency) return;
    return utils.getDisplayNumber(
      utils.convertCurrencies(
        fromCurrency.coin.current_price,
        toCurrency.coin.current_price,
        fromQuantity
      )
    );
  };

  useEffect(() => {
    if (fromCurrency && toCurrency && hasError) {
      setHasError(false);
    }
  }, [fromCurrency, toCurrency, hasError]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-5 md:gap-8 relative">
        <ConverterCurrencySelector
          onSelectCurrency={setFromCurrency}
          selectedCurrency={fromCurrency?.coin}
          isFromCurrency
          quantity={fromQuantity}
          setQuantity={setFromQuantity}
        />
        <ConverterCurrencySelector
          onSelectCurrency={setToCurrency}
          selectedCurrency={toCurrency?.coin}
          quantity={convertCurrency()}
        />
        <button
          onClick={handleSwitchCurrency}
          className="p-3 md:p-4 bg-indigo-800 dark:bg-white text-sm absolute rounded-full rotate-90 translate-x-1/2 top-1/2 right-1/2 -translate-y-1/2 dark:border-4 dark:border-gray-800 active:opacity-50 text-white dark:text-indigo-800"
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

export default ConverterSelectorContainer;
