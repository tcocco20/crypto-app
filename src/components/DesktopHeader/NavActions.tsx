"use client";
import { ChevronDown, Search, SunMedium } from "lucide-react";
import HeaderButton from "../UI/HeaderButton";
import { useAppSelector } from "@/lib/hooks";

const NavActions = () => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );

  return (
    <div className="flex gap-5 items-stretch">
      <div className="rounded-lg flex gap-4 items-center bg-violet-950 border border-gray-700/80 px-3">
        <Search size={18} color="#fff" strokeWidth={2.5} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none text-white"
        />
      </div>
      <HeaderButton size="lg">
        {selectedCurrency}
        <ChevronDown size={15} strokeWidth={3} />
      </HeaderButton>
      <HeaderButton size="lg">
        <SunMedium size={36} strokeWidth={1.2} />
      </HeaderButton>
    </div>
  );
};

export default NavActions;
