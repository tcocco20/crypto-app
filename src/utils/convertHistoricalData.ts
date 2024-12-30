import { HistoricalPriceDataResponse } from "@/lib/types/HistoricalPriceDataResponse";

export const convertHistoricalData = (data: HistoricalPriceDataResponse) => {
  const filteredData = data.prices.filter((price, index) => {
    return !(index % 6);
  });
  return filteredData.map((price) => {
    return {
      date: new Date(price[0]),
      price: price[1],
    };
  });
};
