"use client";
import { useAppSelector } from "@/lib/hooks";
import { Search, SunDim } from "lucide-react";

const ActionButtons = () => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );
  return (
    <div className="flex gap-2">
      <button className="p-2 rounded-sm text-white">
        <Search />
      </button>
      <button className="p-2 rounded-sm text-white">{selectedCurrency}</button>
      <button className="p-2 rounded-sm text-white">
        <SunDim />
      </button>
    </div>
  );
};

export default ActionButtons;
