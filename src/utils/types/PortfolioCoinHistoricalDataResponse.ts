import { MarketDataArray } from "./MarketDataArray";

export interface PortfolioCoinHistoricalDataResponse {
  id: string;
  symbol: string;
  name: string;
  image: Image;
  market_data: Marketdata;
  community_data: Communitydata;
  developer_data: Developerdata;
  public_interest_stats: Publicintereststats;
}

interface Publicintereststats {
  alexa_rank: null;
  bing_matches: null;
}

interface Developerdata {
  forks: null;
  stars: null;
  subscribers: null;
  total_issues: null;
  closed_issues: null;
  pull_requests_merged: null;
  pull_request_contributors: null;
  code_additions_deletions_4_weeks: Codeadditionsdeletions4weeks;
  commit_count_4_weeks: null;
}

interface Codeadditionsdeletions4weeks {
  additions: null;
  deletions: null;
}

interface Communitydata {
  facebook_likes: null;
  twitter_followers: null;
  reddit_average_posts_48h: number;
  reddit_average_comments_48h: number;
  reddit_subscribers: null;
  reddit_accounts_active_48h: number;
}

interface Marketdata {
  current_price: MarketDataArray;
  market_cap: MarketDataArray;
  total_volume: MarketDataArray;
}

interface Image {
  thumb: string;
  small: string;
}
