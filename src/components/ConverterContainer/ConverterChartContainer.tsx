"use client";
import { type ListCoin } from "@/lib/types/ListCoin";
import Card from "../UI/Card";
import { generateMonths } from "@/utils/generateMonths";
import actions from "@/actions";
import { useEffect, useState } from "react";
import { CoinHistoricalData } from "@/lib/types/CoinHistoricalData";
import ConverterChart from "./ConverterChart";
import { useAppSelector } from "@/lib/hooks";

interface ConverterChartProps {
  fromCurrency: { coin: ListCoin; index: number } | undefined;
  toCurrency: { coin: ListCoin; index: number } | undefined;
}

const ConverterChartContainer = ({
  fromCurrency,
  toCurrency,
}: ConverterChartProps) => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const [fromCurrencyHistoricalData, setFromCurrencyHistoricalData] =
    useState<CoinHistoricalData>();
  const [toCurrencyHistoricalData, setToCurrencyHistoricalData] =
    useState<CoinHistoricalData>();

  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );

  const monthOrder = fromCurrencyHistoricalData
    ? generateMonths(new Date(fromCurrencyHistoricalData[0].date))
    : [];

  useEffect(() => {
    const fetchData = async () => {
      const fromCurrencyHistoricalData =
        await actions.getCoinHistoricalPriceData(
          fromCurrency!.coin.id,
          selectedCurrency,
          365
        );
      setFromCurrencyHistoricalData(fromCurrencyHistoricalData);
    };

    if (fromCurrency) fetchData();
  }, [fromCurrency, selectedCurrency]);

  useEffect(() => {
    const fetchData = async () => {
      const toCurrencyHistoricalData = await actions.getCoinHistoricalPriceData(
        toCurrency!.coin.id,
        selectedCurrency,
        365
      );
      setToCurrencyHistoricalData(toCurrencyHistoricalData);
    };

    if (toCurrency) fetchData();
  }, [toCurrency, selectedCurrency]);

  if (
    fromCurrency === undefined ||
    fromCurrency.coin === undefined ||
    toCurrency === undefined ||
    toCurrency.coin === undefined
  )
    return null;

  return (
    <Card className="p-4 lg:p-6 xl:p-8 dark:text-white font-light md:rounded-lg lg:rounded-xl xl:rounded-2xl">
      <p className="md:text-lg lg:text-xl">
        {fromCurrency.coin.name} ({fromCurrency.coin.symbol.toUpperCase()}) to{" "}
        {toCurrency.coin.name} ({toCurrency.coin.symbol.toUpperCase()})
      </p>
      <ConverterChart
        title={
          fromCurrency.coin.symbol.toUpperCase() +
          " to " +
          toCurrency.coin.symbol.toUpperCase()
        }
        fromCurrencyData={fromCurrencyHistoricalData}
        toCurrencyData={toCurrencyHistoricalData}
      />
      <div className="grid grid-cols-12 text-xs md:text-sm gap-1 p-1">
        {monthOrder.map((month) => (
          <p key={months[month]} className="text-center">
            {months[month]}
          </p>
        ))}
      </div>
    </Card>
  );
};

export default ConverterChartContainer;
