import { type IndividualCoin } from "@/lib/types/IndividualCoin";
import React from "react";
import Card from "../UI/Card";
import { ChevronDown, ChevronUp, Layers } from "lucide-react";
import utils from "@/utils";

interface InvestmentDetailsProps {
  coin: IndividualCoin;
  selectedCurrency: string;
}

const InvestmentDetails = ({
  coin,
  selectedCurrency,
}: InvestmentDetailsProps) => {
  const {
    priceUp,
    priceDataAvailable,
    displayPrice,
    allTimeHigh,
    allTimeHighDate,
    allTimeLow,
    allTimeLowDate,
  } = utils.getPriceDetails(coin, selectedCurrency);

  function displayPriceChange() {
    if (coin.price_change_percentage_24h) {
      if (priceUp) {
        return (
          <>
            <ChevronUp
              strokeWidth={4}
              size={20}
              className="text-cyan-600 ml-2"
            />
            <p className="text-xl text-cyan-600">
              {coin.price_change_percentage_24h.toPrecision(3)}%
            </p>
          </>
        );
      } else {
        return (
          <>
            <ChevronDown
              strokeWidth={4}
              size={20}
              className="text-pink-600 ml-2"
            />
            <p className="text-xl text-pink-600">
              {coin.price_change_percentage_24h.toPrecision(3)}%
            </p>
          </>
        );
      }
    }
    return null;
  }

  return (
    <Card className="py-2 px-4 md:py-4 md:px-6 lg:py-6 lg:px-9 xl:py-12 xl:px-16 flex flex-col gap-4 md:col-span-2">
      <div className="flex gap-1 items-end justify-center">
        <h2
          className={`${
            priceDataAvailable
              ? "text-xl md:text-2xl lg:text-4xl"
              : "text-base md:text-xl lg:text-2xl"
          } font-semibold`}
        >
          {displayPrice}
        </h2>
        {displayPriceChange()}
      </div>
      <Layers size={24} className="mx-auto" />
      <div>
        <div className="flex gap-2 lg:gap-4 items-center">
          <ChevronUp strokeWidth={4} size={24} className="text-cyan-600" />
          <p className="text-xs md:text-sm lg:text-base">All Time High:</p>
          <p className="text-sm md:text-base lg:text-lg xl:text-2xl">
            ${allTimeHigh}
          </p>
        </div>
        <p className="dark:text-gray-300/70 text-right text-xs md:text-sm lg:text-base">
          {allTimeHighDate}
        </p>
      </div>
      <div>
        <div className="flex gap-2 lg:gap-4 items-center">
          <ChevronDown strokeWidth={4} size={24} className="text-pink-600" />
          <p className="text-xs md:text-sm lg:text-base">All Time low:</p>
          <p className="text-sm md:text-base lg:text-lg xl:text-2xl">
            ${allTimeLow}
          </p>
        </div>
        <p className="dark:text-gray-300/70 text-right text-xs md:text-sm lg:text-base">
          {allTimeLowDate}
        </p>
      </div>
    </Card>
  );
};

export default InvestmentDetails;
