import React from "react";
import MarketCapMeter from "../UI/MarketCapMeter";
import config from "../../../tailwind.config";
import TopBarText from "./TopBarText";
import { ChevronUp, SendToBack, Zap } from "lucide-react";
import actions from "@/actions";

const TopBar = async () => {
  const marketData = await actions.getGlobalMarketData();
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
          value={marketData.totalMarketCap.usd}
          icon={<ChevronUp className="text-cyan-500" size={16} />}
        />
        <MarketCapMeter
          label={marketData.totalVolume.usd.toString()}
          value={20}
          max={100}
          height="7px"
          barContainerClassName="bg-gray-300/80"
          color="#fff"
        />
        <MarketCapMeter
          label={marketData.bitcoinMarketCapPercentage.toFixed(0) + "%"}
          value={marketData.bitcoinMarketCapPercentage}
          max={100}
          height="7px"
          barContainerClassName="bg-gray-300/80"
          color={colors.yellow[400]}
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
  );
};

export default TopBar;
