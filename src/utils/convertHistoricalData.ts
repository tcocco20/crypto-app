import { HistoricalPriceDataResponse } from "@/lib/types/HistoricalPriceDataResponse";

export const convertHistoricalData = (
  data: HistoricalPriceDataResponse,
  singleDay = false
) => {
  const reshapedData = {
    prices: data.prices,
    volumes: data.total_volumes,
  };
  if (singleDay) {
    const filteredData = {
      prices: reshapedData.prices.filter((_, index) => {
        return !(index % 6);
      }),
      volumes: reshapedData.volumes.filter((_, index) => {
        return !(index % 6);
      }),
    };
    return filteredData.prices.map((price, index) => {
      return {
        date: new Date(price[0]),
        price: price[1],
        volume: filteredData.volumes[index][1],
      };
    });
  }

  return reshapedData.prices.map((price, index) => {
    return {
      date: new Date(price[0]),
      price: price[1],
      volume: reshapedData.volumes[index][1],
    };
  });
};
