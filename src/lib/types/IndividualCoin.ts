import { CoinGeckoImage } from "@/utils/types/CoinGeckoImage";
import { MarketDataArray } from "@/utils/types/MarketDataArray";
import { MarketDataStringArray } from "@/utils/types/MarketDataStringArray";

export interface IndividualCoin {
  id: string;
  symbol: string;
  name: string;
  image: CoinGeckoImage;
  current_price: MarketDataArray;
  all_time_high: MarketDataArray;
  all_time_high_date: MarketDataStringArray;
  all_time_low: MarketDataArray;
  all_time_low_date: MarketDataStringArray;
  market_cap: MarketDataArray;
  fully_diluted_valuation: MarketDataArray;
  total_volume: MarketDataArray;
  price_change_24h: number | null;
  price_change_percentage_24h: number | null;
  total_supply: number | null;
  max_supply: number | null;
  circulating_supply: number | null;
  last_updated: string | null;
  description: string;
  links: {
    homepage: string;
    blockchain_site: string[];
  };
}
