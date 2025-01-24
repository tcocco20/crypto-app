"use server";

import { coingeckoFetch } from "@/utils/coingeckoFetch";
import { parseCoinsListResponse } from "@/utils/parseCoinsListResponse";
import { CoinsListResponse } from "@/utils/types/CoinsListResponse";

export async function getCoinsList(
  currency = "usd",
  page = 1,
  sparkline = false
) {
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&category=layer-1&order=market_cap_desc&per_page=50&page=${page}${
    sparkline ? "&sparkline=true" : ""
  }&price_change_percentage=1h%2C24h%2C7d`;

  const response = await coingeckoFetch<CoinsListResponse>({ url });

  return parseCoinsListResponse(response.body);
}
