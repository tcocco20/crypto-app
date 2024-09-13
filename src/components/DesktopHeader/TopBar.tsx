import React from "react";
import MarketCapMeter from "../UI/MarketCapMeter";
import config from "../../../tailwind.config";
import TopBarText from "./TopBarText";
import { ChevronUp, SendToBack, Zap } from "lucide-react";

const TopBar = () => {
  let colors: any;
  if (config.theme?.colors) {
    colors = config.theme.colors;
  }

  return (
    <div className="bg-indigo-900/40 p-5 border-b border-gray-600/80 text-white justify-center">
      <div className="max-w-4xl mx-auto flex gap-11 justify-center text-sm">
        <TopBarText
          text="Coins"
          value={7884}
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
          value={622}
          icon={<SendToBack fill="#fff" size={18} />}
        />
        <TopBarText
          value={"1.68 T"}
          icon={<ChevronUp className="text-cyan-500" size={16} />}
        />
        <MarketCapMeter
          label="$124.45B"
          value={20}
          max={100}
          height="7px"
          barContainerClassName="bg-gray-300/80"
          color="#fff"
        />
        <MarketCapMeter
          label="44%"
          value={44}
          max={100}
          height="7px"
          barContainerClassName="bg-gray-300/80"
          color={colors.yellow[400]}
        />
        <MarketCapMeter
          label="21%"
          value={21}
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
