import PercentageWithIcon from "@/components/UI/PercentageWithIcon";
import { type PortfolioCoinWithMarketData } from "@/lib/types/PortfolioCoinWithMarketData";
import Image from "next/image";
import React from "react";

interface PortfolioDetailsProps {
  coin: PortfolioCoinWithMarketData;
  selectedCurrency: string;
  formatter: Intl.NumberFormat;
  supported: boolean;
}

const PortfolioDetails = ({
  coin,
  selectedCurrency,
  formatter,
  supported,
}: PortfolioDetailsProps) => {
  const priceUp = coin.priceAtPurchase[selectedCurrency] < coin.price;
  const percentageChange =
    ((coin.currentValue - coin.amountPurchased[selectedCurrency]) /
      coin.amountPurchased[selectedCurrency]) *
    100;
  const percentageChangeString = percentageChange.toFixed(2) + "%";
  const showImage = !coin.image.includes("missing");
  const selectedCurrencyDisplay = !supported
    ? selectedCurrency.toUpperCase()
    : "";

  return (
    <div className="p-4 md:p-5 lg:p-6">
      <div className="flex justify-between mb-6 items-center md:gap-12 lg:gap-16 xl:gap-20">
        <div>
          <h3 className="text-lg md:text-xl lg:text-2xl">
            {coin.name} ({coin.symbol.toUpperCase()})
          </h3>
          <p className="text-sm md:text-base dark:text-gray-300">
            Purchased {coin.datePurchased}
          </p>
          <p className="text-sm md:text-base dark:text-gray-300">
            Purchase Amount:{" "}
            {formatter.format(coin.amountPurchased[selectedCurrency])}{" "}
            {selectedCurrencyDisplay}
          </p>
        </div>
        {showImage && (
          <Image
            src={coin.image}
            className="h-10 w-10 lg:h-12 lg:w-12 xl:w-14 xl:h-14 rounded-full md:mb-4 lg:mb-8"
            alt={"Logo for " + coin.name}
            width={56}
            height={56}
          />
        )}
      </div>
      <h3 className="hidden md:block text-lg dark:text-gray-200">
        Current Total Value
      </h3>
      <div className="flex gap-2 items-center">
        <h4 className="text-xl md:text-2xl lg:text-3xl font-medium">
          {formatter.format(coin.currentValue)} {selectedCurrencyDisplay}
        </h4>
        <PercentageWithIcon
          percentage={percentageChangeString}
          percentageUp={priceUp}
        />
      </div>
    </div>
  );
};

export default PortfolioDetails;
