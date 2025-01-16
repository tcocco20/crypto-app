import { MarketDataArray } from "@/utils/types/MarketDataArray";

export interface GlobalMarketData {
  coins: number;
  markets: number;
  totalMarketCap: MarketDataArray;
  totalVolume: MarketDataArray;
  bitcoinMarketCapPercentage: number;
  ethereumMarketCapPercentage: number;
}
