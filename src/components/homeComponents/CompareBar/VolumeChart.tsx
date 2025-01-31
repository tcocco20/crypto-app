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

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const VolumeChart = () => {
  const { firstCoinData, secondCoinData } = useCompareBarContext();

  const labels = firstCoinData.map((data) => data.date);
  const volumes = firstCoinData.map((data) => data.volume);
  const secondCoinVolumes = secondCoinData.map((data) => data.volume);
  const latestVolume = labels[labels.length - 1];

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
          {latestVolume}
        </p>
      </>
    ) : (
      <>
        <p className="text-sm text-gray-700 dark:text-gray-300">Volume 24h</p>
        <p className="font-medium text-lg">${volumes[volumes.length - 1]}</p>
        <p className="text-xs text-gray-800 dark:text-gray-400">
          {latestVolume}
        </p>
      </>
    );

  return (
    <>
      {headerData}
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
    </>
  );
};

export default VolumeChart;
