"use client";
import { type CoinData } from "@/actions/getCoinsList";
import ConverterCurrencySelector from "./ConverterCurrencySelector";
import { Repeat } from "lucide-react";
import { useState } from "react";
import utils from "@/utils";

interface ConverterContainerProps {
  coins: CoinData[];
}

const ConverterContainer = ({ coins }: ConverterContainerProps) => {
  const [fromCurrency, setFromCurrency] = useState<CoinData | undefined>();
  const [fromQuantity, setFromQuantity] = useState<number | undefined>();
  const [toCurrency, setToCurrency] = useState<CoinData | undefined>();

  const handleSwitchCurrency = () => {
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
    <section className="w-full flex flex-col gap-5">
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
    </section>
  );
};

export default ConverterContainer;
