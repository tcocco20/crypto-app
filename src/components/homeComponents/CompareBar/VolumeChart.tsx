"use client";

import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js/auto";
import { useCompareBarContext } from "@/context/CompareBarContext/useCompareBarContext";
import Card from "@/components/UI/Card";
import { useAppSelector } from "@/lib/hooks";
import { useScreenSize } from "@/hooks/useScreenSize";
import Skeleton from "react-loading-skeleton";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VolumeChart = () => {
  const { firstCoinData, secondCoinData, secondCoin, firstCoin } =
    useCompareBarContext();

  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );

  const labels = firstCoinData.map((data) => data.date);
  const volumes = firstCoinData.map((data) => data.volume);
  const secondCoinVolumes = secondCoinData.map((data) => data.volume);
  const latestVolume = labels[labels.length - 1];

  const screenSize = useScreenSize();
  const chartSkeletonHeight = screenSize === "mobile" ? 150 : 300;
  const textSkeletonWidth = screenSize === "mobile" ? 100 : 150;

  const datasets = [
    {
      label: "24h Volume",
      data: volumes,
      backgroundColor: "#8e9deb",
      borderColor: "#8e9deb",
    },
  ];

  if (secondCoinData.length > 0) {
    datasets.push({
      label: "24h Volume",
      data: secondCoinVolumes,
      borderColor: "#c579ff",
      backgroundColor: "#c579ff",
    });
  }

  const headerData =
    secondCoinData.length > 0 ? (
      <>
        <p className="font-medium text-lg">Volume 24h</p>
        <p className="text-xs text-gray-800 dark:text-gray-400">
          {latestVolume || <Skeleton width={textSkeletonWidth} />}
        </p>
      </>
    ) : (
      <>
        <p className="text-sm text-gray-700 dark:text-gray-300">Volume 24h</p>
        <p className="font-medium text-lg">
          {volumes.length ? (
            `${volumes[volumes.length - 1]} ${selectedCurrency.toUpperCase()}`
          ) : (
            <Skeleton width={textSkeletonWidth} />
          )}
        </p>
        <p className="text-xs text-gray-800 dark:text-gray-400">
          {latestVolume || <Skeleton width={textSkeletonWidth} />}
        </p>
      </>
    );

  return (
    <Card className="p-4 flex flex-col gap-2 md:flex-1">
      {headerData}
      {volumes.length ? (
        <Bar
          data={{
            labels,
            datasets,
          }}
          options={{
            scales: {
              y: {
                ticks: {
                  display: false,
                },
                grid: {
                  display: false,
                },
              },
              x: {
                ticks: {
                  display: false,
                },
                grid: {
                  display: false,
                },
              },
            },
            plugins: {
              legend: {
                display: false,
              },
            },
          }}
        />
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

export default VolumeChart;
