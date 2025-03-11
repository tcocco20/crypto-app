import { SearchResult } from "@/lib/types/SearchResult";
import { type SearchQueryResponse } from "./types/SearchQueryResponse";

export const parseSearchResults = (data: SearchQueryResponse) => {
  return data.coins.map((coin) => ({
    name: coin.name,
    id: coin.id,
    image: coin.thumb
  })) as SearchResult[];
};
