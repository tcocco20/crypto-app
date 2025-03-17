import PercentageWithIcon from "@/components/UI/PercentageWithIcon";
import React from "react";

const PortfolioDetails = () => {
  return (
    <div className="p-4 md:p-5 lg:p-6">
      <div className="flex justify-between mb-6 items-center md:gap-12 lg:gap-16 xl:gap-20">
        <div>
          <h3 className="text-lg md:text-xl lg:text-2xl">Bitcoin (BTC)</h3>
          <p className="text-sm md:text-base dark:text-gray-300">
            Purchased 03.23.2023
          </p>
          <p className="text-sm md:text-base dark:text-gray-300">
            Purchase Amount: 27,000 USD
          </p>
        </div>
        <div className="p-6 bg-orange-400 rounded-full md:mb-4 lg:mb-8"></div>
      </div>
      <h3 className="hidden md:block text-lg dark:text-gray-200">
        Current Total Value
      </h3>
      <div className="flex gap-2 items-center">
        <h4 className="text-xl md:text-2xl lg:text-3xl font-medium">
          29,850 USD
        </h4>
        <PercentageWithIcon percentage="6.76%" percentageUp />
      </div>
    </div>
  );
};

export default PortfolioDetails;
