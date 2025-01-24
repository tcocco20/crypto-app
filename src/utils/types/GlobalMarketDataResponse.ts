import { MarketDataArray } from "./MarketDataArray";

export interface GlobalMarketDataResponse {
  data: CoinGeckoGlobalMarketData;
}

export interface CoinGeckoGlobalMarketData {
  active_cryptocurrencies: number;
  upcoming_icos: number;
  ongoing_icos: number;
  ended_icos: number;
  markets: number;
  total_market_cap: MarketDataArray;
  total_volume: MarketDataArray;
  market_cap_percentage: MarketDataArray;
  market_cap_change_percentage_24h_usd: number;
  updated_at: number;
}
