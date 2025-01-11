import { getCoinById } from "./getCoinById";
import { get24hVolumeInCurrency } from "./get24hVolumeInCurrency";
import { getCoinsList } from "./getCoinsList";
import { testConnection } from "./testConnection";
import { getCoinHistoricalPriceData } from "./getCoinHistoricalPriceData";

const actions = {
  testConnection,
  getCoinsList,
  getCoinById,
  get24hVolumeInCurrency,
  getCoinHistoricalPriceData,
};

export default actions;
