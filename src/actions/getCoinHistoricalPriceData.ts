"use server";

import { type HistoricalPriceDataResponse } from "@/lib/types/HistoricalPriceDataResponse";
import utils from "@/utils";

export const getCoinHistoricalPriceData = async (
  id: string,
  currency = "usd",
  days = 1
) => {
  const fromTime = new Date();
  const toTime = new Date();
  toTime.setDate(toTime.getDate() - days);
  const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=${currency}&from=${fromTime}&to=1712275200&precision=5`;
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-cg-demo-api-key": process.env.API_SECRET_KEY,
    } as HeadersInit,
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error("Failed to connect to CoinGecko API");
  }

  const data: HistoricalPriceDataResponse = await response.json();

  const reshapedData = utils.convertHistoricalData(data);
  return reshapedData;
};
