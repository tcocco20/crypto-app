import { HistoricalPriceDataResponse } from "@/lib/types/HistoricalPriceDataResponse";
import { formatChartDate } from "./formatChartDate";

export const convertHistoricalData = (data: HistoricalPriceDataResponse) => {
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
