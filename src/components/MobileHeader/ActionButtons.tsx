"use client";
import { useAppSelector } from "@/lib/hooks";
import { ChevronDown, Search, SunDim } from "lucide-react";
import HeaderButton from "@/components/UI/HeaderButton";

const ActionButtons = () => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );
  return (
    <div className="flex gap-2">
      <HeaderButton size="sm">
        <Search size={18} />
      </HeaderButton>
      <HeaderButton size="sm">
        {selectedCurrency}
        <ChevronDown size={12} strokeWidth={3} />
      </HeaderButton>
      <HeaderButton size="sm">
        <SunDim size={20} />
      </HeaderButton>
    </div>
  );
};

export default ActionButtons;
