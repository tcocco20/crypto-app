"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { ChevronDown, Moon, Search, SunDim } from "lucide-react";
import HeaderButton from "@/components/UI/HeaderButton";
import {
  toggleDarkMode,
  toggleSearchDrawer,
} from "@/lib/features/preferences/preferencesSlice";

const ActionButtons = () => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );
  const darkMode = useAppSelector((state) => state.preferences.darkMode);
  const dispatch = useAppDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  const handleOpenDrawer = () => {
    dispatch(toggleSearchDrawer());
  };
  return (
    <div className="flex gap-2">
      <HeaderButton onClick={handleOpenDrawer}>
        <Search size={18} />
      </HeaderButton>
      <HeaderButton>
        {selectedCurrency}
        <ChevronDown size={12} strokeWidth={3} />
      </HeaderButton>
      <HeaderButton onClick={handleToggleDarkMode}>
        {darkMode ? <SunDim size={20} /> : <Moon size={20} />}
      </HeaderButton>
    </div>
  );
};

export default ActionButtons;
