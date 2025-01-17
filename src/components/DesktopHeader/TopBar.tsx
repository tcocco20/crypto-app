import React from "react";
import MarketCapMeter from "../UI/MarketCapMeter";
import config from "../../../tailwind.config";
import TopBarText from "./TopBarText";
import { ChevronUp, SendToBack, Zap } from "lucide-react";
import utils from "@/utils";
import Image from "next/image";
import { GlobalMarketData } from "@/lib/types/GlobalMarketData";

interface TopBarProps {
  marketData: GlobalMarketData;
}

const TopBar = ({ marketData }: TopBarProps) => {
  let colors: any;
  if (config.theme?.colors) {
    colors = config.theme.colors;
  }

  return (
    <div className="bg-indigo-900 shadow-black dark:bg-indigo-900/40 p-5 dark:border-b dark:border-gray-600/80 text-white justify-center">
      <div className="max-w-4xl mx-auto flex gap-11 justify-center text-sm">
        <TopBarText
          text="Coins"
          value={marketData.coins}
          icon={
            <Zap
              fill="#000"
              color="#000"
              size={12}
              className="rounded-full bg-white w-4 h-4 p-1"
            />
          }
        />
        <TopBarText
          text="Exchange"
          value={marketData.markets}
          icon={<SendToBack fill="#fff" size={18} />}
        />
        <TopBarText
          value={utils.getDisplayNumber(marketData.totalMarketCap.usd)}
          icon={<ChevronUp className="text-cyan-500" size={16} />}
        />
        <TopBarText
          text="Volume"
          value={utils.getDisplayNumber(marketData.totalVolume.usd)}
        />
        <div className="flex gap-2 items-center w-full">
          <Image
            src="/icons/bitcoin.svg"
            width={20}
            height={20}
            alt="Bitcoin logo"
          />
          <MarketCapMeter
            label={marketData.bitcoinMarketCapPercentage.toFixed(0) + "%"}
            value={marketData.bitcoinMarketCapPercentage}
            max={100}
            height="7px"
            barContainerClassName="bg-gray-300/80"
            color={colors.yellow[400]}
          />
        </div>
        <div className="flex gap-2 items-center w-full">
          <Image
            src="/icons/ethereum.svg"
            width={20}
            height={20}
            alt="Ethereum logo"
          />
          <MarketCapMeter
            label={marketData.ethereumMarketCapPercentage.toFixed(0) + "%"}
            value={marketData.ethereumMarketCapPercentage}
            max={100}
            height="7px"
            color={colors.indigo[400]}
            barContainerClassName="bg-gray-300/80"
          />
        </div>
      </div>
    </div>
  );
};

export default TopBar;
