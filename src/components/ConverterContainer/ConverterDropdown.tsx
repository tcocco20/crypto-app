"use client";

import React from "react";
import Dropdown from "../UI/Dropdown";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import utils from "@/utils";
import { type ListCoin } from "@/lib/types/ListCoin";
import { useScreenSize } from "@/hooks/useScreenSize";

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

  const screenSize = useScreenSize();

  const dropDownIconSize = screenSize === "mobile" ? 12 : 16;
  const coinIconSize = screenSize === "mobile" ? 24 : 32;
  const quantitySize = screenSize === "mobile" ? 13 : 18;

  const renderDropdownItem = (item: ListCoin) => {
    return <button onClick={() => onSelect(item)}>{item.name}</button>;
  };
  return (
    <>
      <Dropdown<ListCoin>
        containerClassName="flex flex-1 items-center gap-2"
        parentClassName="text-xs md:text-base lg:text-lg xl:text-xl"
        menuClassName="top-full mt-1 bg-violet-100/90 shadow-md dark:shadow-0 dark:bg-indigo-950/70 w-full p-2 rounded-md overflow-y-auto max-h-60 z-50"
        data={coins}
        renderItem={renderDropdownItem}
        keyExtractor={(item) => item.id}
      >
        {!selectedCurrency && (
          <p className="dark:text-gray-300 font-extralight md:text-lg lg:text-xl">
            {placeholder}
          </p>
        )}
        {selectedCurrency && (
          <div className="flex items-center gap-1 md:gap-2 lg:gap-3 z-0">
            <Image
              src={selectedCurrency.image}
              alt={"logo for " + selectedCurrency.name}
              width={coinIconSize}
              height={coinIconSize}
            />
            <p>
              {utils.truncateString(selectedCurrency.name, quantitySize)} (
              {selectedCurrency.symbol.toUpperCase()})
            </p>
          </div>
        )}
        <ChevronDown size={dropDownIconSize} />
      </Dropdown>
    </>
  );
};

export default ConverterDropdown;
