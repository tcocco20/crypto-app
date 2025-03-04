"use client";

import { useEffect, useState } from "react";
import { type ListCoin } from "@/lib/types/ListCoin";
import ConverterSelectorContainer from "./ConverterSelectorContainer";
import ConverterChartContainer from "./ConverterChartContainer";
import { useAppSelector } from "@/lib/hooks";

const ConverterContainer = () => {
  const coins = useAppSelector((state) => state.coinList.coins);
  const [fromCurrencyIndex, setFromCurrencyIndex] = useState<
    number | undefined
  >();
  const [fromQuantity, setFromQuantity] = useState<number | undefined>();
  const [toCurrencyIndex, setToCurrencyIndex] = useState<number | undefined>();
  const [fromCurrency, setFromCurrency] = useState<
    { coin: ListCoin; index: number } | undefined
  >();
  const [toCurrency, setToCurrency] = useState<
    { coin: ListCoin; index: number } | undefined
  >();

  useEffect(() => {
    if (fromCurrencyIndex === undefined || fromCurrencyIndex >= coins.length) {
      setFromCurrencyIndex(undefined);
      setFromCurrency(undefined);
    } else {
      setFromCurrency({
      coin: coins[fromCurrencyIndex],
      index: fromCurrencyIndex,
      });
    }

    if (toCurrencyIndex === undefined || toCurrencyIndex >= coins.length) {
      setToCurrencyIndex(undefined);
      setToCurrency(undefined);
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
