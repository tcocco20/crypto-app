import MarketCapMeter from "@/components/UI/MarketCapMeter";
import PercentageWithIcon from "@/components/UI/PercentageWithIcon";
import { type ListCoin } from "@/lib/types/ListCoin";
import utils from "@/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

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

  const barColor = oneWeekUp ? "bg-green-500" : "bg-red-500";

  return (
    <Link
      href={`/coin/${coin.id}`}
      className="flex gap-4 items-center bg-white dark:bg-violet-950/90 rounded-md p-6 text-black dark:text-white"
    >
      {showIcon && (
        <Image
          src={coin.image}
          alt={"logo for " + coin.name}
          width={32}
          height={32}
        />
      )}
      <p className="text-lg">{coinDisplayName}</p>
      <p className="text-lg">{displayPrice}</p>
      <PercentageWithIcon percentage={oneHrChange} percentageUp={oneHrUp} />
      <PercentageWithIcon percentage={oneDayChange} percentageUp={oneDayUp} />
      <PercentageWithIcon percentage={oneWeekChange} percentageUp={oneWeekUp} />
      <MarketCapMeter
        max={marketCap}
        value={volumeOverCap}
        startLabel={utils.getDisplayNumber(totalVolume)}
        endLabel={utils.getDisplayNumber(marketCap)}
        color={barColor}
      />
      <MarketCapMeter
        max={totalSupply}
        value={circulationOverTotal}
        startLabel={utils.getDisplayNumber(circulatingSupply)}
        endLabel={utils.getDisplayNumber(totalSupply)}
        color={barColor}
      />
    </Link>
  );
};

export default DesktopCoinOverview;
