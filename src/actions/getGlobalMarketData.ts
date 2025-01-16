"use server";

import { coingeckoFetch } from "@/utils/coingeckoFetch";
import { GlobalMarketDataRequest } from "@/utils/types/GlobalMarketDataRequest";

export const getGlobalMarketData = async () => {
  const response = await coingeckoFetch<GlobalMarketDataRequest>({
    baseUrl: "https://api.coingecko.com/api/v3/global",
  });

  console.log(response);

  return undefined;
};
