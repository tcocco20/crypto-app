"use client";
import React from "react";
import SelectableWrapper from "../UI/SelectableWrapper";
import { Plus } from "lucide-react";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useIsLg } from "@/hooks/useIsLg";

interface DataPointProps {
  title: string;
  currencyDisplay?: boolean;
  formatter?: Intl.NumberFormat;
  currencyToDisplay?: string;
  dataPoint: number | null;
}

const DataPoint = ({
  title,
  currencyDisplay,
  currencyToDisplay,
  formatter,
  dataPoint,
}: DataPointProps) => {
  const isMobile = useIsMobile();
  const isLg = useIsLg();
  const iconSize = isMobile ? 24 : isLg ? 24 : 18;
  let dataPointToDisplay = "N/A";
  if (dataPoint) {
    if (currencyDisplay) {
      dataPointToDisplay = formatter?.format(dataPoint) || dataPoint.toString();
    } else {
      dataPointToDisplay = dataPoint.toString();
    }
    if (currencyToDisplay) {
      dataPointToDisplay = `${dataPointToDisplay} ${currencyToDisplay}`;
    }
  }

  return (
    <div className="flex items-center">
      <div className="flex items-center w-1/2 gap-3">
        <SelectableWrapper selected rounded shadowSize="shadow-[0_0_20px]">
          <Plus size={iconSize} strokeWidth={3} className="p-1" />
        </SelectableWrapper>
        <p className="text-xs md:text-sm xl:text-base">{title}</p>
      </div>
      <p className="text-sm md:text-base lg:text-lg xl:text-xl w-1/2">
        {dataPointToDisplay}
      </p>
    </div>
  );
};

export default DataPoint;
