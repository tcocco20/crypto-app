import { HistoricalPriceDataResponse } from "@/lib/types/HistoricalPriceDataResponse";

export const convertHistoricalData = (data: HistoricalPriceDataResponse) => {
  return data.prices.map((price) => {
    return {
      date: new Date(price[0]),
      price: price[1],
    };
  });
};
