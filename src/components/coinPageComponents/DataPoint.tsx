import React from "react";
import SelectableWrapper from "../UI/SelectableWrapper";
import { Plus } from "lucide-react";
import utils from "@/utils";

interface DataPointProps {
  title: string;
  currencyDisplay?: boolean;
  currencyToDisplay?: string;
  currencyLocation?: "left" | "right";
}

interface SingleDataPointProps extends DataPointProps {
  dataPoint: number | null;
}

interface DataObjectProps extends DataPointProps {
  dataObject: any;
  property: keyof any;
}

const DataPoint = ({
  title,
  currencyDisplay,
  currencyToDisplay,
  currencyLocation = "left",
  ...props
}: SingleDataPointProps | DataObjectProps) => {
  let dataPointToDisplay = "-"; // Default value if dataPoint is null
  let dataPoint: number | null = null;
  if ("dataPoint" in props) {
    dataPoint = props.dataPoint;
  } else {
    if (utils.isPropertyType(props.dataObject, props.property)) {
      dataPoint = props.dataObject[props.property];
    }
  }

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
