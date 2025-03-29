import { type MarketDataArray } from "@/utils/types/MarketDataArray";

export interface PortfolioCoin {
  id: string;
  amountPurchased: MarketDataArray;
  datePurchased: string;
  priceAtPurchase: MarketDataArray;
  coinId: string;
  name: string;
  symbol: string;
  image: string;
}
