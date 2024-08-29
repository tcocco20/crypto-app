"use client";
import { useAppSelector } from "@/lib/hooks";
import { ChevronDown, Search, SunDim } from "lucide-react";

const ActionButtons = () => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );
  return (
    <div className="flex gap-2">
      <button className="p-2 rounded text-white bg-violet-950 border border-gray-700/80">
        <Search size={18} />
      </button>
      <button className="p-2 rounded text-white text-xs bg-violet-950 border border-gray-700/80 flex gap-2 items-center">
        {selectedCurrency}
        <ChevronDown size={13} />
      </button>
      <button className="p-2 rounded text-white bg-violet-950 border border-gray-700/80">
        <SunDim size={20} />
      </button>
    </div>
  );
};

export default ActionButtons;
