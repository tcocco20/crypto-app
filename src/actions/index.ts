import { getCoinById } from "./getCoinById";
import { getCoinsList } from "./getCoinsList";
import { testConnection } from "./testConnection";
import { getCoinHistoricalPriceData } from "./getCoinHistoricalPriceData";
import { getGlobalMarketData } from "./getGlobalMarketData";
import { getSearchResults } from "./getSearchResults";
import { getCurrenciesList } from "./getCurrenciesList";
import { getSimpleCoinPriceData } from "./getSimpleCoinPriceData";

const actions = {
  testConnection,
  getCoinsList,
  getCoinById,
  getCoinHistoricalPriceData,
  getGlobalMarketData,
  getSearchResults,
  getCurrenciesList,
  getSimpleCoinPriceData,
};

export default actions;
