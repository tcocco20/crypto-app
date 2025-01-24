import React from "react";
import SelectableWrapper from "../UI/SelectableWrapper";
import { Plus } from "lucide-react";

interface DataPointProps {
  title: string;
  currencyDisplay?: boolean;
  currencyToDisplay?: string;
  currencyLocation?: "left" | "right";
  dataPoint: number | null;
}

const DataPoint = ({
  title,
  currencyDisplay,
  currencyToDisplay,
  currencyLocation = "left",
  dataPoint,
}: DataPointProps) => {
  let dataPointToDisplay = "N/A";
  if (dataPoint) {
    // Allows component to be reused and is used to configure how the data point is displayed
    if (currencyDisplay) {
      dataPointToDisplay = dataPoint?.toLocaleString();
    } else {
      dataPointToDisplay = dataPoint.toString();
    }
    if (currencyToDisplay) {
      if (currencyLocation === "right") {
        dataPointToDisplay = `${dataPointToDisplay} ${currencyToDisplay}`;
      } else {
        dataPointToDisplay = `${currencyToDisplay}${dataPointToDisplay}`;
      }
    }
  }
  return (
    <div className="flex items-center">
      <div className="flex items-center w-1/2 gap-3">
        <SelectableWrapper selected rounded shadowSize="shadow-[0_0_20px]">
          <Plus size={24} strokeWidth={3} className="p-1" />
        </SelectableWrapper>
        <p>{title}</p>
      </div>
      <p className="text-xl w-1/2">{dataPointToDisplay}</p>
    </div>
  );
};

export default DataPoint;
