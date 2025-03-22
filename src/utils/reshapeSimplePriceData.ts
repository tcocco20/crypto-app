import { SimplePriceData } from "@/lib/types/SimplePriceData";
import { SimplePriceDataResponse } from "./types/SimplePriceDataResponse";

export const reshapeSimplePriceData = (
  priceData: SimplePriceDataResponse,
  selectedCurrency: string
): {
  [key: string]: SimplePriceData;
} => {
  const reshapedData: { [key: string]: SimplePriceData } = {};

  for (const key in priceData) {
    const data = priceData[key];
    reshapedData[key] = {
      price: data[selectedCurrency],
      marketCap: data[`${selectedCurrency}_market_cap`],
      totalVolume: data[`${selectedCurrency}_24h_vol`],
      change24h: data[`${selectedCurrency}_24h_change`],
    };
  }

  return reshapedData;
};
