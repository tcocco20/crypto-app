"use client";

import { Repeat } from "lucide-react";
import ConverterCurrencySelector from "./ConverterCurrencySelector";

const ConverterContainer = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-4 mb-4 relative">
        <ConverterCurrencySelector isFromCurrency />
        <ConverterCurrencySelector />
        <Repeat
          size={24}
          className="bg-white p-3 h-12 w-12 absolute rounded-full rotate-90 translate-x-1/2 top-1/2 right-1/2 -translate-y-1/2 border-4 border-black"
        />
      </div>
    </section>
  );
};

export default ConverterContainer;
