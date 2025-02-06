"use client";

import React from "react";
import SelectableWrapper from "../../UI/SelectableWrapper";
import Image from "next/image";
import { type ListCoin } from "@/lib/types/ListCoin";
import { useIsMobile } from "@/hooks/useIsMobile";
import PercentageWithIcon from "@/components/UI/PercentageWithIcon";

interface CoinButtonProps {
  selected?: boolean;
  coin: ListCoin;
  onClick?: () => void;
}

const CoinButton = ({ selected = false, coin, onClick }: CoinButtonProps) => {
  const displaySymbol = coin.symbol.toUpperCase();
  const isMobile = useIsMobile();
  const iconSize = isMobile ? 24 : 38;
  const displayPercentage =
    Math.abs(coin.price_change_percentage_24h_in_currency).toFixed(2) + "%";
  const displayPrice = coin.current_price.toLocaleString();
  return (
    <SelectableWrapper selected={selected} widthClasses="w-fit">
      <button
        onClick={onClick}
        className={`p-3 md:p-5 w-full rounded-md flex items-center gap-2 md:gap-4 ${
          !selected ? "bg-white dark:bg-violet-950" : ""
        }`}
      >
        <Image
          src={coin.image}
          alt={coin.name}
          width={iconSize}
          height={iconSize}
        />
        <div className="flex flex-col items-start">
          <p className="md:hidden">{displaySymbol} </p>
          <p className="hidden md:block text-lg font-light">
            {coin.name} ({displaySymbol})
          </p>
          <div className="hidden md:flex items-center gap-4">
            <p className="font-light">{displayPrice} USD</p>
            <PercentageWithIcon
              percentage={displayPercentage}
              percentageUp={coin.price_change_percentage_24h_in_currency > 0}
              fixedSize
              selectable
            />
          </div>
        </div>
      </button>
    </SelectableWrapper>
  );
};

export default CoinButton;
