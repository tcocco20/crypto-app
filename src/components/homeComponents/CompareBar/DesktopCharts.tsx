import React from "react";
import PriceChart from "./PriceChart";
import VolumeChart from "./VolumeChart";

const DesktopCharts = () => {
  return (
    <div className="hidden md:flex gap-8 w-100 items-stretch">
      <PriceChart />
      <VolumeChart />
    </div>
  );
};

export default DesktopCharts;
