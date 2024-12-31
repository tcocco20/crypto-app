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
    date: Date;
    price: number;
    volume: number;
  }[];
}

const VolumeChart = ({ volumeData }: VolumeChartProps) => {
  const labels = volumeData.map(
    (data) => data.date.getHours() + ":" + data.date.getMinutes()
  );
  const volumes = volumeData.map((data) => data.volume);
  return (
    <Card className="p-4 flex flex-col gap-2">
      <p className="font-medium text-lg">Volume 24h</p>
      <p className="text-xs text-gray-400">{new Date().toDateString()}</p>
      <Bar
        data={{
          labels,
          datasets: [
            {
              label: "24h Volume",
              data: volumes,
              backgroundColor: "rgba(75,192,192)",
              borderColor: "rgba(75,192,192,1)",
            },
          ],
        }}
        options={{
          scales: {
            y: {
              ticks: {
                display: false,
              },
              beginAtZero: true,
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
