"use server";

import { coingeckoFetch } from "@/utils/coingeckoFetch";
import { parseGlobalMarketData } from "@/utils/parseGlobalMarketData";
import { GlobalMarketDataRequest } from "@/utils/types/GlobalMarketDataRequest";

export const getGlobalMarketData = async () => {
  const response = await coingeckoFetch<GlobalMarketDataRequest>({
    baseUrl: "https://api.coingecko.com/api/v3/global",
  });

  return parseGlobalMarketData(response.body.data);
};
