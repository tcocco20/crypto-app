"use client";

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from "chart.js/auto";
import { useCompareBarContext } from "@/context/CompareBarContext/useCompareBarContext";
import Card from "@/components/UI/Card";
import { useAppSelector } from "@/lib/hooks";
import Skeleton from "react-loading-skeleton";
import { useScreenSize } from "@/hooks/useScreenSize";
import { getCurrencyFormatter } from "@/utils/formatCurrency";

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const PriceChart = () => {
  const { firstCoinData, secondCoinData, firstCoin, secondCoin } =
    useCompareBarContext();

  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );
  const { formatter, supported } = getCurrencyFormatter(selectedCurrency);

  const labels = firstCoinData.map((data) => data.date);
  const prices = firstCoinData.map((data) => data.price);
  const latestPriceDate = labels[labels.length - 1];
  const secondCoinPrices = secondCoinData.map((data) => data.price);

  const screenSize = useScreenSize();
  const chartSkeletonHeight = screenSize === "mobile" ? 150 : 300;
  const textSkeletonWidth = screenSize === "mobile" ? 100 : 150;

  const datasets = [
    {
      label: "Price",
      data: prices,
      borderColor: "#8e9deb",
      pointBackgroundColor: "transparent",
      pointBorderColor: "transparent",
      pointHoverBackgroundColor: "#8e9deb",
      fill: {
        target: "origin",
        above: "#8e9eeb21",
      },
    },
  ];

  if (secondCoinData.length > 0) {
    datasets.push({
      label: "Price",
      data: secondCoinPrices,
      borderColor: "#c579ff",
      pointBackgroundColor: "transparent",
      pointBorderColor: "transparent",
      pointHoverBackgroundColor: "#c579ff",
      fill: {
        target: "origin",
        above: "#c579ff21",
      },
    });
  }

  const headerData =
    secondCoinData.length > 0 ? (
      <>
        <p className="font-medium text-lg">Price</p>
        <p className="text-xs text-gray-800 dark:text-gray-400">
          {latestPriceDate}
        </p>
      </>
    ) : (
      <>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {firstCoin ? (
            `${firstCoin.name} (${firstCoin?.symbol.toUpperCase()})`
          ) : (
            <Skeleton width={textSkeletonWidth} />
          )}
        </p>
        <p className="font-medium text-lg">
          {firstCoin ? (
            `${formatter.format(firstCoin.current_price)} ${
              !supported ? selectedCurrency.toUpperCase() : ""
            }`
          ) : (
            <Skeleton width={textSkeletonWidth} />
          )}
        </p>
        <p className="text-xs text-gray-800 dark:text-gray-400">
          {latestPriceDate || <Skeleton width={textSkeletonWidth} />}
        </p>
      </>
    );

  return (
    <Card className="p-4 flex flex-col gap-2 md:flex-1">
      {headerData}
      {prices.length ? (
        <div className="w-full">
          <Line
            data={{
              labels: labels,
              datasets,
            }}
            options={{
              elements: {
                line: {
                  tension: 0.5,
                },
              },
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  ticks: {
                    display: false,
                  },
                  grid: {
                    display: false,
                  },
                },
                y: {
                  ticks: {
                    display: false,
                  },
                  grid: {
                    display: false,
                  },
                },
              },
              layout: {
                autoPadding: false,
                padding: -4,
              },
            }}
          />
          <div className="flex justify-between">
            <p className="text-xs">{labels[0]}</p>
            <p className="text-xs">{labels[labels.length - 1]}</p>
          </div>
        </div>
      ) : (
        <Skeleton height={chartSkeletonHeight} />
      )}
      {secondCoin && (
        <div className="flex justify-between">
          <div className="flex gap-2">
            <div className="py-1 px-3 bg-indigo-400 rounded-sm" />
            <p>{firstCoin!.name}</p>
          </div>
          <div className="flex gap-2">
            <div className="py-1 px-3 bg-purple-400 rounded-sm" />
            <p>{secondCoin.name}</p>
          </div>
        </div>
      )}
    </Card>
  );
};

export default PriceChart;
