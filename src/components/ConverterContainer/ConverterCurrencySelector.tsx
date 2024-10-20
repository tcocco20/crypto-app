import { CoinData } from "@/actions/getCoinsList";
import ConverterDropdown from "./ConverterDropdown";

interface ConverterCurrencySelectorProps {
  isFromCurrency?: boolean;
  coins: CoinData[];
  selectedCurrency?: CoinData;
  quantity?: number | string;
  // eslint-disable-next-line no-unused-vars
  onSelectCurrency: (coin: CoinData) => void;
  // eslint-disable-next-line no-unused-vars
  setQuantity?: (quantity: number) => void;
}

const ConverterCurrencySelector = ({
  isFromCurrency = false,
  coins,
  onSelectCurrency,
  selectedCurrency,
  quantity,
  setQuantity,
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
      <div className="flex justify-between items-center border-b border-b-white py-3">
        <ConverterDropdown
          onSelect={onSelectCurrency}
          coins={coins}
          selectedCurrency={selectedCurrency}
        />
        {isFromCurrency ? (
          <input
            type="number"
            className="bg-transparent outline-none text-right w-2/5"
            placeholder="Quantity"
            value={quantity && quantity}
            onChange={(e) => setQuantity!(+e.target.value)}
          />
        ) : (
          <p className="text-right w-2/5">{quantity || "Quantity"}</p>
        )}
      </div>
      {selectedCurrency ? (
        <p className="text-xs font-thin my-2">
          <span className="text-gray-300">
            1 {selectedCurrency.symbol.toUpperCase()} ={" "}
          </span>
          ${selectedCurrency.current_price}
        </p>
      ) : (
        <p className="my-2 text-transparent text-xs" aria-hidden>
          {" "}
          Invisible text for formatting{" "}
        </p>
      )}
    </div>
  );
};

export default ConverterCurrencySelector;
