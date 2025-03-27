"use client";
import { ChartLine, X } from "lucide-react";
import CoinSelector from "./CoinSelector";

import CompareCharts from "./CompareCharts";
import TimeFrameSelector from "./TimeFrameSelector";
import { useCompareBarContext } from "@/context/CompareBarContext/useCompareBarContext";
import { useEffect } from "react";
import { useAppSelector } from "@/lib/hooks";
import CoinSelectorSkeleton from "./CoinSelectorSkeleton";
import { SkeletonTheme } from "react-loading-skeleton";

const CompareBar = () => {
  const coins = useAppSelector((state) => state.coinList.coins);
  const { compareModeSelected, updateCompareModeSelected, updateFirstCoin } =
    useCompareBarContext();
  const darkMode = useAppSelector((state) => state.preferences.darkMode);

  const skeletonColor = darkMode ? "#202020" : "#f9f9f9";

  useEffect(() => {
    updateFirstCoin(coins[0]);
  }, [coins, updateFirstCoin]);

  return (
    <SkeletonTheme baseColor={skeletonColor} highlightColor="#444">
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
        {coins.length ? (
          <CoinSelector coinsList={coins} />
        ) : (
          <CoinSelectorSkeleton />
        )}
        <CompareCharts />
        <TimeFrameSelector />
      </section>
    </SkeletonTheme>
  );
};

export default CompareBar;
