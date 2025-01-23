"use client";
import { useState } from "react";
import PriceChart from "./PriceChart";
import VolumeChart from "./VolumeChart";
import SelectableWrapper from "@/components/UI/SelectableWrapper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "@/components/UI/Card";
import { useCompareBarContext } from "@/context/CompareBarContext/useCompareBarContext";

const MobileCharts = () => {
  const [selectedChart, setSelectedChart] = useState("price");

  const { firstCoin, secondCoin } = useCompareBarContext();

  const displayChart =
    selectedChart === "price" ? <PriceChart /> : <VolumeChart />;

  const disabledClasses =
    "bg-gray-400 dark:bg-gray-700 opacity-45 border border-gray-700 dark:border-gray-400 rounded-full pointer-events-none";

  const handleChartChange = () => {
    setSelectedChart(selectedChart === "price" ? "volume" : "price");
  };

  return (
    <div className="md:hidden relative">
      <div className="absolute right-4 top-4 flex items-center gap-2">
        <SelectableWrapper selected={selectedChart === "volume"} rounded>
          <button
            className={`p-2 ${selectedChart === "price" && disabledClasses}`}
            onClick={handleChartChange}
          >
            <ChevronLeft size={16} />
          </button>
        </SelectableWrapper>
        <SelectableWrapper selected={selectedChart === "price"} rounded>
          <button
            className={`p-2 ${selectedChart === "volume" && disabledClasses}`}
            onClick={handleChartChange}
          >
            <ChevronRight size={16} />
          </button>
        </SelectableWrapper>
      </div>
      <Card className="p-4 flex flex-col gap-2">
        {displayChart}
        {secondCoin && (
          <div className="flex justify-between">
            <div className="flex gap-2">
              <div className="py-1 px-3 bg-indigo-400 rounded-sm" />
              <p>{firstCoin!.name}</p>
            </div>
            <div className="flex gap-2">
              <div className="py-1 px-3 bg-purple-400 rounded-sm" />
              <p>{secondCoin.name}</p>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
};

export default MobileCharts;
