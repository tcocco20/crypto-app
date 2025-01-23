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

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const PriceChart = () => {
  const { firstCoinData, secondCoinData, firstCoin } = useCompareBarContext();

  const labels = firstCoinData.map((data) => data.date);
  const prices = firstCoinData.map((data) => data.price);
  const latestPrice = labels[labels.length - 1];
  const secondCoinPrices = secondCoinData.map((data) => data.price);

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
          {latestPrice}
        </p>
      </>
    ) : (
      <>
        <p className="text-sm text-gray-700 dark:text-gray-300">
          {firstCoin?.name} ({firstCoin?.symbol.toUpperCase()})
        </p>
        <p className="font-medium text-lg">${firstCoin?.current_price}</p>
        <p className="text-xs text-gray-800 dark:text-gray-400">
          {latestPrice}
        </p>
      </>
    );

  return (
    <>
      {headerData}
      <div>
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
          }}
        />
        <div className="flex justify-between">
          <p className="text-xs">{labels[0]}</p>
          <p className="text-xs">{labels[labels.length - 1]}</p>
        </div>
      </div>
    </>
  );
};

export default PriceChart;
