import Select from "react-select";

interface ConverterCurrencySelectorProps {
  isFromCurrency?: boolean;
}

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const ConverterCurrencySelector = ({
  isFromCurrency,
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
        <Select options={options} defaultValue={options[0]} className="text-black" />
        <p className="text-lg">2</p>
      </div>
      <p className="text-xs">
        <span className="text-gray-400">1 BTC = </span>$XXXXX.XX
      </p>
    </div>
  );
};

export default ConverterCurrencySelector;
