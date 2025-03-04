"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Moon, Search, SunDim } from "lucide-react";
import HeaderButton from "@/components/UI/HeaderButton";
import {
  toggleDarkMode,
  toggleSearchDrawer,
} from "@/lib/features/preferences/preferencesSlice";
import SelectCurrencyButton from "./SelectCurrencyButton";

const ActionButtons = () => {
  const darkMode = useAppSelector((state) => state.preferences.darkMode);
  const dispatch = useAppDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const handleOpenDrawer = () => {
    dispatch(toggleSearchDrawer());
  };
  return (
    <div className="flex gap-2 text-indigo-900 dark:text-white">
      <HeaderButton onClick={handleOpenDrawer}>
        <Search size={18} />
      </HeaderButton>
      <SelectCurrencyButton />
      <HeaderButton onClick={handleToggleDarkMode}>
        {darkMode ? <SunDim size={20} /> : <Moon size={20} />}
      </HeaderButton>
    </div>
  );
};

export default ActionButtons;
