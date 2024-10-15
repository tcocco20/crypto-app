interface ConverterCurrencySelectorProps {
  isFromCurrency?: boolean;
}

const ConverterCurrencySelector = ({
  isFromCurrency = false,
}: ConverterCurrencySelectorProps) => {
  return (
    <div
      className={`text-white rounded-md p-3 ${
        isFromCurrency
          ? "bg-indigo-900/35 md:bg-indigo-900/25"
          : "bg-purple-900/20"
      }`}
    >
      <p className="text-xs font-thin text-gray-100">
        {isFromCurrency ? "You sell" : "You buy"}
      </p>
    </div>
  );
};

export default ConverterCurrencySelector;
