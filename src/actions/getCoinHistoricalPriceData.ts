"use server";

import { coingeckoFetch } from "@/utils/coingeckoFetch";
import { convertHistoricalData } from "@/utils/convertHistoricalData";
import { CoinHistoricalDataResponse } from "@/utils/types/CoinHistoricalDataResponse";

export const getCoinHistoricalPriceData = async (
  id: string,
  currency = "usd",
  days = 1
) => {
  const url = `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}${
    days > 15 && "&interval=daily"
  }&precision=5`;

  const response = await coingeckoFetch<CoinHistoricalDataResponse>({ url });

  return convertHistoricalData(response.body);
};
