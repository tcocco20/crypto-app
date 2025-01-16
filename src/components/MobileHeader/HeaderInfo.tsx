import React from "react";
import MarketCapMeter from "../UI/MarketCapMeter";
import config from "../../../tailwind.config";
import Image from "next/image";

const HeaderInfo = () => {
  let colors: any;
  if (config.theme?.colors) {
    colors = config.theme.colors;
  }

  return (
    <div className="bg-indigo-900 dark:bg-indigo-900/50 flex gap-3 p-4 dark:border-y border-gray-600/80 text-white">
      <MarketCapMeter
        label="$124.45B"
        max={100}
        value={20}
        height="7px"
        barContainerClassName="bg-gray-300/80"
        color="#fff"
      />
      <div className="flex w-full gap-2 item-center">
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
      <div className="flex w-full gap-2 items-center">
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
