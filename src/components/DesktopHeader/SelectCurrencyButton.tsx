"use client";

import { ChevronDown } from "lucide-react";
import HeaderButton from "../UI/HeaderButton";
import Dropdown from "../UI/Dropdown";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { setSelectedCurrency } from "@/lib/features/preferences/preferencesSlice";
import actions from "@/actions";
import { setCoins } from "@/lib/features/coinList/coinListSlice";

const SelectCurrencyButton = () => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );
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
      menuClassName="mt-1 bg-violet-100/90 shadow-md dark:shadow-0 dark:bg-indigo-950/70 p-2 rounded-md overflow-y-auto max-h-60 z-50"
      data={currencies}
      renderItem={renderDropdownItem}
      keyExtractor={(item) => item}
    >
      <HeaderButton className="h-full">
        {selectedCurrency.toUpperCase()}
        <ChevronDown strokeWidth={3} size={13} />
      </HeaderButton>
    </Dropdown>
  );
};

export default SelectCurrencyButton;
