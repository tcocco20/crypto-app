import MobileCharts from "./MobileCharts";
import DesktopCharts from "./DesktopCharts";
import { useEffect, useRef, useState } from "react";
import actions from "@/actions";
import utils from "@/utils";
import { type IndividualCoin } from "@/lib/types/IndividualCoin";

interface CompareChartsProps {
  coinId: string;
  timeFrame: number;
}

const CompareCharts = ({ coinId, timeFrame }: CompareChartsProps) => {
  const [selectedCoin, setSelectedCoin] = useState<
    IndividualCoin | undefined
  >();
  const data = useRef<{ date: string; price: number; volume: number }[]>([]);

  let coinPrice = 0;

  useEffect(() => {
    const fetchCoin = async () => {
      const coin = await actions.getCoinById(coinId);
      data.current = await actions.getCoinHistoricalPriceData(
        coinId,
        "usd",
        timeFrame
      );
      setSelectedCoin(coin);
    };

    fetchCoin();
  }, [coinId, timeFrame]);

  if (
    selectedCoin &&
    utils.isPropertyType(selectedCoin.market_data.current_price, "usd")
  ) {
    coinPrice = selectedCoin?.market_data.current_price.usd;
  }

  return (
    <>
      <MobileCharts
        data={data.current}
        selectedCoin={selectedCoin}
        coinPrice={coinPrice}
      />
      <DesktopCharts />
    </>
  );
};

export default CompareCharts;
