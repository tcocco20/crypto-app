export interface GlobalMarketDataResponse {
  active_cryptocurrencies: number;
  upcoming_icos: number;
  ongoing_icos: number;
  ended_icos: number;
  markets: number;
  total_market_cap: TotalMarketCap;
  total_volume: TotalMarketCap;
  market_cap_percentage: MarketCapPercentage;
  market_cap_change_percentage_24h_usd: number;
  updated_at: number;
}

interface MarketCapPercentage {
  [key: string]: number;
}

interface TotalMarketCap {
  [key: string]: number;
}
