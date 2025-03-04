"use client";

import { useState } from "react";
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

  let fromCurrency: { coin: ListCoin; index: number } | undefined;
  let toCurrency: { coin: ListCoin; index: number } | undefined;

  if (fromCurrencyIndex !== undefined) {
    fromCurrency = { coin: coins[fromCurrencyIndex], index: fromCurrencyIndex };
  }
  if (toCurrencyIndex !== undefined) {
    toCurrency = { coin: coins[toCurrencyIndex], index: toCurrencyIndex };
  }

  // useEffect(() => {
  //   if (fromCurrencyIndex && toCurrencyIndex) {
  //     if (
  //       fromCurrencyIndex + 1 > coins.length ||
  //       toCurrencyIndex + 1 > coins.length
  //     ) {
  //       setFromCurrencyIndex(undefined);
  //       setToCurrencyIndex(undefined);
  //     }
  //   }
  // }, [fromCurrencyIndex, toCurrencyIndex, coins]);

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
      {fromCurrency && toCurrency && (
        <ConverterChartContainer
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
        />
      )}
    </section>
  );
};

export default ConverterContainer;
