import { type IndividualCoin } from "@/lib/types/IndividualCoin";
import { formatCurrency } from "./formatCurrency";

export function getPriceDetails(coin: IndividualCoin, currency: string) {
  const priceUp = coin.price_change_24h ? coin.price_change_24h > 0 : false;
  const priceDataAvailable = !!coin.current_price[currency];
  let displayPrice: string;
  if (priceDataAvailable) {
    const { currencyVal, supported } = formatCurrency(
      coin.current_price[currency],
      currency
    );
    if (supported) {
      displayPrice = currencyVal;
    } else {
      displayPrice = currencyVal + " " + currency;
    }
  } else displayPrice = "No Data Available";
  const allTimeHigh = coin.all_time_high[currency] || "-";
  const allTimeHighDate = coin.all_time_high_date[currency]
    ? new Date(coin.all_time_high_date[currency]).toUTCString()
    : "No data available";
  const allTimeLow = coin.all_time_low[currency] || "-";
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
