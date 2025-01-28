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
    showCoin,
    coinDisplayName,
    displayPrice,
    oneDayChange,
    oneHrChange,
    oneWeekChange,
  } = utils.getCoinOverview(coin);

  return (
    <Link
      href={`/coin/${coin.id}`}
      className="flex gap-4 items-center bg-white dark:bg-violet-950/90 rounded-md p-6 text-black dark:text-white"
    >
      {showCoin && (
        <Image
          src={coin.image}
          alt={"logo for " + coin.name}
          width={32}
          height={32}
        />
      )}
      <p className="text-lg">{coinDisplayName}</p>
      <p className="text-lg">{displayPrice}</p>
      <p className="text-lg">{oneHrChange}</p>
      <p className="text-lg">{oneDayChange}</p>
      <p className="text-lg">{oneWeekChange}</p>
    </Link>
  );
};

export default DesktopCoinOverview;
