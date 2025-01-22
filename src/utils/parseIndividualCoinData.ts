import { type IndividualCoin } from "@/lib/types/IndividualCoin";
import { type IndividualCoinResponse } from "./types/IndividualCoinResponse";

export const parseIndividualCoinData = (
  data: IndividualCoinResponse
): IndividualCoin => {
  return {
    id: data.id,
    name: data.name,
    symbol: data.symbol,
    image: data.image,
    current_price: data.market_data.current_price,
    all_time_high: data.market_data.ath,
    all_time_high_date: data.market_data.ath_date,
    all_time_low: data.market_data.atl,
    all_time_low_date: data.market_data.atl_date,
    market_cap: data.market_data.market_cap,
    fully_diluted_valuation: data.market_data.fully_diluted_valuation,
    total_volume: data.market_data.total_volume,
    price_change_24h: data.market_data.price_change_24h,
    price_change_percentage_24h: data.market_data.price_change_percentage_24h,
    total_supply: data.market_data.total_supply,
    max_supply: data.market_data.max_supply,
    circulating_supply: data.market_data.circulating_supply,
    last_updated: data.market_data.last_updated,
    description: data.description.en,
    links: {
      homepage: data.links.homepage[0],
      blockchain_site: data.links.blockchain_site,
    },
  };
};
