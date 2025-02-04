"use client";

import React from "react";
import SelectableWrapper from "../../UI/SelectableWrapper";
import Image from "next/image";
import { type ListCoin } from "@/lib/types/ListCoin";
import { useIsMobile } from "@/hooks/useIsMobile";

interface CoinButtonProps {
  selected?: boolean;
  coin: ListCoin;
  onClick?: () => void;
}

const CoinButton = ({ selected = false, coin, onClick }: CoinButtonProps) => {
  const displaySymbol = coin.symbol.toUpperCase();
  const isMobile = useIsMobile();
  const iconSize = isMobile ? 24 : 38;
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
          <p className="font-light">{coin.current_price} USD ^ 15.6%</p>
        </div>
      </button>
    </SelectableWrapper>
  );
};

export default CoinButton;
