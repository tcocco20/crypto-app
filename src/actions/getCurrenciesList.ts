"use server";

import { coingeckoFetch } from "@/utils/coingeckoFetch";
import { CurrencyListResponse } from "@/utils/types/CurrencyListResponse";

export const getCurrenciesList = async () => {
  const response = await coingeckoFetch<CurrencyListResponse>({
    url: "https://api.coingecko.com/api/v3/simple/supported_vs_currencies",
  });

  return response.body;
};
