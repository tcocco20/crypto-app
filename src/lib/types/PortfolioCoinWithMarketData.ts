import { PortfolioCoin } from "./PortfolioCoin";
import { SimplePriceData } from "./SimplePriceData";

export interface PortfolioCoinWithMarketData
  extends PortfolioCoin,
    SimplePriceData {
  currentValue: number;
}
