import { HistoricalPriceDataResponse } from "@/lib/types/HistoricalPriceDataResponse";
import { reshapeHistoricalData } from "./reshapeHistoricalData";

export const convertHistoricalData = (data: HistoricalPriceDataResponse) => {
  const reshapedData = reshapeHistoricalData(data);

  return reshapedData;
};
