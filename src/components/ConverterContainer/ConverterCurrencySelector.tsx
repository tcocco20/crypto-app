import Image from "next/image";
import { type ReactNode } from "react";
import Select from "react-select";

interface ConverterCurrencySelectorProps {
  isFromCurrency?: boolean;
  options: { value: string; label: string }[];
  value: any;
  onChange: any;
  currentPrice?: string;
  symbol?: string;
  image?: string;
}

const ConverterCurrencySelector = ({
  isFromCurrency,
  options,
  value,
  onChange,
  currentPrice,
  symbol,
  image,
}: ConverterCurrencySelectorProps) => {
  return (
    <div
      className={`flex flex-col gap-3 w-full px-4 py-6 rounded-md dark:text-white${
        isFromCurrency
          ? " bg-white dark:bg-indigo-900/25"
          : " bg-gray-200 dark:bg-purple-950/20"
      }`}
    >
      <p className="text-xs text-gray-300 font-light">
        {isFromCurrency ? "You sell" : "You buy"}
      </p>
      <div className="flex justify-between border-b-black dark:border-b-white border-b">
        <Select
          options={options}
          components={{
            SingleValue: ({
              innerProps,
              children,
            }: {
              innerProps: any;
              children: ReactNode;
            }) => (
              <div {...innerProps} className="py-2 flex items-center gap-2">
                {image && (
                  <Image src={image} width={24} height={24} alt="coin" />
                )}
                {children}
              </div>
            ),
          }}
          classNames={{
            menu: () => "bg-gray-900/80 p-2 rounded min-w-[150px]",
            menuList: () => "flex flex-col gap-2",
            input: () => "!hidden h-0",
          }}
          value={value}
          onChange={(newValue) => onChange(newValue.value)}
          unstyled
          placeholder="Select a currency"
        />
        <p className="text-lg">2</p>
      </div>
      {currentPrice && (
        <p className="text-xs">
          <span className="text-gray-400">1 {symbol} = </span>${currentPrice}
        </p>
      )}
    </div>
  );
};

export default ConverterCurrencySelector;
