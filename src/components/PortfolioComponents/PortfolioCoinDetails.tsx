"use client";
import { SearchResult } from "@/lib/types/SearchResult";
import { ChevronLeft } from "lucide-react";
import React from "react";
import CoinBrand from "../UI/CoinBrand";

interface PortfolioCoinDetailsProps {
  selectedCoin: SearchResult | null;
  onGoBack: () => void;
}

const PortfolioCoinDetails = ({
  selectedCoin,
  onGoBack,
}: PortfolioCoinDetailsProps) => {
  return (
    <div className="text-violet-900 bg-indigo-600/15 dark:text-white dark:bg-indigo-950 rounded-t-xl p-4 relative h-full">
      <button onClick={onGoBack} className="absolute top-4 left-4">
        <ChevronLeft size={24} />
      </button>
      <h2 className="text-xl text-center mb-4">Enter Coin Details</h2>
      {selectedCoin && (
        <CoinBrand
          name={selectedCoin.name}
          symbol={selectedCoin.symbol}
          imageUrl={selectedCoin.image}
          className="py-8"
        />
      )}
    </div>
  );
};

export default PortfolioCoinDetails;
