"use server";

import { coingeckoFetch } from "@/utils/coingeckoFetch";
import { parseCoinsListResponse } from "@/utils/parseCoinsListResponse";
import { CoinsListRequest } from "@/utils/types/CoinsListRequest";

export async function getCoinsList(
  currency = "usd",
  page = 1,
  sparkline = false
) {
  const response = await coingeckoFetch<CoinsListRequest>({
    baseUrl: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&category=layer-1&order=market_cap_desc&per_page=50&page=${page}${
      sparkline ? "&sparkline=true" : ""
    }&price_change_percentage=1h%2C24h%2C7d`,
    variables: {
      currency,
      page,
      sparkline,
    },
  });

  return parseCoinsListResponse(response.body);
}
