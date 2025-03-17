import MarketCapMeter from "@/components/UI/MarketCapMeter";
import PercentageWithIcon from "@/components/UI/PercentageWithIcon";
import React from "react";

const MarketDetails = () => {
  return (
    <div className="bg-indigo-200/50 dark:bg-indigo-950 p-4 grid grid-cols-2 gap-3 rounded-b-md md:flex-1 md:rounded-r-md md:rounded-l-none">
      <div className="border border-white dark:border-indigo-900 p-2 md:p-3 lg:p-4 rounded-md">
        <h5 className="text-lg lg:text-xl mb-2">86,000 USD</h5>
        <p className="text-sm lg:text-base dark:text-gray-300">Current Price</p>
      </div>
      <div className="border border-white dark:border-indigo-900 p-2 md:p-3 lg:p-4 rounded-md">
        <h5 className="text-lg lg:text-xl mb-2">80,000 USD</h5>
        <p className="text-sm lg:text-base dark:text-gray-300">Purchase Price</p>
      </div>
      <div className="border border-white dark:border-indigo-900 p-2 md:p-3 lg:p-4 rounded-md">
        <div className="text-lg lg:text-xl mb-2">
          <PercentageWithIcon percentage="11.04%" percentageUp fixedSize />
        </div>
        <p className="text-sm lg:text-base dark:text-gray-300">24h%</p>
      </div>
      <div className="border border-white dark:border-indigo-900 p-2 md:p-3 lg:p-4 rounded-md">
        <MarketCapMeter
          label="44%"
          labelClasses="text-lg lg:text-xl text-cyan-600 mr-2"
          value={44}
          max={100}
          height="8px"
          barContainerClassName="bg-cyan-800 rounded"
          color="#00b6b0"
        />
        <p className="text-sm lg:text-base dark:text-gray-300 mt-2">Volume / Cap</p>
      </div>
    </div>
  );
};

export default MarketDetails;
