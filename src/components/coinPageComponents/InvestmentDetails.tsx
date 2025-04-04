"use client";
import { type IndividualCoin } from "@/lib/types/IndividualCoin";
import React from "react";
import Card from "../UI/Card";
import { ChevronDown, ChevronUp, Layers } from "lucide-react";
import utils from "@/utils";
import { useIsLg } from "@/hooks/useIsLg";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useAppSelector } from "@/lib/hooks";
import { getProfitDetails } from "@/utils/getProfitDetails";

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

  const isLg = useIsLg();
  const isMobile = useIsMobile();
  const portfolio = useAppSelector((state) => state.portfolio.coins);
  const { inPortfolio, profit, profitUp } = getProfitDetails(
    coin,
    portfolio,
    selectedCurrency
  );

  const iconSizeMultiplier = isMobile ? 1 : isLg ? 1 : 0.7;

  function displayPriceChange() {
    if (coin.price_change_percentage_24h) {
      if (priceUp) {
        return (
          <>
            <ChevronUp
              strokeWidth={4}
              size={20 * iconSizeMultiplier}
              className="text-cyan-600 ml-2"
            />
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-cyan-600">
              {coin.price_change_percentage_24h.toPrecision(3)}%
            </p>
          </>
        );
      } else {
        return (
          <>
            <ChevronDown
              strokeWidth={4}
              size={20 * iconSizeMultiplier}
              className="text-pink-600 ml-2"
            />
            <p className="text-sm md:text-base lg:text-lg xl:text-xl text-pink-600">
              {coin.price_change_percentage_24h.toPrecision(3)}%
            </p>
          </>
        );
      }
    }
    return null;
  }

  return (
    <Card className="p-2 md:p-4 lg:p-6 xl:p-8 2xl:py-10 2xl:px-12 flex flex-col gap-4 md:col-span-2">
      <div className="flex gap-1 items-end justify-center">
        <h2
          className={`${
            priceDataAvailable
              ? "text-lg lg:text-xl xl:text-2xl"
              : "text-base md:text-lg lg:text-xl xl:text-2xl"
          } font-semibold`}
        >
          {displayPrice}
        </h2>
        {displayPriceChange()}
      </div>
      {inPortfolio && (
        <div className="flex gap-2 items-center justify-center">
          <p className="text-xs lg:text-sm xl:text-base">Profit:</p>
          <p
            className={`text-sm lg:text-base xl:text-lg ${
              profitUp ? "text-cyan-600" : "text-pink-600"
            }`}
          >
            {profit} {selectedCurrency.toUpperCase()}
          </p>
        </div>
      )}
      <Layers size={24 * iconSizeMultiplier} className="mx-auto" />
      <div className="max-md:flex max-md:flex-col max-md:items-center">
        <div className="flex gap-2 lg:gap-4 items-center">
          <ChevronUp strokeWidth={4} size={24} className="text-cyan-600" />
          <p className="text-xs lg:text-sm xl:text-base">All Time High:</p>
          <p className="text-sm lg:text-base xl:text-lg 2xl:text-2xl">
            {allTimeHigh}
          </p>
        </div>
        <p className="dark:text-gray-300/70 md:text-right text-xs lg:text-sm xl:text-base">
          {allTimeHighDate}
        </p>
      </div>
      <div className="max-md:flex max-md:flex-col max-md:items-center">
        <div className="flex gap-2 lg:gap-4 items-center">
          <ChevronDown strokeWidth={4} size={24} className="text-pink-600" />
          <p className="text-xs lg:text-sm xl:text-base">All Time low:</p>
          <p className="text-sm lg:text-base xl:text-lg 2xl:text-2xl">
            {allTimeLow}
          </p>
        </div>
        <p className="dark:text-gray-300/70 md:text-right text-xs lg:text-sm xl:text-base">
          {allTimeLowDate}
        </p>
      </div>
    </Card>
  );
};

export default InvestmentDetails;
