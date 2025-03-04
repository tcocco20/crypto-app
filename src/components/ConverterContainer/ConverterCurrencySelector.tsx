"use client";

import ConverterDropdown from "./ConverterDropdown";
import { type ChangeEvent } from "react";
import { type ListCoin } from "@/lib/types/ListCoin";
import { useAppSelector } from "@/lib/hooks";

interface ConverterCurrencySelectorProps {
  isFromCurrency?: boolean;
  selectedCurrency?: ListCoin;
  quantity?: number | string;
  onSelectCurrency: (index: number) => void;
  setQuantity?: (quantity: number) => void;
}

const ConverterCurrencySelector = ({
  isFromCurrency = false,
  onSelectCurrency,
  selectedCurrency,
  quantity,
  setQuantity,
}: ConverterCurrencySelectorProps) => {
  const userCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity!(+e.target.value);
  };

  return (
    <div
      className={`text-indigo-900 dark:text-white bg-white rounded-md md:rounded-lg lg:rounded-xl xl:rounded-2xl p-3 md:flex-1 md:p-6 ${
        isFromCurrency ? "dark:bg-indigo-900/30" : "dark:bg-purple-900/20"
      }`}
    >
      <p className="text-xs md:text-base font-light text-indigo-900 dark:text-gray-100">
        {isFromCurrency ? "You sell" : "You buy"}
      </p>
      <div className="flex justify-between items-center border-b md:border-b-2 border-b-indigo-800 dark:border-b-white py-4 md:py-6">
        <ConverterDropdown
          onSelect={onSelectCurrency}
          selectedCurrency={selectedCurrency}
        />
        {isFromCurrency ? (
          <input
            type="number"
            className="bg-transparent outline-none text-right w-2/5 lg:text-lg appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
            placeholder="Quantity"
            value={quantity && quantity}
            onChange={handleChange}
          />
        ) : (
          <p className="text-right w-2/5 lg:text-lg">
            {quantity || "Quantity"}
          </p>
        )}
      </div>
      {selectedCurrency ? (
        <p className="text-xs md:text-sm lg:text-base font-light my-2 md:my-4">
          <span className="text-indigo-700 dark:text-gray-300">
            1 {selectedCurrency.symbol.toUpperCase()} ={" "}
          </span>
          {selectedCurrency.current_price} {userCurrency.toUpperCase()}
        </p>
      ) : (
        <p
          className="my-2 md:my-4 text-transparent text-xs md:text-sm lg:text-base"
          aria-hidden
        >
          {" "}
          Invisible text for formatting{" "}
        </p>
      )}
    </div>
  );
};

export default ConverterCurrencySelector;
