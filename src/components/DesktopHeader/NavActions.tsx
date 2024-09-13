"use client";
import { ChevronDown, SunMedium } from "lucide-react";
import HeaderButton from "../UI/HeaderButton";
import { useAppSelector } from "@/lib/hooks";

const NavActions = () => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );

  return (
    <div className="flex gap-5">
      <input
        type="text"
        placeholder="Search"
        className="bg-gray-800 text-white p-2 rounded-lg"
      />
      <HeaderButton>
        {selectedCurrency}
        <ChevronDown />
      </HeaderButton>
      <HeaderButton>
        <SunMedium size={36} strokeWidth={1.2} />
      </HeaderButton>
    </div>
  );
};

export default NavActions;
