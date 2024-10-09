"use client";

import ConverterCurrencySelector from "./ConverterCurrencySelector";

const ConverterContainer = () => {
  return (
    <section className="w-full flex flex-col gap-4">
      <ConverterCurrencySelector isFromCurrency/>
      <ConverterCurrencySelector />
    </section>
  );
};

export default ConverterContainer;
