"use server";

import { coingeckoFetch } from "@/utils/coingeckoFetch";
import { parseIndividualCoinData } from "@/utils/parseIndividualCoinData";
import { IndividualCoinResponse } from "@/utils/types/IndividualCoinResponse";

export async function getCoinById(id: string) {
  const url = `https://api.coingecko.com/api/v3/coins/${id}?localization=false&tickers=false&community_data=false&developer_data=false`;

  const response = await coingeckoFetch<IndividualCoinResponse>({ url });
  return parseIndividualCoinData(response.body);
}
