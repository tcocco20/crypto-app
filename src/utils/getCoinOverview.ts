import { ListCoin } from "@/lib/types/ListCoin";
import { formatCurrency } from "./formatCurrency";

export const getCoinOverview = (coin: ListCoin, selectedCurrency: string) => {
  const showIcon = !coin.image.includes("missing");
  let displayPrice: string;
  if (coin.current_price) {
    const { currencyVal, supported } = formatCurrency(
      coin.current_price,
      selectedCurrency
    );
    if (supported) {
      displayPrice = currencyVal;
    } else {
      displayPrice = currencyVal + " " + selectedCurrency;
    }
  } else {
    displayPrice = "N/A";
  }
  const oneHrChange =
    Math.abs(coin.price_change_percentage_1h_in_currency).toFixed(2) + "%";
  const oneDayChange =
    Math.abs(coin.price_change_percentage_24h_in_currency).toFixed(2) + "%";
  const oneWeekChange =
    Math.abs(coin.price_change_percentage_7d_in_currency).toFixed(2) + "%";
  const oneHrUp = coin.price_change_percentage_1h_in_currency > 0;
  const oneDayUp = coin.price_change_percentage_24h_in_currency > 0;
  const oneWeekUp = coin.price_change_percentage_7d_in_currency > 0;
  const volumeOverCap = coin.total_volume / coin.market_cap;
  const circulationOverTotal = coin.circulating_supply / coin.total_supply;

  let coinDisplayName = coin.name;
  if (coin.symbol) coinDisplayName += ` (${coin.symbol.toUpperCase()})`;

  return {
    showIcon,
    coinDisplayName,
    displayPrice,
    oneHrChange,
    oneDayChange,
    oneWeekChange,
    oneHrUp,
    oneDayUp,
    oneWeekUp,
    marketCap: coin.market_cap || 0,
    totalVolume: coin.total_volume || 0,
    volumeOverCap,
    totalSupply: coin.total_supply || 0,
    circulatingSupply: coin.circulating_supply || 0,
    circulationOverTotal,
  };
};
