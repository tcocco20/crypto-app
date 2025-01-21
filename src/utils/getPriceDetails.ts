import { IndividualCoin, type Currentprice } from "@/lib/types/IndividualCoin";
import utils from ".";

export function getPriceDetails(
  coin: IndividualCoin,
  currency: keyof Currentprice
) {
  let priceUp: boolean = false;
  let priceDataAvailable: boolean = false;
  let displayPrice: string = "No price data available";
  let allTimeHigh: string = "-";
  let allTimeHighDate: string = "No data available";
  let allTimeLow: string = "-";
  let allTimeLowDate: string = "No data available";
  if (
    coin.market_data.price_change_percentage_24h &&
    coin.market_data.price_change_percentage_24h > 0
  ) {
    priceUp = true;
  }

  if (utils.isPropertyType(coin.market_data.current_price, currency)) {
    displayPrice = "$" + coin.market_data.current_price.usd.toLocaleString();
    priceDataAvailable = true;
  }

  if (utils.isPropertyType(coin.market_data.ath, currency))
    allTimeHigh = coin.market_data.ath.usd.toLocaleString();

  if (utils.isPropertyType(coin.market_data.ath_date, currency))
    allTimeHighDate = new Date(coin.market_data.ath_date.usd).toUTCString();

  if (utils.isPropertyType(coin.market_data.atl, currency))
    allTimeLow = coin.market_data.atl.usd.toLocaleString();

  if (utils.isPropertyType(coin.market_data.atl_date, currency))
    allTimeLowDate = new Date(coin.market_data.atl_date.usd).toUTCString();

  return {
    priceUp,
    priceDataAvailable,
    displayPrice,
    allTimeHigh,
    allTimeHighDate,
    allTimeLow,
    allTimeLowDate,
  };
}
