"use server";

import { coingeckoFetch } from "@/utils/coingeckoFetch";
import { convertHistoricalData } from "@/utils/convertHistoricalData";
import { CoinHistoricalDataResponse } from "@/utils/types/CoinHistoricalDataResponse";

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

  const response = await coingeckoFetch<CoinHistoricalDataResponse>({ url });

  return convertHistoricalData(response.body);
};
