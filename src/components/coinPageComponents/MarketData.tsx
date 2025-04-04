"use client";

import { IndividualCoin } from "@/lib/types/IndividualCoin";
import Card from "../UI/Card";
import DataPoint from "./DataPoint";
import { getCurrencyFormatter } from "@/utils/formatCurrency";

interface MarketDataProps {
  coin: IndividualCoin;
  selectedCurrency: string;
}

const MarketData = ({ coin, selectedCurrency }: MarketDataProps) => {
  let volumeOverMarket: number | null = null;
  const { formatter: currencyFormatter, supported: currencySupported } =
    getCurrencyFormatter(selectedCurrency);
  const { formatter: coinFormatter, supported: coinSupported } =
    getCurrencyFormatter(coin.symbol);

  if (
    coin.total_volume[selectedCurrency] &&
    coin.market_cap[selectedCurrency]
  ) {
    volumeOverMarket = +(
      coin.total_volume[selectedCurrency] / coin.market_cap[selectedCurrency]
    ).toFixed(5);
  }
  return (
    <Card className="p-4 lg:p-8 xl:p-16 flex flex-col gap-4 md:gap-2 lg:gap-3 xl:gap-4 md:col-span-3">
      <DataPoint
        title="Market Cap"
        dataPoint={coin.market_cap[selectedCurrency]}
        currencyToDisplay={
          !currencySupported ? selectedCurrency.toUpperCase() : undefined
        }
        formatter={currencyFormatter}
        currencyDisplay
      />
      <DataPoint
        title="Fully Diluted Valuation"
        dataPoint={coin.fully_diluted_valuation[selectedCurrency]}
        currencyToDisplay={
          !currencySupported ? selectedCurrency.toUpperCase() : undefined
        }
        formatter={currencyFormatter}
        currencyDisplay
      />
      <DataPoint
        title="Volume 24h"
        dataPoint={coin.total_volume[selectedCurrency]}
        currencyToDisplay={
          !currencySupported ? selectedCurrency.toUpperCase() : undefined
        }
        formatter={currencyFormatter}
        currencyDisplay
      />
      <DataPoint title="Volume/Market" dataPoint={volumeOverMarket} />
      <DataPoint
        title="Total Volume"
        dataPoint={coin.total_volume[coin.symbol]}
        currencyToDisplay={
          !coinSupported ? coin.symbol.toUpperCase() : undefined
        }
        formatter={coinFormatter}
        currencyDisplay
      />
      <DataPoint
        title="Circulating Supply"
        dataPoint={coin.circulating_supply}
        currencyToDisplay={
          !coinSupported ? coin.symbol.toUpperCase() : undefined
        }
        formatter={coinFormatter}
        currencyDisplay
      />
      <DataPoint
        title="Max Supply"
        dataPoint={coin.max_supply}
        currencyToDisplay={
          !coinSupported ? coin.symbol.toUpperCase() : undefined
        }
        formatter={coinFormatter}
        currencyDisplay
      />
    </Card>
  );
};

export default MarketData;
