"use client";
import { ChevronDown, Moon, Search, SunMedium } from "lucide-react";
import HeaderButton from "../UI/HeaderButton";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleDarkMode } from "@/lib/features/preferences/preferencesSlice";

const NavActions = () => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );
  const darkMode = useAppSelector((state) => state.preferences.darkMode);
  const dispatch = useAppDispatch();

  const handleToggleDarkMode = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className="flex gap-2 lg:gap-3 xl:gap-4 items-stretch text-indigo-900 dark:text-white">
      <HeaderButton className="lg:px-4 w-[14.2rem] lg:w-72 xl:w-96 pointer-events-none active:opacity-100">
        <Search size={18} strokeWidth={2.5} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none flex-1 pointer-events-auto"
        />
      </HeaderButton>
      <HeaderButton>
        {selectedCurrency}
        <ChevronDown strokeWidth={3} size={13} />
      </HeaderButton>
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
