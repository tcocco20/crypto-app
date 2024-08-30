"use client";
import ProgressBar from "@ramonak/react-progress-bar";

interface MeterProps {
  className?: string;
  value: number;
  max: number;
  min?: number;
  height?: string;
  barContainerClassName?: string;
  color?: string;
  completedClassName?: string;
}

interface OneLabelMeter {
  labelClasses?: string;
  label: string;
}

interface TwoLabelMeter {
  // Will be used later to display two labels above the progress bar
  startLabel: string;
  endLabel: string;
}

type MarketCapMeterProps = MeterProps & (OneLabelMeter | TwoLabelMeter);

const MarketCapMeter = (props: MarketCapMeterProps) => {
  if ("startLabel" in props) {
    // Should not be used yet so returning null for now
    return null;
  }

  return (
    <div className="flex gap-1 items-center text-xs flex-grow">
      <label className={props.labelClasses}>{props.label}</label>
      <ProgressBar
        completed={props.value}
        maxCompleted={props.max}
        height={props.height}
        bgColor={props.color}
        customLabel=" "
        className="w-10/12"
        barContainerClassName={`rounded-sm ${props.barContainerClassName}`}
        completedClassName={props.completedClassName}
        // isLabelVisible={false}
      />
    </div>
  );
};

export default MarketCapMeter;
