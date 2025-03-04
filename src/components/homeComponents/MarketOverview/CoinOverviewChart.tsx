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
  containerClassName?: string;
}

ChartJS.register(
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const CoinOverviewChart = ({
  coin,
  containerClassName,
}: CoinOverviewChartProps) => {
  const labels = coin.sparkline_in_7d!.price.map((_, i) => i);
  const priceUp = coin.price_change_percentage_7d_in_currency > 0;
  const priceUpColor = "#00e1d5";
  const priceDownColor = "#ec4899";

  return (
    <div
      className={"w-1/3 md:w-full pointer-events-none " + containerClassName}
    >
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
          layout: {
            autoPadding: false,
            padding: -5,
          },
        }}
      />
    </div>
  );
};

export default CoinOverviewChart;
