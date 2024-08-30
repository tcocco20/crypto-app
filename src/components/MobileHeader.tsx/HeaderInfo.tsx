import React from "react";
import MarketCapMeter from "../UI/MarketCapMeter";

const HeaderInfo = () => {
  return (
    <div className="bg-indigo-800 flex justify-between px-1 py-4 text-white">
      <MarketCapMeter label="$124.45B" max={100} value={12} id="totalValue" />
      <MarketCapMeter label="44%" max={100} value={44} id="bitcoin" />
      <MarketCapMeter label="21%" max={100} value={21} id="ethereum" />
    </div>
  );
};

export default HeaderInfo;
