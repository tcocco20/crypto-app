export interface SearchQueryResponse {
  coins: {
    id: string;
    name: string;
    api_symbol: string;
    symbol: string;
    market_cap_rank: number;
    thumb: string;
    large: string;
  }[];
  exchanges: unknown[];
  icos: unknown[];
  nfts: unknown[];
}
