import { type HistoricalPriceDataResponse } from "@/lib/types/HistoricalPriceDataResponse";
import { formatChartDate } from "./formatChartDate";

export const reshapeHistoricalData = (data: HistoricalPriceDataResponse) => {
  const reorganizedData = {
    prices: data.prices,
    volumes: data.total_volumes,
  };

  const reshapedData = reorganizedData.prices.map((price, index) => {
    if (index < 24) {
      const volume = Math.abs(
        reorganizedData.volumes[index][1] -
          reorganizedData.volumes[index + 24][1]
      );

      const date = formatChartDate(price[0]);

      return { price: price[1], volume: volume, date: date };
    }
  });

  return reshapedData.filter((data) => data !== undefined);
};
