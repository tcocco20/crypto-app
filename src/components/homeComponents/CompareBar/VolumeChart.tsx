import Card from "@/components/UI/Card";
import React from "react";

const VolumeChart = () => {
  return (
    <Card className="p-4">
      <p className="font-medium text-lg">Volume 24h</p>
      <p className="text-xs text-gray-400">Today</p>
    </Card>
  );
};

export default VolumeChart;
