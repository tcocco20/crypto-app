import { CoinData } from "@/actions/getCoinsList";
import ConverterDropdown from "./ConverterDropdown";

interface ConverterCurrencySelectorProps {
  isFromCurrency?: boolean;
  coins: CoinData[];
}

const ConverterCurrencySelector = ({
  isFromCurrency = false,
  coins,
}: ConverterCurrencySelectorProps) => {
  const test = false;
  return (
    <p
      className={`text-white rounded-md p-3 ${
        isFromCurrency
          ? "bg-indigo-900/35 md:bg-indigo-900/25"
          : "bg-purple-900/20"
      }`}
    >
      <p className="text-xs font-thin text-gray-100">
        {isFromCurrency ? "You sell" : "You buy"}
      </p>
      <div className="flex justify-between items-center border-b border-b-white py-3">
        <ConverterDropdown coins={coins} />
        <input
          type="number"
          className="bg-transparent outline-none text-right w-2/5"
          placeholder="Quantity"
        />
      </div>
      {test ? (
        <p className="text-xs font-thin my-2">
          <span className="text-gray-300">1 BTC = </span>$26,250.15
        </p>
      ) : (
        <p className="my-2 text-transparent text-xs" aria-hidden>
          {" "}
          Invisible text for formatting{" "}
        </p>
      )}
    </p>
  );
};

export default ConverterCurrencySelector;
