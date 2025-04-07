"use client";

import React from "react";
import SelectableWrapper from "../../UI/SelectableWrapper";
import Image from "next/image";
import { type ListCoin } from "@/lib/types/ListCoin";
import { useIsMobile } from "@/hooks/useIsMobile";
import PercentageWithIcon from "@/components/UI/PercentageWithIcon";
import { useAppSelector } from "@/lib/hooks";
import { getCurrencyFormatter } from "@/utils/formatCurrency";

interface CoinButtonProps {
  selected?: boolean;
  coin: ListCoin;
  onClick?: () => void;
}

const CoinButton = ({ selected = false, coin, onClick }: CoinButtonProps) => {
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );
  const { formatter, supported } = getCurrencyFormatter(selectedCurrency);
  const displaySymbol = coin.symbol.toUpperCase();
  const isMobile = useIsMobile();
  const iconSize = isMobile ? 24 : 38;
  const displayPercentage =
    Math.abs(coin.price_change_percentage_24h_in_currency).toFixed(2) + "%";
  let displayPrice: string;
  if (coin.current_price) {
    if (supported) displayPrice = formatter.format(coin.current_price);
    else
      displayPrice =
        coin.current_price.toFixed(2) + " " + selectedCurrency.toUpperCase();
  } else {
    displayPrice = "N/A";
  }

  return (
    <SelectableWrapper selected={selected} widthClasses="w-fit">
      <button
        onClick={onClick}
        className={`p-3 md:p-5 w-full rounded-md flex items-center gap-2 md:gap-4 ${
          !selected
            ? "bg-white dark:bg-violet-950 hover:bg-indigo-400 hover:dark:bg-indigo-700/90"
            : ""
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
            <p className="font-light">{displayPrice}</p>
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
