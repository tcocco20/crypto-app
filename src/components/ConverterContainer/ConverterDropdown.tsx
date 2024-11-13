import React from "react";
import Dropdown from "../UI/Dropdown";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import utils from "@/utils";
import { type ListCoin } from "@/lib/types/ListCoin";

interface ConverterDropdownProps {
  coins: ListCoin[];
  onSelect: (coin: ListCoin) => void;
  selectedCurrency?: ListCoin;
}

const ConverterDropdown = ({
  coins,
  onSelect,
  selectedCurrency,
}: ConverterDropdownProps) => {
  const placeholder = "Select Currency to begin";

  const renderDropdownItem = (item: ListCoin) => {
    return <button onClick={() => onSelect(item)}>{item.name}</button>;
  };
  return (
    <>
      <Dropdown<ListCoin>
        containerClassName="flex flex-1 text-xs items-center gap-2"
        menuClassName="top-full mt-1 bg-violet-100/90 shadow-md dark:shadow-0 dark:bg-indigo-950/70 w-full p-2 rounded-md overflow-y-auto max-h-60 z-50"
        data={coins}
        renderItem={renderDropdownItem}
        keyExtractor={(item) => item.id}
      >
        {!selectedCurrency && (
          <p className="text-gray-400 font-thin">{placeholder}</p>
        )}
        {selectedCurrency && (
          <div className="flex items-center gap-1 z-0">
            <Image
              src={selectedCurrency.image}
              alt={"logo for " + selectedCurrency.name}
              width={24}
              height={24}
            />
            <p>
              {utils.truncateString(selectedCurrency.name, 13)} (
              {selectedCurrency.symbol.toUpperCase()})
            </p>
          </div>
        )}
        <ChevronDown size={12} />
      </Dropdown>
    </>
  );
};

export default ConverterDropdown;
