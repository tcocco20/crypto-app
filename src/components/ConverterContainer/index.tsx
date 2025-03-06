"use client";

import { useEffect, useState } from "react";
import { type ListCoin } from "@/lib/types/ListCoin";
import ConverterSelectorContainer from "./ConverterSelectorContainer";
import ConverterChartContainer from "./ConverterChartContainer";
import { useAppSelector } from "@/lib/hooks";

const ConverterContainer = () => {
  const coins = useAppSelector((state) => state.coinList.coins);
  const [fromCurrencyIndex, setFromCurrencyIndex] = useState<number | null>(
    null
  );
  const [fromQuantity, setFromQuantity] = useState<number | undefined>();
  const [toCurrencyIndex, setToCurrencyIndex] = useState<number | null>(null);
  const [fromCurrency, setFromCurrency] = useState<{
    coin: ListCoin;
    index: number;
  } | null>(null);
  const [toCurrency, setToCurrency] = useState<{
    coin: ListCoin;
    index: number;
  } | null>(null);

  useEffect(() => {
    if (fromCurrencyIndex === null || fromCurrencyIndex >= coins.length) {
      setFromCurrencyIndex(null);
      setFromCurrency(null);
    } else {
      setFromCurrency({
        coin: coins[fromCurrencyIndex],
        index: fromCurrencyIndex,
      });
    }

    if (toCurrencyIndex === null || toCurrencyIndex >= coins.length) {
      setToCurrencyIndex(null);
      setToCurrency(null);
    } else {
      setToCurrency({
        coin: coins[toCurrencyIndex],
        index: toCurrencyIndex,
      });
    }
  }, [fromCurrencyIndex, toCurrencyIndex, coins]);

  const converterChart = fromCurrency && toCurrency && (
    <ConverterChartContainer
      fromCurrency={fromCurrency}
      toCurrency={toCurrency}
    />
  );

  return (
    <section className="w-full flex flex-col gap-5 md:gap-8 lg:gap-12 xl:gap-16">
      <ConverterSelectorContainer
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        fromQuantity={fromQuantity}
        setFromCurrency={setFromCurrencyIndex}
        setFromQuantity={setFromQuantity}
        setToCurrency={setToCurrencyIndex}
      />
      {converterChart}
    </section>
  );
};

export default ConverterContainer;
