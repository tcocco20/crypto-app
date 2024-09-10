import React from "react";
import MarketCapMeter from "../UI/MarketCapMeter";
import config from "../../../tailwind.config";

const TopBar = () => {
  let colors: any;
  if (config.theme?.colors) {
    colors = config.theme.colors;
  }

  return (
    <div className="bg-indigo-900/50 flex gap-3 p-4 border-b border-gray-600/80 text-white justify-center">
      <p className="text-xs">Coins 7884</p>
      <p className="text-xs">Exchange 622</p>
      <p className="text-xs">1.68 T</p>
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
  );
};

export default TopBar;
