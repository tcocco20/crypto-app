import { type IndividualCoin } from "@/lib/types/IndividualCoin";
import { getCurrencyFormatter } from "./formatCurrency";

export function getPriceDetails(coin: IndividualCoin, currency: string) {
  const priceUp = coin.price_change_24h ? coin.price_change_24h > 0 : false;
  const priceDataAvailable = !!coin.current_price[currency];
  const { formatter, supported } = getCurrencyFormatter(currency);
  let displayPrice: string;
  let allTimeHigh: string;
  let allTimeLow: string;

  if (priceDataAvailable) {
    if (supported) {
      displayPrice = formatter.format(coin.current_price[currency]);
    } else {
      displayPrice =
        formatter.format(coin.current_price[currency]) + " " + currency;
    }
  } else displayPrice = "No Data Available";

  if (coin.all_time_high[currency]) {
    if (supported) {
      allTimeHigh = formatter.format(coin.all_time_high[currency]);
    } else {
      allTimeHigh =
        formatter.format(coin.all_time_high[currency]) + " " + currency;
    }
  } else allTimeHigh = "-";

  if (coin.all_time_low[currency]) {
    if (supported) {
      allTimeLow = formatter.format(coin.all_time_low[currency]);
    } else {
      allTimeLow =
        formatter.format(coin.all_time_low[currency]) + " " + currency;
    }
  } else allTimeLow = "-";
  
  const allTimeHighDate = coin.all_time_high_date[currency]
    ? new Date(coin.all_time_high_date[currency]).toUTCString()
    : "No data available";
  const allTimeLowDate = coin.all_time_low_date[currency]
    ? new Date(coin.all_time_low_date[currency]).toUTCString()
    : "No data available";

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
