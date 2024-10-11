"use client";

import { useState } from "react";
import { type SingleValue } from "react-select";
import Select from "react-select/base";

interface ConverterCurrencySelectorProps {
  isFromCurrency?: boolean;
}

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const ConverterCurrencySelector = ({
  isFromCurrency,
}: ConverterCurrencySelectorProps) => {
  const [selectedCurrency, setSelectedCurrency] = useState(options[0]);
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  return (
    <div
      className={`w-full px-2 py-4 rounded-md${
        isFromCurrency
          ? " bg-white dark:bg-indigo-900/25"
          : " bg-gray-200 dark:bg-purple-950/20"
      }`}
    >
      <p className="text-xs text-gray-300 font-light">
        {isFromCurrency ? "You sell" : "You buy"}
      </p>
      <div className="flex justify-between border-b-black dark:border-b-white border-width-1">
        {options.length > 0 ? (
          <Select
            options={options}
            inputValue={selectedCurrency.label}
            onChange={(item: SingleValue<{ value: string; label: string }>) =>
              setSelectedCurrency(item as { value: string; label: string })
            }
            value={selectedCurrency}
            onInputChange={(inputValue) => inputValue}
            onMenuOpen={() => setMenuIsOpen(true)}
            onMenuClose={() => setMenuIsOpen(false)}
            menuIsOpen={menuIsOpen}
          />
        ) : null}
      </div>
    </div>
  );
};

export default ConverterCurrencySelector;
