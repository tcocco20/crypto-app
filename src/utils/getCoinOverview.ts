import { ListCoin } from "@/lib/types/ListCoin";

export const getCoinOverview = (coin: ListCoin) => {
  const showCoin = !coin.image.includes("missing");
  const displayPrice = coin.current_price
    ? "$" + coin.current_price.toLocaleString()
    : "N/A";
  const oneHrChange =
    Math.abs(coin.price_change_percentage_1h_in_currency).toFixed(2) + "%";
  const oneDayChange =
    Math.abs(coin.price_change_percentage_24h_in_currency).toFixed(2) + "%";
  const oneWeekChange =
    Math.abs(coin.price_change_percentage_7d_in_currency).toFixed(2) + "%";
  const oneHrUp = coin.price_change_percentage_1h_in_currency > 0;
  const oneDayUp = coin.price_change_percentage_24h_in_currency > 0;
  const oneWeekUp = coin.price_change_percentage_7d_in_currency > 0;

  let coinDisplayName = coin.name;
  if (coin.symbol) coinDisplayName += ` (${coin.symbol.toUpperCase()})`;

  return {
    showCoin,
    coinDisplayName,
    displayPrice,
    oneHrChange,
    oneDayChange,
    oneWeekChange,
    oneHrUp,
    oneDayUp,
    oneWeekUp,
  };
};
