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
    <div className="flex justify-between dark:bg-violet-950 p-3 rounded-sm">
      {timeFrames.map((timeFrame) => (
        <button
          key={timeFrame.value}
          className={`time-frame-button ${
            selectedTimeFrame === timeFrame.value ? "selected" : ""
          }`}
          onClick={() => handleSelect(timeFrame.value)}
        >
          <SelectableWrapper selected={selectedTimeFrame === timeFrame.value}>
            {timeFrame.label}
          </SelectableWrapper>
        </button>
      ))}
    </div>
  );
};

export default TimeFrameSelector;
