"use client";
import { ChartLine } from "lucide-react";
import CoinSelector from "./CoinSelector";
import { CoinData } from "@/actions/getCoinsList";

interface CompareBarProps {
  coins: CoinData[];
}

const CompareBar = ({ coins }: CompareBarProps) => {
  return (
    <section className="my-5 dark:text-white">
      <div className="flex justify-between items-center text-xs font-light mb-5">
        <p>Select the currency to view statistics</p>
        <button className="p-3 dark:bg-violet-900/40 rounded-md flex items-center gap-1 active:opacity-50 transition-opacity duration-50">
          <ChartLine size={16} />
          <span>Compare</span>
        </button>
      </div>
      <CoinSelector coinsList={coins} />
    </section>
  );
};

export default CompareBar;
