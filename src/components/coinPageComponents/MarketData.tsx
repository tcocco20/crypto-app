import { IndividualCoin } from "@/lib/types/IndividualCoin";
import Card from "../UI/Card";
import DataPoint from "./DataPoint";

interface MarketDataProps {
  coin: IndividualCoin;
}

const MarketData = ({ coin }: MarketDataProps) => {
  let volumeOverMarket: number | null = null;

  if (coin.total_volume.usd && coin.market_cap.usd) {
    volumeOverMarket = +(coin.total_volume.usd / coin.market_cap.usd).toFixed(
      5
    );
  }
  return (
    <Card className="p-4 lg:p-8 xl:p-16 flex flex-col gap-4 md:gap-2 lg:gap-3 xl:gap-4 md:col-span-3">
      <DataPoint
        title="Market Cap"
        dataPoint={coin.market_cap.usd}
        currencyToDisplay="$"
        currencyDisplay
      />
      <DataPoint
        title="Fully Diluted Valuation"
        dataPoint={coin.fully_diluted_valuation.usd}
        currencyToDisplay="$"
        currencyDisplay
      />
      <DataPoint
        title="Volume 24h"
        dataPoint={coin.total_volume.usd}
        currencyToDisplay="$"
        currencyDisplay
      />
      <DataPoint title="Volume/Market" dataPoint={volumeOverMarket} />
      <DataPoint
        title="Total Volume"
        dataPoint={coin.total_volume[coin.symbol]}
        currencyToDisplay={coin.symbol.toUpperCase()}
        currencyDisplay
        currencyLocation="right"
      />
      <DataPoint
        title="Circulating Supply"
        dataPoint={coin.circulating_supply}
        currencyToDisplay={coin.symbol.toUpperCase()}
        currencyDisplay
        currencyLocation="right"
      />
      <DataPoint
        title="Max Supply"
        dataPoint={coin.max_supply}
        currencyToDisplay={coin.symbol.toUpperCase()}
        currencyDisplay
        currencyLocation="right"
      />
    </Card>
  );
};

export default MarketData;
