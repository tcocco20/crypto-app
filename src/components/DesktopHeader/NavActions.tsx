"use client";
import { ChevronDown, Search, SunMedium } from "lucide-react";
import HeaderButton from "../UI/HeaderButton";
import { useAppSelector } from "@/lib/hooks";

const NavActions = () => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );

  return (
    <div className="flex gap-2 lg:gap-3 xl:gap-4 items-stretch">
      <div className="rounded-lg flex gap-1 lg:gap-4 items-center bg-violet-950 border border-gray-700/80 px-2 lg:px-4 w-[14.2rem] lg:w-72 xl:w-96">
        <Search size={18} color="#fff" strokeWidth={2.5} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-white"
        />
      </div>
      <HeaderButton>
        {selectedCurrency}
        <ChevronDown strokeWidth={3} />
      </HeaderButton>
      <HeaderButton>
        <SunMedium strokeWidth={1.2} />
      </HeaderButton>
    </div>
  );
};

export default NavActions;
