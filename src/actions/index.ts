import { getCoinById } from "./getCoinById";
import { get24hVolumeInCurrency } from "./get24hVolumeInCurrency";
import { getCoinsList } from "./getCoinsList";
import { testConnection } from "./testConnection";
import { getCoinHistoricalPriceData } from "./getCoinHistoricalPriceData";
import { getGlobalMarketData } from "./getGlobalMarketData";

const actions = {
  testConnection,
  getCoinsList,
  getCoinById,
  get24hVolumeInCurrency,
  getCoinHistoricalPriceData,
  getGlobalMarketData,
};

export default actions;
