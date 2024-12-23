"use client";
import { useEffect, useRef, useState } from "react";
import PriceChart from "./PriceChart";
import VolumeChart from "./VolumeChart";
import SelectableWrapper from "@/components/UI/SelectableWrapper";
import { ChevronLeft, ChevronRight } from "lucide-react";
import actions from "@/actions";
import { type IndividualCoin } from "@/lib/types/IndividualCoin";
import utils from "@/utils";

interface MobileChartsProps {
  selectedCoinId: string;
}

const MobileCharts = ({ selectedCoinId }: MobileChartsProps) => {
  const [selectedChart, setSelectedChart] = useState("price");
  const [selectedCoin, setSelectedCoin] = useState<
    IndividualCoin | undefined
  >();
  const priceData = useRef<{ date: Date; price: number }[]>([]);

  let coinPrice = 0;

  if (
    selectedCoin &&
    utils.isPropertyType(selectedCoin.market_data.current_price, "usd")
  ) {
    coinPrice = selectedCoin?.market_data.current_price.usd;
  }

  useEffect(() => {
    const fetchCoin = async () => {
      const coin = await actions.getCoinById(selectedCoinId);
      const fetchedPriceData = await actions.getCoinHistoricalPriceData(
        selectedCoinId
      );

      priceData.current = utils.convertHistoricalData(fetchedPriceData);

      setSelectedCoin(coin);
    };

    fetchCoin();
  }, [selectedCoinId]);

  const displayChart =
    selectedChart === "price" ? (
      <PriceChart
        title={`${selectedCoin?.name} (${selectedCoin?.symbol.toUpperCase()})`}
        price={coinPrice}
        date={new Date().toDateString()}
        priceData={priceData.current}
      />
    ) : (
      <VolumeChart />
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
      {displayChart}
    </div>
  );
};

export default MobileCharts;
