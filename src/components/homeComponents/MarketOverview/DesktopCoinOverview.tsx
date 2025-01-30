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

  const barColor = oneWeekUp ? "bg-pink-600" : "bg-teal-600";
  const barBackground = oneWeekUp ? "bg-teal-500/80" : "bg-pink-500/80";

  return (
    <Link
      href={`/coin/${coin.id}`}
      className="grid grid-cols-12 gap-4 bg-white dark:bg-violet-950/90 rounded-md p-6 text-black dark:text-white"
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
      <div className="col-span-2">
        <p>Sparkline Chart</p>
      </div>
    </Link>
  );
};

export default DesktopCoinOverview;
