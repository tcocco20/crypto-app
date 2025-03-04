"use client";

import { useAppSelector } from "@/lib/hooks";
import React from "react";
import HeaderButton from "../UI/HeaderButton";
import { ChevronDown } from "lucide-react";
import CurrencySelectorDropdown from "../UI/CurrencySelectorDropdown";

const SelectCurrencyButton = () => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );

  return (
    <CurrencySelectorDropdown>
      <HeaderButton className="h-full">
        {selectedCurrency.toUpperCase()}
        <ChevronDown size={12} strokeWidth={3} />
      </HeaderButton>
    </CurrencySelectorDropdown>
  );
};

export default SelectCurrencyButton;
