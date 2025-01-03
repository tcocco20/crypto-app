import SelectableWrapper from "@/components/UI/SelectableWrapper";
import React, { useState } from "react";

interface TimeFrameSelectorProps {
  onSelect: (timeFrame: number) => void;
}

const timeFrames = [
  { label: "1D", value: 2 },
  { label: "1W", value: 8 },
  { label: "2W", value: 15 },
  { label: "1M", value: 31 },
  { label: "3M", value: 91 },
  { label: "1Y", value: 365 },
];

const TimeFrameSelector: React.FC<TimeFrameSelectorProps> = ({ onSelect }) => {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(2);

  const handleSelect = (timeFrame: number) => {
    setSelectedTimeFrame(timeFrame);
    onSelect(timeFrame);
  };

  return (
    <div className="flex justify-between dark:bg-violet-950 p-1 rounded-sm">
      {timeFrames.map((timeFrame) => (
        <SelectableWrapper
          key={timeFrame.value}
          selected={selectedTimeFrame === timeFrame.value}
          py="py-1 px-3"
        >
          <button
            className={`text-sm font-light ${
              selectedTimeFrame === timeFrame.value
                ? "text-white"
                : "text-violet-300"
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
