import MarketCapMeter from "@/components/UI/MarketCapMeter";
import PercentageWithIcon from "@/components/UI/PercentageWithIcon";
import { PortfolioCoinWithMarketData } from "@/lib/types/PortfolioCoinWithMarketData";
import React from "react";

interface MarketDetailsProps {
  selectedCurrency: string;
  coin: PortfolioCoinWithMarketData;
}

const MarketDetails = ({ selectedCurrency, coin }: MarketDetailsProps) => {
  const priceUp = coin.change24h > 0;
  const percentageString = Math.abs(coin.change24h).toFixed(2) + "%";
  const volumeOverCap = (coin.totalVolume / coin.marketCap) * 100;
  return (
    <div className="bg-indigo-200/50 dark:bg-indigo-950 p-4 grid grid-cols-2 gap-3 rounded-b-md md:flex-1 md:rounded-r-md md:rounded-l-none">
      <div className="border border-white dark:border-indigo-900 p-2 md:p-3 lg:p-4 rounded-md">
        <h5 className="text-lg lg:text-xl mb-2">
          {coin.price} {selectedCurrency.toUpperCase()}
        </h5>
        <p className="text-sm lg:text-base dark:text-gray-300">Current Price</p>
      </div>
      <div className="border border-white dark:border-indigo-900 p-2 md:p-3 lg:p-4 rounded-md">
        <h5 className="text-lg lg:text-xl mb-2">
          {coin.priceAtPurchase[selectedCurrency].toLocaleString()}{" "}
          {selectedCurrency.toUpperCase()}
        </h5>
        <p className="text-sm lg:text-base dark:text-gray-300">
          Purchase Price
        </p>
      </div>
      <div className="border border-white dark:border-indigo-900 p-2 md:p-3 lg:p-4 rounded-md">
        <div className="text-lg lg:text-xl mb-2">
          <PercentageWithIcon
            percentage={percentageString}
            percentageUp={priceUp}
            fixedSize
          />
        </div>
        <p className="text-sm lg:text-base dark:text-gray-300">24h%</p>
      </div>
      <div className="border border-white dark:border-indigo-900 p-2 md:p-3 lg:p-4 rounded-md">
        <MarketCapMeter
          label={Math.round(volumeOverCap) + "%"}
          labelClasses="text-lg lg:text-xl text-cyan-600 mr-2"
          value={volumeOverCap}
          max={100}
          height="8px"
          barContainerClassName="bg-cyan-800 rounded"
          color="#00b6b0"
        />
        <p className="text-sm lg:text-base dark:text-gray-300 mt-2">
          Volume / Cap
        </p>
      </div>
    </div>
  );
};

export default MarketDetails;
