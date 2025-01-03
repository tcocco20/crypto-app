"use server";

import { type HistoricalPriceDataResponse } from "@/lib/types/HistoricalPriceDataResponse";
import utils from "@/utils";

export const getCoinHistoricalPriceData = async (
  id: string,
  currency = "usd",
  days = 1
) => {
  const today = new Date();
  const fromTime = Math.floor(
    new Date().setDate(today.getDate() - days) / 1000
  );
  const toTime = Math.floor(today.getTime() / 1000);

  const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart/range?vs_currency=${currency}&from=${fromTime}&to=${toTime}&precision=5`;
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
