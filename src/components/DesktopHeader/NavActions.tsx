"use client";
import { Moon, SunMedium } from "lucide-react";
import HeaderButton from "../UI/HeaderButton";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleDarkMode } from "@/lib/features/preferences/preferencesSlice";
import SearchButton from "./SearchButton";
import SelectCurrencyButton from "./SelectCurrencyButton";

const NavActions = () => {
  const darkMode = useAppSelector((state) => state.preferences.darkMode);
  const dispatch = useAppDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className="flex gap-2 lg:gap-3 xl:gap-4 items-stretch text-indigo-900 dark:text-white">
      <SearchButton />
      <SelectCurrencyButton />
      <HeaderButton onClick={handleToggleDarkMode}>
        {darkMode ? (
          <SunMedium strokeWidth={1.2} size={34} />
        ) : (
          <Moon strokeWidth={1.2} size={34} />
        )}
      </HeaderButton>
    </div>
  );
};

export default NavActions;
