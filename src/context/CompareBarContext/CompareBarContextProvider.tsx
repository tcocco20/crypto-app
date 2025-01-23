import { IndividualCoin } from "@/lib/types/IndividualCoin";
import React, { createContext, useState, ReactNode } from "react";

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
  firstCoinData: { date: string; price: number; volume: number }[];
  updateFirstCoinData: (
    data: { date: string; price: number; volume: number }[]
  ) => void;
  secondCoinData: { date: string; price: number; volume: number }[];
  updateSecondCoinData: (
    data: { date: string; price: number; volume: number }[]
  ) => void;
}

const CompareBarContext = createContext<CompareBarContextState | undefined>(
  undefined
);

export const ComponentGroupProvider = ({
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
  const [firstCoinData, setFirstCoinData] = useState<
    { date: string; price: number; volume: number }[]
  >([]);
  const [secondCoinData, setSecondCoinData] = useState<
    { date: string; price: number; volume: number }[]
  >([]);

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
