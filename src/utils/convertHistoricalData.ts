import { type CoinHistoricalData } from "@/lib/types/CoinHistoricalData";
import { formatChartDate } from "./formatChartDate";
import { type CoinHistoricalDataResponse } from "./types/CoinHistoricalDataResponse";

export const convertHistoricalData = (
  data: CoinHistoricalDataResponse
): CoinHistoricalData => {
  const reorganizedData = {
    prices: data.prices,
    volumes: data.total_volumes,
  };

  const reshapedData = reorganizedData.prices.map((price, index) => {
    const date = formatChartDate(price[0]);
    const volume = reorganizedData.volumes[index][1];

    return { price: price[1], volume, date: date };
  });

  return reshapedData.filter((data) => data !== undefined);
};
