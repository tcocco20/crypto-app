import { type CoinData } from "@/actions/getCoinsList";
import Image from "next/image";
import React from "react";

interface MobileCoinOverviewProps {
  coin: CoinData;
}

const MobileCoinOverview = ({ coin }: MobileCoinOverviewProps) => {
  return (
    <div className="flex gap-4 items-center bg-violet-950/90 rounded-md p-3">
      <Image
        src={coin.image}
        alt={"logo for " + coin.name}
        width={24}
        height={24}
      />
      <div>
        <p className="font-medium">{coin.symbol.toUpperCase()}</p>
        <p className="text-xs font-light text-gray-400">{coin.name}</p>
      </div>
      <div className="flex-1 text-right">
        <p className="font-medium">
          {coin.current_price ? "$" + coin.current_price : "No data"}
        </p>
        <p
          className={`text-xs ${
            coin.price_change_percentage_24h > 0
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {coin.price_change_percentage_24h
            ? coin.price_change_percentage_24h.toFixed(2) + "%"
            : "No data"}
        </p>
      </div>
    </div>
  );
};

export default MobileCoinOverview;
