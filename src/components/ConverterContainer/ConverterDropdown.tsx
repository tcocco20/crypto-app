import React from "react";
import Dropdown from "../UI/Dropdown";
import { ChevronDown } from "lucide-react";
import { CoinData } from "@/actions/getCoinsList";

interface ConverterDropdownProps {
  coins: CoinData[];
}

const ConverterDropdown = ({ coins }: ConverterDropdownProps) => {
  const placeholder = "Select Currency to begin";

  const renderDropdownItem = (item: CoinData) => {
    return <div>{item.name}</div>;
  };
  return (
    <>
      <Dropdown<CoinData>
        containerClassName="flex flex-1 text-xs items-center gap-2"
        menuClassName="top-full mt-1 dark:bg-indigo-950/70 w-full p-2 rounded-md"
        data={coins}
        renderItem={renderDropdownItem}
        keyExtractor={(item) => item.id}
      >
        {placeholder && (
          <p className="text-gray-400 font-thin">{placeholder}</p>
        )}
        <ChevronDown size={12} />
      </Dropdown>
    </>
  );
};

export default ConverterDropdown;
