import SelectableWrapper from "@/components/UI/SelectableWrapper";
import React, { useState } from "react";

interface TimeFrameSelectorProps {
  onSelect: (timeFrame: number) => void;
}

const timeFrames = [
  { label: "1D", value: 1 },
  { label: "1W", value: 7 },
  { label: "2W", value: 14 },
  { label: "1M", value: 30 },
  { label: "3M", value: 90 },
  { label: "1Y", value: 365 },
];

const TimeFrameSelector: React.FC<TimeFrameSelectorProps> = ({ onSelect }) => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(1);

  const handleSelect = (timeFrame: number) => {
    setSelectedTimeFrame(timeFrame);
    onSelect(timeFrame);
  };

  return (
    <div className="flex justify-between bg-white dark:bg-violet-950 p-1 rounded">
      {timeFrames.map((timeFrame) => (
        <SelectableWrapper
          key={timeFrame.value}
          selected={selectedTimeFrame === timeFrame.value}
          py="py-1 px-3"
        >
          <button
            className={`text-sm font-light ${
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
