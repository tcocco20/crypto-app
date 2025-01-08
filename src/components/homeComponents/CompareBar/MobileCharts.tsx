"use client";
import { useState } from "react";
import PriceChart from "./PriceChart";
import VolumeChart from "./VolumeChart";
import SelectableWrapper from "@/components/UI/SelectableWrapper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type IndividualCoin } from "@/lib/types/IndividualCoin";
import Card from "@/components/UI/Card";

interface MobileChartsProps {
  selectedCoin: IndividualCoin | undefined;
  secondCoin: IndividualCoin | undefined;
  data: { date: string; price: number; volume: number }[];
  secondCoinData: { date: string; price: number; volume: number }[];
  coinPrice: number;
}

const MobileCharts = ({
  selectedCoin,
  secondCoin,
  data,
  coinPrice,
  secondCoinData,
}: MobileChartsProps) => {
  const [selectedChart, setSelectedChart] = useState("price");

  const displayChart =
    selectedChart === "price" ? (
      <PriceChart
        title={`${selectedCoin?.name} (${selectedCoin?.symbol.toUpperCase()})`}
        secondTitle={
          secondCoin
            ? `${secondCoin?.name} (${secondCoin?.symbol.toUpperCase()})`
            : ""
        }
        price={coinPrice}
        priceData={data}
        secondCoinData={secondCoinData}
      />
    ) : (
      <VolumeChart volumeData={data} secondCoinData={secondCoinData} />
    );

  const disabledClasses =
    "bg-gray-700 opacity-45 border rounded-full pointer-events-none";

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
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="p-2 bg-indigo-400" />
            <p>{selectedCoin?.name}</p>
          </div>
          <div className="flex gap-2">
            <div className="p-2 bg-purple-400" />
            <p>{secondCoin?.name}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MobileCharts;
