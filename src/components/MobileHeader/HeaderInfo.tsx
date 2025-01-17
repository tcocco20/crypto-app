import React from "react";
import MarketCapMeter from "../UI/MarketCapMeter";
import config from "../../../tailwind.config";
import Image from "next/image";
import { GlobalMarketData } from "@/lib/types/GlobalMarketData";
import utils from "@/utils";

interface HeaderInfoProps {
  marketData: GlobalMarketData;
}

const HeaderInfo = ({ marketData }: HeaderInfoProps) => {
  let colors: any;
  if (config.theme?.colors) {
    colors = config.theme.colors;
  }

  return (
    <div className="bg-indigo-900 dark:bg-indigo-900/50 flex gap-3 p-4 dark:border-y border-gray-600/80 text-white items-center">
      <p className="text-xs">
        <span className="text-gray-300 dark:text-gray-400">Volume</span>{" "}
        {utils.getDisplayNumber(marketData.totalVolume.usd)}
      </p>
      <div className="flex flex-1 gap-2 item-center">
        <Image
          src="/icons/bitcoin.svg"
          width={20}
          height={20}
          alt="Bitcoin logo"
        />
        <MarketCapMeter
          label="44%"
          max={100}
          value={44}
          height="7px"
          barContainerClassName="bg-gray-300/80"
          color={colors.yellow[400]}
        />
      </div>
      <div className="flex flex-1 gap-2 items-center">
        <Image
          src="/icons/ethereum.svg"
          width={20}
          height={20}
          alt="Ethereum logo"
        />
        <MarketCapMeter
          label="21%"
          max={100}
          value={21}
          height="7px"
          color={colors.indigo[400]}
          barContainerClassName="bg-gray-300/80"
        />
      </div>
    </div>
  );
};

export default HeaderInfo;
