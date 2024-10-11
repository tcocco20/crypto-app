"use client";

import { Repeat } from "lucide-react";
import ConverterCurrencySelector from "./ConverterCurrencySelector";
import { useEffect, useState } from "react";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const ConverterContainer = () => {
  const [fromCurrency, setFromCurrency] = useState<any | undefined>();
  const [toCurrency, setToCurrency] = useState<any | undefined>();
  const [hasError, setHasError] = useState(false);

  const handleSwap = () => {
    const temp = fromCurrency;
    if (!fromCurrency || !toCurrency) {
      setHasError(true);
      return;
    }
    setFromCurrency(toCurrency);
    setToCurrency(temp);
  };

  useEffect(() => {
    if (fromCurrency && toCurrency) {
      setHasError(false);
    }
  }, [fromCurrency, toCurrency]);

  return (
    <section className="w-full">
      <div className="flex flex-col gap-4 mb-4 relative">
        <ConverterCurrencySelector
          options={options}
          onChange={setFromCurrency}
          isFromCurrency
          value={fromCurrency}
        />
        <ConverterCurrencySelector
          options={options}
          value={toCurrency}
          onChange={setToCurrency}
        />
        <button
          onClick={handleSwap}
          className="p-3 bg-white text-sm absolute rounded-full rotate-90 translate-x-1/2 top-1/2 right-1/2 -translate-y-1/2 border-4 border-black active:opacity-50"
        >
          <Repeat size={24} />
        </button>
      </div>
      {hasError && (
        <p className="text-red-500 text-sm mb-4">
          Please select both currencies to swap
        </p>
      )}
    </section>
  );
};

export default ConverterContainer;
