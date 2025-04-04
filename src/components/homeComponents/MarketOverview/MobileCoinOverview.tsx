"use client";

import { type ListCoin } from "@/lib/types/ListCoin";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CoinOverviewChart from "./CoinOverviewChart";
import { useAppSelector } from "@/lib/hooks";

interface MobileCoinOverviewProps {
  coin: ListCoin;
}

const MobileCoinOverview = ({ coin }: MobileCoinOverviewProps) => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );
  const displayPrice = coin.current_price
    ? coin.current_price + " " + selectedCurrency.toUpperCase()
    : "No price data";

  const displayPriceChange = coin.price_change_percentage_7d_in_currency
    ? coin.price_change_percentage_7d_in_currency.toFixed(2) + "%"
    : "No data";

  const showCoin = !coin.image.includes("missing");

  return (
    <Link
      href={`/coin/${coin.id}`}
      className="flex gap-3 items-center bg-white dark:bg-violet-950 rounded-md p-3 text-black dark:text-white"
    >
      {showCoin && (
        <Image
          src={coin.image}
          alt={"logo for " + coin.name}
          width={24}
          height={24}
        />
      )}
      <div className="flex-1">
        {coin.symbol && (
          <p className="font-medium">{coin.symbol.toUpperCase()}</p>
        )}
        <p className="text-xs font-light text-gray-400">{coin.name}</p>
      </div>
      {coin.sparkline_in_7d!.price.length > 0 && (
        <CoinOverviewChart coin={coin} />
      )}
      <div className="text-right flex-1">
        <p className="font-medium text-sm">{displayPrice}</p>
        <p
          className={`text-xs ${
            coin.price_change_percentage_7d_in_currency > 0
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {displayPriceChange}
        </p>
      </div>
    </Link>
  );
};

export default MobileCoinOverview;
