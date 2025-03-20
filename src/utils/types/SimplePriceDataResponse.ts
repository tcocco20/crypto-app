export interface SimplePriceDataResponse {
  [key: string]: PriceData;
}

interface PriceData {
  [key: string]: number;
}
