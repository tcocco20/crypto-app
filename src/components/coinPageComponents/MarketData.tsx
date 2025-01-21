import { IndividualCoin } from "@/lib/types/IndividualCoin";
import Card from "../UI/Card";
import DataPoint from "./DataPoint";
import utils from "@/utils";

interface MarketDataProps {
  coin: IndividualCoin;
}

const MarketData = ({ coin }: MarketDataProps) => {
  let volumeOverMarket: number | null = null;

  if (
    utils.isPropertyType(coin.market_data.total_volume, "usd") &&
    utils.isPropertyType(coin.market_data.market_cap, "usd")
  ) {
    volumeOverMarket = +(
      coin.market_data.total_volume.usd / coin.market_data.market_cap.usd
    ).toFixed(5);
  }
  return (
    <Card className="p-16 flex flex-col gap-4 col-span-3">
      <DataPoint
        title="Market Cap"
        dataObject={coin.market_data.market_cap}
        property={"usd"}
        currencyToDisplay="$"
        currencyDisplay
      />
      <DataPoint
        title="Fully Diluted Valuation"
        dataObject={coin.market_data.fully_diluted_valuation}
        property={"usd"}
        currencyToDisplay="$"
        currencyDisplay
      />
      <DataPoint
        title="Volume 24h"
        dataPoint={coin.market_data.total_volume.usd}
        currencyToDisplay="$"
        currencyDisplay
      />
      <DataPoint title="Volume/Market" dataPoint={volumeOverMarket} />
      <DataPoint
        title="Total Volume"
        dataObject={coin.market_data.total_volume}
        property={"usd"}
        currencyToDisplay={"$"}
        currencyDisplay
      />
      <DataPoint
        title="Circulating Supply"
        dataPoint={coin.market_data.circulating_supply}
        currencyToDisplay={coin.symbol.toUpperCase()}
        currencyDisplay
        currencyLocation="right"
      />
      <DataPoint
        title="Max Supply"
        dataPoint={coin.market_data.max_supply}
        currencyToDisplay={coin.symbol.toUpperCase()}
        currencyDisplay
        currencyLocation="right"
      />
    </Card>
  );
};

export default MarketData;
