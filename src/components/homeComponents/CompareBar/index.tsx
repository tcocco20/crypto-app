"use client";
import { ChartLine, X } from "lucide-react";
import CoinSelector from "./CoinSelector";
import { useState } from "react";
import { type ListCoin } from "@/lib/types/ListCoin";
import CompareCharts from "./CompareCharts";

interface CompareBarProps {
  coins: ListCoin[];
}

const CompareBar = ({ coins }: CompareBarProps) => {
  const [compareModeSelected, setCompareModeSelected] =
    useState<boolean>(false);
  const [selectedCoin, setSelectedCoin] = useState<string>("btc");
  const [secondSelectedCoin, setSecondSelectedCoin] = useState<string>("");

  return (
    <section className="my-5 dark:text-white flex flex-col gap-4">
      <div className="flex justify-between items-center text-xs font-light">
        <p>Select the currency to view statistics</p>
        <button
          onClick={() => setCompareModeSelected((prev) => !prev)}
          className="p-3 bg-white dark:bg-violet-900/40 rounded-md flex items-center gap-1 active:opacity-50 transition-opacity duration-50"
        >
          {compareModeSelected ? <X size={13} /> : <ChartLine size={16} />}
          <span>{compareModeSelected ? "Exit Compare" : "Compare"}</span>
        </button>
      </div>
      <CoinSelector
        coinsList={coins}
        compareModeSelected={compareModeSelected}
        selectedCoin={selectedCoin}
        setSelectedCoin={setSelectedCoin}
        secondSelectedCoin={secondSelectedCoin}
        setSecondSelectedCoin={setSecondSelectedCoin}
      />
      <CompareCharts />
    </section>
  );
};

export default CompareBar;
