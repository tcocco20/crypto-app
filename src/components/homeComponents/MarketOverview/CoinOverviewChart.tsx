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
import { ListCoin } from "@/lib/types/ListCoin";

interface CoinOverviewChartProps {
  coin: ListCoin;
}

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const CoinOverviewChart = ({ coin }: CoinOverviewChartProps) => {
  const datasets = [
    {
      label: "Price",
      data: coin.sparkline_in_7d.price,
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
    <div>
      <Line
        data={{
          labels: Array.from({ length: coin.sparkline_in_7d.price.length }),
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
    </div>
  );
};

export default CoinOverviewChart;
