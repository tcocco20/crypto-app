import MobileCharts from "./MobileCharts";
import DesktopCharts from "./DesktopCharts";
import { useEffect, useRef, useState } from "react";
import actions from "@/actions";
import utils from "@/utils";
import { type IndividualCoin } from "@/lib/types/IndividualCoin";

interface CompareChartsProps {
  coinId: string;
}

const CompareCharts = ({ coinId }: CompareChartsProps) => {
  const [selectedCoin, setSelectedCoin] = useState<
    IndividualCoin | undefined
  >();
  const priceData = useRef<{ date: Date; price: number; volume: number }[]>([]);

  let coinPrice = 0;

  useEffect(() => {
    const fetchCoin = async () => {
      const coin = await actions.getCoinById(coinId);
      const fetchedPriceData = await actions.getCoinHistoricalPriceData(coinId);

      priceData.current = utils.convertHistoricalData(fetchedPriceData);

      setSelectedCoin(coin);
    };

    fetchCoin();
  }, [coinId]);

  if (
    selectedCoin &&
    utils.isPropertyType(selectedCoin.market_data.current_price, "usd")
  ) {
    coinPrice = selectedCoin?.market_data.current_price.usd;
  }

  return (
    <>
      <MobileCharts
        priceData={priceData.current}
        selectedCoin={selectedCoin}
        coinPrice={coinPrice}
      />
      <DesktopCharts />
    </>
  );
};

export default CompareCharts;
