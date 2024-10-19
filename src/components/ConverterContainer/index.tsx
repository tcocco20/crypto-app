"use client";
import { type CoinData } from "@/actions/getCoinsList";
import ConverterCurrencySelector from "./ConverterCurrencySelector";
import { Repeat } from "lucide-react";

interface ConverterContainerProps {
  coins: CoinData[];
}

const ConverterContainer = ({ coins }: ConverterContainerProps) => {
  return (
    <section className="w-full flex flex-col gap-5">
      <div className="flex flex-col gap-5 relative">
        <ConverterCurrencySelector isFromCurrency />
        <ConverterCurrencySelector />
        <button className="p-3 bg-indigo-800 dark:bg-white text-sm absolute rounded-full rotate-90 translate-x-1/2 top-1/2 right-1/2 -translate-y-1/2 dark:border-4 dark:border-gray-800 active:opacity-50 text-white dark:text-indigo-800">
          <Repeat size={24} />
        </button>
      </div>
    </section>
  );
};

export default ConverterContainer;
