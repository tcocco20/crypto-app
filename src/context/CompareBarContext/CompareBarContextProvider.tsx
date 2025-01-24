"use client";

import actions from "@/actions";
import { type CoinHistoricalData } from "@/lib/types/CoinHistoricalData";
import { type ListCoin } from "@/lib/types/ListCoin";
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
  firstCoin: ListCoin | undefined;
  updateFirstCoin: (coin: ListCoin) => void;
  secondCoin: ListCoin | undefined;
  updateSecondCoin: (coin: ListCoin) => void;
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
  const [firstCoin, setFirstCoin] = useState<ListCoin | undefined>();
  const [secondCoin, setSecondCoin] = useState<ListCoin | undefined>();
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
    if (!compareModeSelected) {
      setSecondCoinId(undefined);
      setSecondCoin(undefined);
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
