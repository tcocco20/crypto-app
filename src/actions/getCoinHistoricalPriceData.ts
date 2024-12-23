"use server";

import { type HistoricalPriceDataResponse } from "@/lib/types/HistoricalPriceDataResponse";

export const getCoinHistoricalPriceData = async (
  id: string,
  currency = "usd",
  days = 1
) => {
  const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}&precision=5`;
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

  return data;
};
