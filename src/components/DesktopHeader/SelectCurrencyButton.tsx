"use client";

import { ChevronDown } from "lucide-react";
import HeaderButton from "../UI/HeaderButton";
import { useAppSelector } from "@/lib/hooks";
import CurrencySelectorDropdown from "../UI/CurrencySelectorDropdown";

const SelectCurrencyButton = () => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );

  return (
    <CurrencySelectorDropdown>
      <HeaderButton className="h-full">
        {selectedCurrency.toUpperCase()}
        <ChevronDown strokeWidth={3} size={13} />
      </HeaderButton>
    </CurrencySelectorDropdown>
  );
};

export default SelectCurrencyButton;
