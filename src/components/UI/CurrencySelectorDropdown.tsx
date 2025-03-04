"use client";

import actions from "@/actions";
import { setCoins } from "@/lib/features/coinList/coinListSlice";
import { setSelectedCurrency } from "@/lib/features/preferences/preferencesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { type ReactNode } from "react";
import Dropdown from "./Dropdown";

interface CurrencySelectorDropdownProps {
  children: ReactNode;
}

const CurrencySelectorDropdown = ({
  children,
}: CurrencySelectorDropdownProps) => {
  const currencies = useAppSelector(
    (state) => state.preferences.supportedCurrencies
  );
  const dispatch = useAppDispatch();

  const handleSelectCurrency = async (currency: string) => {
    dispatch(setSelectedCurrency(currency));
    const newCoinsList = await actions.getCoinsList(currency, 1, true);
    dispatch(setCoins(newCoinsList));
  };

  const renderDropdownItem = (item: string) => {
    return (
      <button onClick={() => handleSelectCurrency(item)}>
        {item.toUpperCase()}
      </button>
    );
  };
  return (
    <Dropdown
      containerClassName="h-full"
      menuClassName="mt-1 bg-violet-100/90 shadow-md dark:shadow-0 dark:bg-indigo-950/90 text-sm md:text-base p-2 rounded-md overflow-y-auto max-h-60 z-50"
      data={currencies}
      renderItem={renderDropdownItem}
      keyExtractor={(item) => item}
    >
      {children}
    </Dropdown>
  );
};

export default CurrencySelectorDropdown;
