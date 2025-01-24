import { type MarketDataArray } from "@/utils/types/MarketDataArray";
import { type MarketDataStringArray } from "./MarketDataStringArray";
import { type CoinGeckoImage } from "./CoinGeckoImage";

export interface IndividualCoinResponse {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  asset_platform_id: null;
  platforms: Platforms;
  detail_platforms: DetailPlatforms;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  preview_listing: boolean;
  public_notice: null;
  additional_notices: any[];
  description: Description;
  links: Links;
  image: CoinGeckoImage;
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;
  market_cap_rank: number;
  market_data: MarketData;
  status_updates: any[];
  last_updated: string;
}

interface MarketData {
  current_price: MarketDataArray;
  total_value_locked: any | null;
  mcap_to_tvl_ratio: any | null;
  fdv_to_tvl_ratio: any | null;
  roi: any | null;
  ath: MarketDataArray;
  ath_change_percentage: MarketDataArray;
  ath_date: MarketDataStringArray;
  atl: MarketDataArray;
  atl_change_percentage: MarketDataArray;
  atl_date: MarketDataStringArray;
  market_cap: MarketDataArray;
  market_cap_rank: number | null;
  fully_diluted_valuation: MarketDataArray;
  market_cap_fdv_ratio: number | null;
  total_volume: MarketDataArray;
  high_24h: MarketDataArray;
  low_24h: MarketDataArray;
  price_change_24h: number | null;
  price_change_percentage_24h: number | null;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_200d: number;
  price_change_percentage_1y: number;
  market_cap_change_24h: number | null;
  market_cap_change_percentage_24h: number | null;
  price_change_24h_in_currency: MarketDataArray;
  price_change_percentage_1h_in_currency: MarketDataArray;
  price_change_percentage_24h_in_currency: MarketDataArray;
  price_change_percentage_7d_in_currency: MarketDataArray;
  price_change_percentage_14d_in_currency: MarketDataArray;
  price_change_percentage_30d_in_currency: MarketDataArray;
  price_change_percentage_60d_in_currency: MarketDataArray;
  price_change_percentage_200d_in_currency: MarketDataArray;
  price_change_percentage_1y_in_currency: MarketDataArray;
  market_cap_change_24h_in_currency: MarketDataArray;
  market_cap_change_percentage_24h_in_currency: MarketDataArray;
  total_supply: number | null;
  max_supply: number | null;
  circulating_supply: number | null;
  last_updated: string | null;
}

interface Links {
  homepage: string[];
  whitepaper: string;
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier: any | null;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: Reposurl;
}

interface Reposurl {
  github: string[];
  bitbucket: any[] | null;
}

interface Description {
  en: string;
}

interface DetailPlatforms {
  "": _;
}

interface _ {
  decimal_place: any | null;
  contract_address: string;
}

interface Platforms {
  "": string;
}
