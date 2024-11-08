import { getCoinById } from "./getCoinById";
import { get24hVolumeInCurrency } from "./get24hVolumeInCurrency";
import { getCoinsList } from "./getCoinsList";
import { testConnection } from "./testConnection";

const actions = {
  testConnection,
  getCoinsList,
  getCoinById,
  get24hVolumeInCurrency,
};

export default actions;
