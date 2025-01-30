import MarketCapMeter from "@/components/UI/MarketCapMeter";
import PercentageWithIcon from "@/components/UI/PercentageWithIcon";
import { type ListCoin } from "@/lib/types/ListCoin";
import utils from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CoinOverviewChart from "./CoinOverviewChart";

interface DesktopCoinOverviewProps {
  coin: ListCoin;
}

const DesktopCoinOverview = ({ coin }: DesktopCoinOverviewProps) => {
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
  } = utils.getCoinOverview(coin);

  const barColor = oneWeekUp ? "#00e1d5" : "#ec4899";
  const barBackground = oneWeekUp ? "bg-cyan-500/70" : "bg-pink-500/70";

  return (
    <Link
      href={`/coin/${coin.id}`}
      className="grid grid-cols-11 gap-4 bg-white dark:bg-violet-950/90 rounded-md p-6 text-black dark:text-white"
    >
      <div className="flex items-center gap-2 col-span-2">
        {showIcon && (
          <Image
            src={coin.image}
            alt={"logo for " + coin.name}
            width={32}
            height={32}
          />
        )}
        <p className="text-lg">{coinDisplayName}</p>
      </div>

      <p className="text-lg">{displayPrice}</p>
      <PercentageWithIcon percentage={oneHrChange} percentageUp={oneHrUp} />
      <PercentageWithIcon percentage={oneDayChange} percentageUp={oneDayUp} />
      <PercentageWithIcon percentage={oneWeekChange} percentageUp={oneWeekUp} />
      <MarketCapMeter
        max={1}
        min={0}
        value={volumeOverCap}
        startLabel={utils.getShortNumber(totalVolume)}
        endLabel={utils.getShortNumber(marketCap)}
        color={barColor}
        containerClassName="col-span-2"
        barContainerClassName={barBackground}
      />
      <MarketCapMeter
        max={1}
        min={0}
        value={circulationOverTotal}
        startLabel={utils.getShortNumber(circulatingSupply)}
        endLabel={utils.getShortNumber(totalSupply)}
        color={barColor}
        containerClassName="col-span-2"
        barContainerClassName={barBackground}
      />
      <CoinOverviewChart coin={coin} />
    </Link>
  );
};

export default DesktopCoinOverview;
