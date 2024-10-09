interface ConverterCurrencySelectorProps {
  isFromCurrency?: boolean;
}
const ConverterCurrencySelector = ({
  isFromCurrency,
}: ConverterCurrencySelectorProps) => {
  return (
    <div
      className={`w-full px-2 py-4 rounded-md${
        isFromCurrency
          ? " bg-white dark:bg-indigo-900/25"
          : " bg-gray-200 dark:bg-purple-950/20"
      }`}
    >
      <p className="text-xs text-gray-300 font-light">
        {isFromCurrency ? "You sell" : "You buy"}
      </p>
      <div className="flex justify-between border-b-black dark:border-b-white border-width-1"></div>
    </div>
  );
};

export default ConverterCurrencySelector;
