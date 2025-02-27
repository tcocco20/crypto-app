"use server";

import { coingeckoFetch } from "@/utils/coingeckoFetch";
import { parseSearchResults } from "@/utils/parseSearchResults";
import { SearchQueryResponse } from "@/utils/types/SearchQueryResponse";

export const getSearchResults = async (queryString: string) => {
  const response = await coingeckoFetch<SearchQueryResponse>({
    url: `https://api.coingecko.com/api/v3/search?query=${queryString}`,
  });

  return parseSearchResults(response.body);
};
