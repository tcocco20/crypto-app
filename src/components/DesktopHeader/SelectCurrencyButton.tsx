"use client";

import { ChevronDown } from "lucide-react";
import HeaderButton from "../UI/HeaderButton";
import { useAppSelector } from "@/lib/hooks";
import Dropdown from "../UI/Dropdown";
// import { useAppDispatch, useAppSelector } from "@/lib/hooks";

const SelectCurrencyButton = () => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );
  //   const dispatch = useAppDispatch();
  return (
    <Dropdown containerClassName="h-full" menuClassName="min-w-32 bg-white dark:bg-gray-800 rounded-lg shadow-lg text-gray-900 dark:text-white mt-1">
      <HeaderButton className="h-full">
        {selectedCurrency}
        <ChevronDown strokeWidth={3} size={13} />
      </HeaderButton>
    </Dropdown>
  );
};

export default SelectCurrencyButton;
