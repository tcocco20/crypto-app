"use client";

import actions from "@/actions";
import { CoinHistoricalData } from "@/lib/types/CoinHistoricalData";
import { IndividualCoin } from "@/lib/types/IndividualCoin";
import React, { createContext, useState, ReactNode, useEffect } from "react";

interface CompareBarContextState {
  compareModeSelected: boolean;
  updateCompareModeSelected: (value: boolean) => void;
  firstCoinId: string;
  updateFirstCoinId: (coinId: string) => void;
  secondCoinId: string | undefined;
  updateSecondCoinId: (coinId: string | undefined) => void;
  selectedTimeFrame: number;
  updateSelectedTimeFrame: (timeFrame: number) => void;
  firstCoin: IndividualCoin | undefined;
  updateFirstCoin: (coin: IndividualCoin) => void;
  secondCoin: IndividualCoin | undefined;
  updateSecondCoin: (coin: IndividualCoin) => void;
  firstCoinData: CoinHistoricalData;
  updateFirstCoinData: (data: CoinHistoricalData) => void;
  secondCoinData: CoinHistoricalData;
  updateSecondCoinData: (data: CoinHistoricalData) => void;
}

const CompareBarContext = createContext<CompareBarContextState | undefined>(
  undefined
);

export const CompareBarContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [compareModeSelected, setCompareModeSelected] = useState(false);
  const [firstCoinId, setFirstCoinId] = useState("bitcoin");
  const [secondCoinId, setSecondCoinId] = useState<string | undefined>();
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(1);
  const [firstCoin, setFirstCoin] = useState<IndividualCoin | undefined>();
  const [secondCoin, setSecondCoin] = useState<IndividualCoin | undefined>();
  const [firstCoinData, setFirstCoinData] = useState<CoinHistoricalData>([]);
  const [secondCoinData, setSecondCoinData] = useState<CoinHistoricalData>([]);

  useEffect(() => {
    const fetchCoinData = async () => {
      const firstCoinResponse = await actions.getCoinHistoricalPriceData(
        firstCoinId,
        "usd",
        selectedTimeFrame
      );
      setFirstCoinData(firstCoinResponse);

      if (secondCoinId) {
        const secondCoinResponse = await actions.getCoinHistoricalPriceData(
          secondCoinId,
          "usd",
          selectedTimeFrame
        );
        setSecondCoinData(secondCoinResponse);
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
        setFirstCoin(coin);

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

  useEffect(() => {
    if (!compareModeSelected) {
      setSecondCoinId(undefined);
    }
  }, [compareModeSelected]);

  return (
    <CompareBarContext.Provider
      value={{
        compareModeSelected,
        updateCompareModeSelected: setCompareModeSelected,
        firstCoinId,
        updateFirstCoinId: setFirstCoinId,
        secondCoinId,
        updateSecondCoinId: setSecondCoinId,
        selectedTimeFrame,
        updateSelectedTimeFrame: setSelectedTimeFrame,
        firstCoin,
        updateFirstCoin: setFirstCoin,
        secondCoin,
        updateSecondCoin: setSecondCoin,
        firstCoinData,
        updateFirstCoinData: setFirstCoinData,
        secondCoinData,
        updateSecondCoinData: setSecondCoinData,
      }}
    >
      {children}
    </CompareBarContext.Provider>
  );
};

export default CompareBarContext;
