"use client";
import { type CoinData } from "@/actions/getCoinsList";
import ConverterCurrencySelector from "./ConverterCurrencySelector";

interface ConverterContainerProps {
  coins: CoinData[];
}

const ConverterContainer = ({ coins }: ConverterContainerProps) => {
  return (
    <section className="w-full flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <p>{coins.length}</p>
        <ConverterCurrencySelector isFromCurrency />
        <ConverterCurrencySelector />
      </div>
    </section>
  );
};

export default ConverterContainer;
