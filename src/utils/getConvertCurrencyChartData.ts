import { CoinHistoricalData } from "@/lib/types/CoinHistoricalData";
import { convertCurrencies } from "./convertCurrencies";

export const getConvertCurrencyChartData = (
  fromCurrency: CoinHistoricalData,
  toCurrency: CoinHistoricalData
) => {
  const labels = fromCurrency.map((dataPoint) => dataPoint.date);
  const values = fromCurrency.map((dataPoint, index) => {
    return convertCurrencies(dataPoint.price, toCurrency[index].price, 1);
  });

  return { labels, values };
};
