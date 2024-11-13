import {
  Currentprice,
  type IndividualCoinWith24hVolume,
} from "@/lib/types/IndividualCoin";
import React from "react";
import Card from "../UI/Card";
import { ChevronDown, ChevronUp, Layers } from "lucide-react";
import utils from "@/utils";

interface InvestmentDetailsProps {
  coin: IndividualCoinWith24hVolume;
  selectedCurrency: keyof Currentprice;
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
    if (coin.market_data.price_change_percentage_24h) {
      if (priceUp) {
        return (
          <>
            <ChevronUp
              strokeWidth={4}
              size={20}
              className="text-cyan-600 ml-2"
            />
            <p className="text-xl text-cyan-600">
              {coin.market_data.price_change_percentage_24h.toPrecision(3)}%
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
              {coin.market_data.price_change_percentage_24h.toPrecision(3)}%
            </p>
          </>
        );
      }
    }
    return null;
  }

  return (
    <Card className="py-12 px-16 flex flex-col gap-4 col-span-2">
      <div className="flex gap-1 items-end">
        <h2
          className={`${
            priceDataAvailable ? "text-4xl" : "text-2xl"
          } font-semibold`}
        >
          {displayPrice}
        </h2>
        {displayPriceChange()}
      </div>
      <Layers size={24} className="mx-auto" />
      <div>
        <div className="flex gap-4 items-center">
          <ChevronUp strokeWidth={4} size={24} className="text-cyan-600" />
          <p>All Time High:</p>
          <p className="text-2xl">{allTimeHigh}</p>
        </div>
        <p className="dark:text-gray-300/70 text-right">{allTimeHighDate}</p>
      </div>
      <div>
        <div className="flex gap-4 items-center">
          <ChevronDown strokeWidth={4} size={24} className="text-pink-600" />
          <p>All Time low:</p>
          <p className="text-2xl">{allTimeLow}</p>
        </div>
        <p className="dark:text-gray-300/70 text-right">{allTimeLowDate}</p>
      </div>
    </Card>
  );
};

export default InvestmentDetails;
