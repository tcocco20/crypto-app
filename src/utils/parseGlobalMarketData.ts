import { GlobalMarketData } from "@/lib/types/GlobalMarketData";
import { GlobalMarketDataResponse } from "./types/GlobalMarketDataResponse";

export function parseGlobalMarketData(
  data: GlobalMarketDataResponse
): GlobalMarketData {
  return {
    coins: data.active_cryptocurrencies,
    markets: data.markets,
    totalMarketCap: data.total_market_cap,
    totalVolume: data.total_volume,
    bitcoinMarketCapPercentage: data.market_cap_percentage.btc,
    ethereumMarketCapPercentage: data.market_cap_percentage.eth,
  };
}
