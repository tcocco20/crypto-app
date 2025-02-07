"use client";
import { type ListCoin } from "@/lib/types/ListCoin";
import Card from "../UI/Card";
import { generateMonths } from "@/utils/generateMonths";
import actions from "@/actions";
import { useEffect, useState } from "react";
import { CoinHistoricalData } from "@/lib/types/CoinHistoricalData";
import ConverterChart from "./ConverterChart";

interface ConverterChartProps {
  fromCurrency: ListCoin;
  toCurrency: ListCoin;
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

  const monthOrder = fromCurrencyHistoricalData
    ? generateMonths(new Date(fromCurrencyHistoricalData[0].date))
    : [];

  useEffect(() => {
    const fetchData = async () => {
      const fromCurrencyHistoricalData =
        await actions.getCoinHistoricalPriceData(fromCurrency.id, "usd", 365);
      setFromCurrencyHistoricalData(fromCurrencyHistoricalData);
    };

    fetchData();
  }, [fromCurrency]);

  useEffect(() => {
    const fetchData = async () => {
      const toCurrencyHistoricalData = await actions.getCoinHistoricalPriceData(
        toCurrency.id,
        "usd",
        365
      );
      setToCurrencyHistoricalData(toCurrencyHistoricalData);
    };

    fetchData();
  }, [toCurrency]);

  return (
    <Card className="p-4 dark:text-white font-light">
      <p>
        {fromCurrency.name} ({fromCurrency.symbol.toUpperCase()}) to{" "}
        {toCurrency.name} ({toCurrency.symbol.toUpperCase()})
      </p>
      <ConverterChart
        title={
          fromCurrency.symbol.toUpperCase() +
          " to " +
          toCurrency.symbol.toUpperCase()
        }
        fromCurrencyData={fromCurrencyHistoricalData}
        toCurrencyData={toCurrencyHistoricalData}
      />
      <div className="grid grid-cols-12 text-xs gap-1">
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
