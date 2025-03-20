"use server";

import { coingeckoFetch } from "@/utils/coingeckoFetch";
import { type PortfolioCoinHistoricalDataResponse } from "@/utils/types/PortfolioCoinHistoricalDataResponse";

export const getCoinHistoricalPriceData = async (
  coinId: string,
  date: string
) => {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/history?date=${date}&localization=false`;

  const response = await coingeckoFetch<PortfolioCoinHistoricalDataResponse>({
    url,
  });

  return response.body.market_data.current_price;
};
