import { type IndividualCoin } from "@/lib/types/IndividualCoin";
import React from "react";
import Card from "../UI/Card";
import { ChevronDown, ChevronUp, Layers } from "lucide-react";

interface InvestmentDetailsProps {
  coin: IndividualCoin;
}

const InvestmentDetails = ({ coin }: InvestmentDetailsProps) => {
  const priceUp = coin.market_data.price_change_percentage_24h > 0;
  return (
    <Card className="py-12 px-16 flex flex-col gap-4 col-span-2">
      <div className="flex gap-1 items-end">
        <h2 className="text-4xl font-semibold">
          ${coin.market_data.current_price.usd.toLocaleString()}
        </h2>
        {priceUp ? (
          <ChevronUp strokeWidth={4} size={20} className="text-cyan-600 ml-2" />
        ) : (
          <ChevronDown
            strokeWidth={4}
            size={20}
            className="text-pink-600 ml-2"
          />
        )}
        <p className={`text-xl ${priceUp ? "text-cyan-600" : "text-pink-600"}`}>
          {coin.market_data.price_change_percentage_24h.toPrecision(3)}%
        </p>
      </div>
      <Layers size={24} className="mx-auto" />
      <div>
        <div className="flex gap-4 items-center">
          <ChevronUp strokeWidth={4} size={24} className="text-cyan-600" />
          <p>All Time High:</p>
          <p className="text-2xl">
            ${coin.market_data.ath.usd.toLocaleString()}
          </p>
        </div>
        <p className="dark:text-gray-300/70 text-right">
          {new Date(coin.market_data.ath_date.usd).toUTCString()}
        </p>
      </div>
      <div>
        <div className="flex gap-4 items-center">
          <ChevronDown strokeWidth={4} size={24} className="text-pink-600" />
          <p>All Time low:</p>
          <p className="text-2xl">
            ${coin.market_data.atl.usd.toLocaleString()}
          </p>
        </div>
        <p className="dark:text-gray-300/70 text-right">
          {new Date(coin.market_data.atl_date.usd).toUTCString()}
        </p>
      </div>
    </Card>
  );
};

export default InvestmentDetails;
