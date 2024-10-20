import React from "react";
import Dropdown from "../UI/Dropdown";
import { ChevronDown } from "lucide-react";
import { CoinData } from "@/actions/getCoinsList";
import Image from "next/image";

interface ConverterDropdownProps {
  coins: CoinData[];
  // eslint-disable-next-line no-unused-vars
  onSelect: (coin: CoinData) => void;
  selectedCurrency?: CoinData;
}

const ConverterDropdown = ({
  coins,
  onSelect,
  selectedCurrency,
}: ConverterDropdownProps) => {
  const placeholder = "Select Currency to begin";

  const renderDropdownItem = (item: CoinData) => {
    return <button onClick={() => onSelect(item)}>{item.name}</button>;
  };
  return (
    <>
      <Dropdown<CoinData>
        containerClassName="flex flex-1 text-xs items-center gap-2"
        menuClassName="top-full mt-1 dark:bg-indigo-950/70 w-full p-2 rounded-md overflow-y-auto max-h-60 z-50"
        data={coins}
        renderItem={renderDropdownItem}
        keyExtractor={(item) => item.id}
      >
        {!selectedCurrency && (
          <p className="text-gray-400 font-thin">{placeholder}</p>
        )}
        {selectedCurrency && (
          <div className="flex items-center gap-2 z-0">
            <Image
              src={selectedCurrency.image}
              alt={"logo for " + selectedCurrency.name}
              width={24}
              height={24}
            />
            <p>{selectedCurrency.name}</p>
          </div>
        )}
        <ChevronDown size={12} />
      </Dropdown>
    </>
  );
};

export default ConverterDropdown;
