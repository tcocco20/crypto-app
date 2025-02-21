"use client";
import { ChevronDown, Moon, Search, SunMedium } from "lucide-react";
import HeaderButton from "../UI/HeaderButton";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleDarkMode } from "@/lib/features/preferences/preferencesSlice";
import Dropdown from "../UI/Dropdown";

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
      <Dropdown
        menuClassName="text-indigo-900 bg-indigo-600/15 dark:text-white dark:bg-violet-950 w-full border border-indigo-600/5 dark:border-gray-700/80 rounded-b"
        parentClassName="h-full"
        containerClassName="h-full"
      >
        <HeaderButton className="lg:px-4 w-[14.2rem] lg:w-72 xl:w-96 pointer-events-none active:opacity-100 h-full">
          <Search size={18} strokeWidth={2.5} />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none flex-1 pointer-events-auto"
          />
        </HeaderButton>
      </Dropdown>
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
