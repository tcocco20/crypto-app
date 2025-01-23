import MobileCharts from "./MobileCharts";
import DesktopCharts from "./DesktopCharts";
import { useEffect, useState } from "react";
import actions from "@/actions";
import utils from "@/utils";
import { type IndividualCoin } from "@/lib/types/IndividualCoin";
import { useCompareBarContext } from "@/context/CompareBarContext/useCompareBarContext";

const CompareCharts = () => {
  const { firstCoinId, selectedTimeFrame, secondCoinId } =
    useCompareBarContext();
  const [selectedCoin, setSelectedCoin] = useState<
    IndividualCoin | undefined
  >();
  const [secondCoin, setSecondCoin] = useState<IndividualCoin | undefined>();
  const [coinData, setCoinData] = useState<
    { date: string; price: number; volume: number }[]
  >([]);
  const [secondCoinData, setSecondCoinData] = useState<
    { date: string; price: number; volume: number }[]
  >([]);

  let coinPrice = 0;

  useEffect(() => {
    const fetchCoinData = async () => {
      const firstCoin = await actions.getCoinHistoricalPriceData(
        firstCoinId,
        "usd",
        selectedTimeFrame
      );
      setCoinData(firstCoin);

      if (secondCoinId) {
        const secondCoin = await actions.getCoinHistoricalPriceData(
          secondCoinId,
          "usd",
          selectedTimeFrame
        );
        setSecondCoinData(secondCoin);
      } else {
        setSecondCoinData([]);
      }
    };

    fetchCoinData();
  }, [firstCoinId, selectedTimeFrame, secondCoinId]);

  useEffect(() => {
    const fetchSelectedCoin = async () => {
      if (!secondCoinId) {
        const coin = await actions.getCoinById(firstCoinId);
        setSelectedCoin(coin);

        if (secondCoin) {
          setSecondCoin(undefined);
        }
      } else {
        const coin = await actions.getCoinById(secondCoinId);
        setSecondCoin(coin);
      }
    };

    fetchSelectedCoin();
  }, [firstCoinId, secondCoinId, secondCoin]);

  if (
    selectedCoin &&
    utils.isPropertyType(selectedCoin.market_data.current_price, "usd")
  ) {
    coinPrice = selectedCoin?.market_data.current_price.usd;
  }

  return (
    <>
      <MobileCharts
        data={coinData}
        selectedCoin={selectedCoin}
        secondCoin={secondCoin}
        coinPrice={coinPrice}
        secondCoinData={secondCoinData}
      />
      <DesktopCharts />
    </>
  );
};

export default CompareCharts;
