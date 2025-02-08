"use client";

import { useState } from "react";
import { type ListCoin } from "@/lib/types/ListCoin";
import ConverterSelectorContainer from "./ConverterSelectorContainer";
import ConverterChartContainer from "./ConverterChartContainer";

interface ConverterContainerProps {
  coins: ListCoin[];
}

const ConverterContainer = ({ coins }: ConverterContainerProps) => {
  const [fromCurrency, setFromCurrency] = useState<ListCoin | undefined>();
  const [fromQuantity, setFromQuantity] = useState<number | undefined>();
  const [toCurrency, setToCurrency] = useState<ListCoin | undefined>();

  return (
    <section className="w-full flex flex-col gap-5 md:gap-8 lg:gap-12 xl:gap-16">
      <ConverterSelectorContainer
        toCurrency={toCurrency}
        fromCurrency={fromCurrency}
        fromQuantity={fromQuantity}
        coins={coins}
        setFromCurrency={setFromCurrency}
        setFromQuantity={setFromQuantity}
        setToCurrency={setToCurrency}
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
