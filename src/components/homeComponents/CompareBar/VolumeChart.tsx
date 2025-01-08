import Card from "@/components/UI/Card";
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

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface VolumeChartProps {
  volumeData: {
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

const VolumeChart = ({ volumeData, secondCoinData }: VolumeChartProps) => {
  const labels = volumeData.map((data) => data.date);
  const volumes = volumeData.map((data) => data.volume);
  const secondCoinVolumes = secondCoinData.map((data) => data.volume);

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
      label: "Second Coin Volume",
      data: secondCoinVolumes,
      borderColor: "#c579ff",
      backgroundColor: "#c579ff",
    });
  }

  return (
    <Card className="p-4 flex flex-col gap-2">
      <p className="font-medium text-lg">Volume 24h</p>
      <p className="text-xs text-gray-400">{new Date().toDateString()}</p>
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
    </Card>
  );
};

export default VolumeChart;
