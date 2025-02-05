"use client";

import SelectableWrapper from "@/components/UI/SelectableWrapper";
import { useCompareBarContext } from "@/context/CompareBarContext/useCompareBarContext";
import React from "react";

const timeFrames = [
  { label: "1D", value: 1 },
  { label: "1W", value: 7 },
  { label: "2W", value: 14 },
  { label: "1M", value: 30 },
  { label: "3M", value: 90 },
  { label: "1Y", value: 365 },
];

const TimeFrameSelector = () => {
  const { selectedTimeFrame, updateSelectedTimeFrame } = useCompareBarContext();
  const handleSelect = (timeFrame: number) => {
    updateSelectedTimeFrame(timeFrame);
  };

  return (
    <div className="flex justify-between bg-white dark:bg-violet-950 p-1 rounded md:max-w-[450px]">
      {timeFrames.map((timeFrame) => (
        <SelectableWrapper
          key={timeFrame.value}
          selected={selectedTimeFrame === timeFrame.value}
        >
          <button
            className={`text-sm md:text-base font-light py-1 px-3 xl:py-2 xl:px-4 ${
              selectedTimeFrame === timeFrame.value
                ? "dark:text-white"
                : "text-violet-900 dark:text-violet-300"
            }`}
            onClick={() => handleSelect(timeFrame.value)}
          >
            {timeFrame.label}
          </button>
        </SelectableWrapper>
      ))}
    </div>
  );
};

export default TimeFrameSelector;
