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
      <HeaderButton>
        <Search size={18} />
      </HeaderButton>
      <HeaderButton>
        {selectedCurrency}
        <ChevronDown size={13} />
      </HeaderButton>
      <HeaderButton>
        <SunDim size={20} />
      </HeaderButton>
    </div>
  );
};

export default ActionButtons;
