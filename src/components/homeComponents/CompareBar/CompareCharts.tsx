import MobileCharts from "./MobileCharts";
import DesktopCharts from "./DesktopCharts";
import { useEffect, useRef, useState } from "react";
import actions from "@/actions";
import utils from "@/utils";
import { type IndividualCoin } from "@/lib/types/IndividualCoin";

interface CompareChartsProps {
  coinId: string;
  timeFrame: number;
  secondCoinId?: string;
}

const CompareCharts = ({
  coinId,
  timeFrame,
  secondCoinId,
}: CompareChartsProps) => {
  const [selectedCoin, setSelectedCoin] = useState<
    IndividualCoin | undefined
  >();
  const coinData = useRef<{ date: string; price: number; volume: number }[]>(
    []
  );
  const secondCoinData = useRef<
    { date: string; price: number; volume: number }[] | undefined
  >([]);

  let coinPrice = 0;

  useEffect(() => {
    const fetchCoinData = async () => {
      coinData.current = await actions.getCoinHistoricalPriceData(
        coinId,
        "usd",
        timeFrame
      );

      if (secondCoinId) {
        secondCoinData.current = await actions.getCoinHistoricalPriceData(
          secondCoinId,
          "usd",
          timeFrame
        );
      }

      if (secondCoinId === undefined) {
        secondCoinData.current = undefined;
      }
    };

    fetchCoinData();
  }, [coinId, timeFrame, secondCoinId]);

  useEffect(() => {
    const fetchSelectedCoin = async () => {
      if (!secondCoinId) {
        const coin = await actions.getCoinById(coinId);
        setSelectedCoin(coin);
      }
    };

    fetchSelectedCoin();
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
        data={coinData.current}
        selectedCoin={selectedCoin}
        coinPrice={coinPrice}
        secondCoinData={secondCoinData.current}
      />
      <DesktopCharts />
    </>
  );
};

export default CompareCharts;
