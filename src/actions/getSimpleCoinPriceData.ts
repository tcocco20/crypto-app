"use server";

import { coingeckoFetch } from "@/utils/coingeckoFetch";
import { reshapeSimplePriceData } from "@/utils/reshapeSimplePriceData";
import { type SimplePriceDataResponse } from "@/utils/types/SimplePriceDataResponse";

export const getSimpleCoinPriceData = async (
  coins: string | string[],
  currency: string
) => {
  const response = await coingeckoFetch<SimplePriceDataResponse>({
    url: `https://api.coingecko.com/api/v3/simple/price?ids=${coins}&vs_currencies=${currency}&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&precision=2`,
  });

  return reshapeSimplePriceData(response.body, currency);
};
