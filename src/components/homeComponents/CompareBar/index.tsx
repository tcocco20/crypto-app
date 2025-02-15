"use client";
import { ChartLine, X } from "lucide-react";
import CoinSelector from "./CoinSelector";

import CompareCharts from "./CompareCharts";
import TimeFrameSelector from "./TimeFrameSelector";
import { useCompareBarContext } from "@/context/CompareBarContext/useCompareBarContext";
import { useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";

const CompareBar = () => {
  const coins = useAppSelector((state) => state.coinList.coins);
  const { compareModeSelected, updateCompareModeSelected, updateFirstCoin } =
    useCompareBarContext();

  useEffect(() => {
    updateFirstCoin(coins[0]);
  }, [coins, updateFirstCoin]);

  return (
    <section className="my-5 dark:text-white flex flex-col gap-4">
      <div className="flex justify-between items-center text-xs md:text-sm lg:text-base font-light">
        <p>Select the currency to view statistics</p>
        <button
          onClick={() => updateCompareModeSelected(!compareModeSelected)}
          className="p-3 bg-white dark:bg-violet-900/40 rounded-md flex items-center gap-1 active:opacity-50 transition-opacity duration-50"
        >
          {compareModeSelected ? <X size={13} /> : <ChartLine size={16} />}
          <span>{compareModeSelected ? "Exit Compare" : "Compare"}</span>
        </button>
      </div>
      <CoinSelector coinsList={coins} />
      <CompareCharts />
      <TimeFrameSelector />
    </section>
  );
};

export default CompareBar;
