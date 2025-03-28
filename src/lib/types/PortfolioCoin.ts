import { type MarketDataArray } from "@/utils/types/MarketDataArray";

export interface PortfolioCoin {
  amountPurchased: MarketDataArray;
  datePurchased: string;
  priceAtPurchase: MarketDataArray;
  id: string;
  name: string;
  symbol: string;
  image: string;
}
