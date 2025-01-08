import Card from "@/components/UI/Card";
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

interface PriceChartProps {
  title: string;
  price: number;
  priceData: {
    date: string;
    price: number;
    volume: number;
  }[];
  secondCoinData: {
    date: string;
    price: number;
    volume: number;
  }[];
}

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const PriceChart = ({
  title,
  price,
  priceData,
  secondCoinData,
}: PriceChartProps) => {
  const labels = priceData.map((data) => data.date);
  const prices = priceData.map((data) => data.price);
  const today = new Date();

  let secondCoinPrices: number[] = [];
  if (secondCoinData) {
    secondCoinPrices = secondCoinData.map((data) => data.price);
  }

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
      label: "Second Coin Price",
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

  return (
    <Card className="p-4 flex flex-col gap-2">
      <p className="text-sm text-gray-300">{title}</p>
      <p className="font-medium text-lg">${price}</p>
      <p className="text-xs text-gray-400">{today.toDateString()}</p>
      <div>
        <Line
          data={{
            labels: labels,
            datasets: datasets,
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
    </Card>
  );
};

export default PriceChart;
