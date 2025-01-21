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
  const labels = coin.sparkline_in_7d!.price.map((_, i) => i);
  const priceUp = coin.price_change_percentage_24h > 0;
  const priceUpColor = "#28f625";
  const priceDownColor = "#ff6465";

  return (
    <div className="w-1/3 pointer-events-none">
      <Line
        data={{
          labels: labels,
          datasets: [
            {
              label: "Price",
              data: coin.sparkline_in_7d!.price,
              borderColor: priceUp ? priceUpColor : priceDownColor,
              pointBackgroundColor: "transparent",
              pointBorderColor: "transparent",
              pointHoverBackgroundColor: priceUp
                ? priceUpColor
                : priceDownColor,
              fill: {
                target: "origin",
                above: (priceUp ? priceUpColor : priceDownColor) + "21",
              },
            },
          ],
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
