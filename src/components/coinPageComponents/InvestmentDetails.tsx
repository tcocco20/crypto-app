import { type IndividualCoin } from "@/lib/types/IndividualCoin";
import React from "react";
import Card from "../UI/Card";
import { ChevronDown, ChevronUp, Layers } from "lucide-react";
import utils from "@/utils";

interface InvestmentDetailsProps {
  coin: IndividualCoin;
}

const InvestmentDetails = ({ coin }: InvestmentDetailsProps) => {
  let priceUp: boolean = false;
  let displayPrice: string = "";
  let allTimeHigh: string = "";
  let allTimeHighDate: string = "";
  let allTimeLow: string = "";
  let allTimeLowDate: string = "";
  if (
    coin.market_data.price_change_percentage_24h &&
    coin.market_data.price_change_percentage_24h > 0
  ) {
    priceUp = true;
  }

  if (utils.isPropertyType(coin.market_data.current_price, "usd")) {
    displayPrice = coin.market_data.current_price.usd.toLocaleString();
  } else {
    displayPrice = "No price data available";
  }

  if (utils.isPropertyType(coin.market_data.ath, "usd")) {
    allTimeHigh = coin.market_data.ath.usd.toLocaleString();
  } else {
    allTimeHigh = "No data available";
  }

  if (utils.isPropertyType(coin.market_data.atl, "usd")) {
    allTimeLow = coin.market_data.atl.usd.toLocaleString();
  } else {
    allTimeLow = "No data available";
  }

  if (utils.isPropertyType(coin.market_data.ath_date, "usd")) {
    allTimeHighDate = new Date(coin.market_data.ath_date.usd).toUTCString();
  } else {
    allTimeHighDate = "No data available";
  }

  if (utils.isPropertyType(coin.market_data.atl_date, "usd")) {
    allTimeLowDate = new Date(coin.market_data.atl_date.usd).toUTCString();
  } else {
    allTimeLowDate = "No data available";
  }
  return (
    <Card className="py-12 px-16 flex flex-col gap-4 col-span-2">
      <div className="flex gap-1 items-end">
        <h2 className="text-4xl font-semibold">${displayPrice}</h2>
        {priceUp ? (
          <ChevronUp strokeWidth={4} size={20} className="text-cyan-600 ml-2" />
        ) : (
          <ChevronDown
            strokeWidth={4}
            size={20}
            className="text-pink-600 ml-2"
          />
        )}
        {coin.market_data.price_change_percentage_24h && (
          <p
            className={`text-xl ${priceUp ? "text-cyan-600" : "text-pink-600"}`}
          >
            {coin.market_data.price_change_percentage_24h.toPrecision(3)}%
          </p>
        )}
      </div>
      <Layers size={24} className="mx-auto" />
      <div>
        <div className="flex gap-4 items-center">
          <ChevronUp strokeWidth={4} size={24} className="text-cyan-600" />
          <p>All Time High:</p>
          <p className="text-2xl">${allTimeHigh}</p>
        </div>
        <p className="dark:text-gray-300/70 text-right">{allTimeHighDate}</p>
      </div>
      <div>
        <div className="flex gap-4 items-center">
          <ChevronDown strokeWidth={4} size={24} className="text-pink-600" />
          <p>All Time low:</p>
          <p className="text-2xl">${allTimeLow}</p>
        </div>
        <p className="dark:text-gray-300/70 text-right">{allTimeLowDate}</p>
      </div>
    </Card>
  );
};

export default InvestmentDetails;
