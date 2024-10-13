"use client";

import { Repeat } from "lucide-react";
import ConverterCurrencySelector from "./ConverterCurrencySelector";
import { useEffect, useState } from "react";
import { type CoinData } from "@/actions/getCoinsList";

interface ConverterContainerProps {
  coins: CoinData[];
}

const ConverterContainer = ({ coins }: ConverterContainerProps) => {
  const [fromCurrency, setFromCurrency] = useState<CoinData | undefined>();
  const [fromCurrencyQuantity, setFromCurrencyQuantity] = useState<
    number | undefined
  >();
  const [toCurrency, setToCurrency] = useState<CoinData | undefined>();
  const [hasError, setHasError] = useState(false);

  const options = coins.map((coin, index) => ({
    value: index.toString(),
    label: coin.name,
  }));

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

  const getCurrencyFromIndex = (coinIndex: string) => {
    return coins[+coinIndex];
  };

  const getOptionFromCurrency = (coin: CoinData) => {
    return {
      value: coins.indexOf(coin).toString(),
      label: coin.name + " (" + coin.symbol.toUpperCase() + ")",
    };
  };

  return (
    <section className="w-full">
      <div className="flex flex-col gap-4 mb-4 relative">
        <ConverterCurrencySelector
          options={options}
          onChange={(val: any) => setFromCurrency(getCurrencyFromIndex(val))}
          isFromCurrency
          quantity={fromCurrencyQuantity}
          onChangeQuantity={(val: number) => setFromCurrencyQuantity(val)}
          value={fromCurrency && getOptionFromCurrency(fromCurrency)}
          currentPrice={fromCurrency?.current_price.toString()}
          symbol={fromCurrency?.symbol.toUpperCase()}
          image={fromCurrency?.image}
        />
        <ConverterCurrencySelector
          options={options}
          value={toCurrency && getOptionFromCurrency(toCurrency)}
          onChange={(val: any) => setToCurrency(getCurrencyFromIndex(val))}
          currentPrice={toCurrency?.current_price.toString()}
          symbol={toCurrency?.symbol.toUpperCase()}
          image={toCurrency?.image}
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
