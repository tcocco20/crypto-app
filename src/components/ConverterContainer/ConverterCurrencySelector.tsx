import utils from "@/utils";
import Image from "next/image";
import { type ReactNode } from "react";
import Select from "react-select";

interface ConverterCurrencySelectorProps {
  isFromCurrency?: boolean;
  options: { value: string; label: string }[];
  value: any;
  onChange: any;
  onChangeQuantity?: any;
  currentPrice?: string;
  symbol?: string;
  image?: string;
  quantity?: number;
}

const ConverterCurrencySelector = ({
  isFromCurrency,
  options,
  value,
  onChange,
  onChangeQuantity,
  currentPrice,
  symbol,
  image,
  quantity,
}: ConverterCurrencySelectorProps) => {
  return (
    <div
      className={`flex flex-col gap-3 w-full px-4 py-6 rounded-md bg-white dark:text-white${
        isFromCurrency ? " dark:bg-indigo-900/25" : " dark:bg-purple-950/20"
      }`}
    >
      <p className="text-xs text-gray-800 dark:text-gray-300 font-light">
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
              <div
                {...innerProps}
                className="py-2 flex items-center gap-2 text-sm"
              >
                {image && (
                  <Image src={image} width={24} height={24} alt="coin" />
                )}
                {children}
              </div>
            ),
          }}
          classNames={{
            menu: () =>
              "bg-violet-200/90 dark:bg-gray-900/80 p-2 rounded min-w-[170px]",
            menuList: () => "flex flex-col gap-2",
            input: () => "!hidden h-0",
          }}
          value={value}
          onChange={(newValue) => onChange(newValue.value)}
          unstyled
          placeholder="Select a currency"
        />
        {isFromCurrency ? (
          <input
            type="number"
            value={quantity}
            onChange={(e) => onChangeQuantity(e.target.value)}
            className="w-24 text-right text-sm bg-transparent focus:outline-none"
            placeholder="0"
          />
        ) : (
          <p className="text-right text-sm">
            {quantity ? utils.getDisplayNumber(quantity) : "0"}
          </p>
        )}
      </div>
      {currentPrice && (
        <p className="text-xs">
          <span className="text-gray-700 dark:text-gray-400">
            1 {symbol} ={" "}
          </span>
          ${currentPrice}
        </p>
      )}
    </div>
  );
};

export default ConverterCurrencySelector;
