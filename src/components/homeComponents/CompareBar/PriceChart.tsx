import Card from "@/components/UI/Card";
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  // Title,
  Tooltip,
  // Legend,
} from "chart.js/auto";

interface PriceChartProps {
  title: string;
  price: number;
  date: string;
  priceData: {
    date: Date;
    price: number;
  }[];
}

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  // Title,
  Tooltip,
  // Legend
);

const PriceChart = ({ title, price, date, priceData }: PriceChartProps) => {
  const labels = priceData.map((data) => data.date.toUTCString());
  const prices = priceData.map((data) => data.price);
  return (
    <Card className="p-4 flex flex-col gap-2">
      <p className="text-sm text-gray-300">{title}</p>
      <p className="font-medium text-lg">${price}</p>
      <p className="text-xs text-gray-400">{date}</p>
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: "Price",
              data: prices,
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
