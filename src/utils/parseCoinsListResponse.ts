import { ListCoin } from "@/lib/types/ListCoin";
import { CoinsListResponse } from "./types/CoinsListResponse";

export function parseCoinsListResponse(data: CoinsListResponse): ListCoin[] {
  return data.map((coin) => {
    return {
      id: coin.id,
      symbol: coin.symbol,
      name: coin.name,
      image: coin.image,
      current_price: coin.current_price,
      market_cap: coin.market_cap,
      total_volume: coin.total_volume,
      price_change_percentage_24h: coin.price_change_percentage_24h,
      circulating_supply: coin.circulating_supply,
      sparkline_in_7d: coin.sparkline_in_7d,
      total_supply: coin.total_supply,
      max_supply: coin.max_supply,
      price_change_percentage_1h_in_currency:
        coin.price_change_percentage_1h_in_currency,
      price_change_percentage_24h_in_currency:
        coin.price_change_percentage_24h_in_currency,
      price_change_percentage_7d_in_currency:
        coin.price_change_percentage_7d_in_currency,
    };
  });
}
