import { HistoricalPriceDataResponse } from "@/lib/types/HistoricalPriceDataResponse";

export const convertHistoricalData = (data: HistoricalPriceDataResponse) => {
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
      return { price: price[1], volume: volume, date: new Date(price[0]) };
    }
  });

  return reshapedData.filter((data) => data !== undefined);
};
