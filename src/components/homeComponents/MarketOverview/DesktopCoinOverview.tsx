"use client";

import MarketCapMeter from "@/components/UI/MarketCapMeter";
import PercentageWithIcon from "@/components/UI/PercentageWithIcon";
import { type ListCoin } from "@/lib/types/ListCoin";
import utils from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CoinOverviewChart from "./CoinOverviewChart";
import { useScreenSize } from "@/hooks/useScreenSize";
import { useAppSelector } from "@/lib/hooks";

interface DesktopCoinOverviewProps {
  coin: ListCoin;
}

const DesktopCoinOverview = ({ coin }: DesktopCoinOverviewProps) => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );
  const {
    showIcon,
    coinDisplayName,
    displayPrice,
    oneDayChange,
    oneHrChange,
    oneWeekChange,
    oneHrUp,
    oneDayUp,
    oneWeekUp,
    marketCap,
    totalVolume,
    volumeOverCap,
    totalSupply,
    circulatingSupply,
    circulationOverTotal,
  } = utils.getCoinOverview(coin, selectedCurrency.toUpperCase());

  const barColor = oneWeekUp ? "#00e1d5" : "#ec4899";
  const barBackground = oneWeekUp ? "bg-cyan-500/70" : "bg-pink-500/70";

  const screenSize = useScreenSize();

  const iconSize = screenSize === "xl" ? 32 : 24;
  const barHeight = screenSize === "2xl" ? 7 : 6;

  const meterFallback = (
    <p className="md:text-sm lg:text-base xl:text-lg col-span-2">
      Data not available for this coin
    </p>
  );

  return (
    <Link
      href={`/coin/${coin.id}`}
      className="grid grid-cols-11 md:gap-1 lg:gap-2 xl:gap-4 bg-white dark:bg-violet-950 rounded-md py-4 px-1 lg:px-2 xl:p-4 text-black dark:text-white items-center"
    >
      <div className="flex items-center gap-2 col-span-2">
        {showIcon && (
          <Image
            src={coin.image}
            alt={"logo for " + coin.name}
            width={iconSize}
            height={iconSize}
          />
        )}
        <p className="md:text-sm lg:text-base xl:text-lg">{coinDisplayName}</p>
      </div>

      <p className="md:text-xs lg:text-sm xl:text-base">{displayPrice}</p>
      <PercentageWithIcon percentage={oneHrChange} percentageUp={oneHrUp} />
      <PercentageWithIcon percentage={oneDayChange} percentageUp={oneDayUp} />
      <PercentageWithIcon percentage={oneWeekChange} percentageUp={oneWeekUp} />
      {volumeOverCap ? (
        <MarketCapMeter
          max={1}
          min={0}
          height={barHeight + "px"}
          value={volumeOverCap}
          startLabel={utils.getShortNumber(totalVolume)}
          endLabel={utils.getShortNumber(marketCap)}
          color={barColor}
          containerClassName="col-span-2"
          barContainerClassName={barBackground}
          priceUp={oneWeekUp}
        />
      ) : (
        meterFallback
      )}
      {circulationOverTotal ? (
        <MarketCapMeter
          max={1}
          min={0}
          height={barHeight + "px"}
          value={circulationOverTotal}
          startLabel={utils.getShortNumber(circulatingSupply)}
          endLabel={utils.getShortNumber(totalSupply)}
          color={barColor}
          containerClassName="col-span-2"
          barContainerClassName={barBackground}
          priceUp={oneWeekUp}
        />
      ) : (
        meterFallback
      )}
      <CoinOverviewChart coin={coin} />
    </Link>
  );
};

export default DesktopCoinOverview;
