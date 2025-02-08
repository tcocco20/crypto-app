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
import { CoinHistoricalData } from "@/lib/types/CoinHistoricalData";
import { getConvertCurrencyChartData } from "@/utils/getConvertCurrencyChartData";

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

interface ConverterChartProps {
  fromCurrencyData: CoinHistoricalData | undefined;
  toCurrencyData: CoinHistoricalData | undefined;
  title: string;
}

const ConverterChart = ({
  fromCurrencyData,
  toCurrencyData,
  title,
}: ConverterChartProps) => {
  if (!fromCurrencyData || !toCurrencyData) return <p>Loading...</p>;

  const { labels, values } = getConvertCurrencyChartData(
    fromCurrencyData,
    toCurrencyData
  );

  const datasets = [
    {
      label: title,
      data: values,
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

  return (
    <>
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
            maintainAspectRatio: false,
          }}
        />
      </div>
    </>
  );
};

export default ConverterChart;
