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
  Legend,
} from "chart.js/auto";

interface PriceChartProps {
  title: string;
  price: number;
  date: string;
}

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const PriceChart = ({ title, price, date }: PriceChartProps) => {
  return (
    <Card className="p-4 flex flex-col gap-2">
      <p className="text-sm text-gray-300">{title}</p>
      <p className="font-medium text-lg">${price}</p>
      <p className="text-xs text-gray-400">{date}</p>
      <Line
        data={{
          labels: ["1", "2", "3", "4", "5", "6", "7"],
          datasets: [
            {
              label: "Price",
              data: [1, 3, 2, 7, 2, 4, 8],
              backgroundColor: "rgba(75,192,192,0.2)",
              borderColor: "rgba(75,192,192,1)",
            },
          ],
        }}
        options={{
          elements: {
            line: {
              tension: 0.5,
            },
          },
        }}
      />
    </Card>
  );
};

export default PriceChart;
