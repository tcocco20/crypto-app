"use server";

import { coingeckoFetch } from "@/utils/coingeckoFetch";
import { parseGlobalMarketData } from "@/utils/parseGlobalMarketData";
import { GlobalMarketDataResponse } from "@/utils/types/GlobalMarketDataResponse";

export const getGlobalMarketData = async () => {
  const response = await coingeckoFetch<GlobalMarketDataResponse>({
    url: "https://api.coingecko.com/api/v3/global",
  });

  return parseGlobalMarketData(response.body.data);
};
