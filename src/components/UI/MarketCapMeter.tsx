"use client";
import ProgressBar from "@ramonak/react-progress-bar";
import { ReactNode } from "react";

interface MeterProps {
  className?: string;
  value: number;
  max: number;
  min?: number;
  height?: string;
  barContainerClassName?: string;
  color?: string;
  completedClassName?: string;
  icon?: ReactNode;
}

interface OneLabelMeter {
  labelClasses?: string;
  label: string;
}

interface TwoLabelMeter {
  startLabel: string;
  endLabel: string;
}

type MarketCapMeterProps = MeterProps & (OneLabelMeter | TwoLabelMeter);

const MarketCapMeter = (props: MarketCapMeterProps) => {
  if ("startLabel" in props) {
    return null;
  }

  return (
    <div className="flex gap-2 items-center text-xs flex-grow">
      {!!props.icon && props.icon}
      <label className={props.labelClasses}>{props.label}</label>
      <ProgressBar
        completed={props.value}
        maxCompleted={props.max}
        height={props.height}
        bgColor={props.color}
        customLabel=" "
        className="w-full"
        barContainerClassName={`rounded-sm ${props.barContainerClassName}`}
        completedClassName={props.completedClassName}
        // isLabelVisible={false}
      />
    </div>
  );
};

export default MarketCapMeter;
