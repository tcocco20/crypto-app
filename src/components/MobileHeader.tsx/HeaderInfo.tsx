import React from "react";
import MarketCapMeter from "../UI/MarketCapMeter";
import config from "../../../tailwind.config";

const HeaderInfo = () => {
  let colors: any;
  if (config.theme?.colors) {
    colors = config.theme.colors;
  }

  return (
    <div className="bg-indigo-900/50 flex gap-3 p-4 border border-gray-600/80 text-white">
      <MarketCapMeter
        label="$124.45B"
        max={100}
        value={20}
        height="7px"
        barContainerClassName="bg-gray-300/80"
        color="#fff"
      />
      <MarketCapMeter
        label="44%"
        max={100}
        value={44}
        height="7px"
        barContainerClassName="bg-gray-300/80"
        color={colors.yellow[400]}
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
  );
};

export default HeaderInfo;
