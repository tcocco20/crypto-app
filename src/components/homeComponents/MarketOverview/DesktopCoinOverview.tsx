import { type ListCoin } from "@/lib/types/ListCoin";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface DesktopCoinOverviewProps {
  coin: ListCoin;
}

const DesktopCoinOverview = ({ coin }: DesktopCoinOverviewProps) => {
  return (
    <Link
      href={`/coin/${coin.id}`}
      className="flex gap-4 items-center bg-white dark:bg-violet-950/90 rounded-md p-6 text-black dark:text-white"
    >
      {coin.image !== "missing_large.png" && (
        <Image
          src={coin.image}
          alt={"logo for " + coin.name}
          width={32}
          height={32}
        />
      )}
      {coin.name}
    </Link>
  );
};

export default DesktopCoinOverview;
