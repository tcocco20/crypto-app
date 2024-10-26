import ConverterDropdown from "./ConverterDropdown";
import { type ChangeEvent } from "react";
import { type ListCoin } from "@/lib/types/ListCoin";

interface ConverterCurrencySelectorProps {
  isFromCurrency?: boolean;
  coins: ListCoin[];
  selectedCurrency?: ListCoin;
  quantity?: number | string;
  onSelectCurrency: (coin: ListCoin) => void;
  setQuantity?: (quantity: number) => void;
}

const ConverterCurrencySelector = ({
  isFromCurrency = false,
  coins,
  onSelectCurrency,
  selectedCurrency,
  quantity,
  setQuantity,
}: ConverterCurrencySelectorProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuantity!(+e.target.value);
  };

  return (
    <div
      className={`text-indigo-900 dark:text-white bg-white rounded-md p-3 ${
        isFromCurrency
          ? "dark:bg-indigo-900/35 dark:md:bg-indigo-900/25"
          : "dark:bg-purple-900/20"
      }`}
    >
      <p className="text-xs font-thin text-indigo-800 dark:text-gray-100">
        {isFromCurrency ? "You sell" : "You buy"}
      </p>
      <div className="flex justify-between items-center border-b border-b-indigo-900 dark:border-b-white py-3">
        <ConverterDropdown
          onSelect={onSelectCurrency}
          coins={coins}
          selectedCurrency={selectedCurrency}
        />
        {isFromCurrency ? (
          <input
            type="number"
            className="bg-transparent outline-none text-right w-2/5"
            placeholder="Quantity"
            value={quantity && quantity}
            onChange={handleChange}
          />
        ) : (
          <p className="text-right w-2/5">{quantity || "Quantity"}</p>
        )}
      </div>
      {selectedCurrency ? (
        <p className="text-xs font-thin my-2">
          <span className="text-indigo-700 dark:text-gray-300">
            1 {selectedCurrency.symbol.toUpperCase()} ={" "}
          </span>
          ${selectedCurrency.current_price}
        </p>
      ) : (
        <p className="my-2 text-transparent text-xs" aria-hidden>
          {" "}
          Invisible text for formatting{" "}
        </p>
      )}
    </div>
  );
};

export default ConverterCurrencySelector;
