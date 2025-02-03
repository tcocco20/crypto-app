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
  containerClassName?: string;
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
    return (
      <div
        className={`text-xs md:text-sm flex flex-col gap-1 ${props.containerClassName}`}
      >
        <div className="w-full flex justify-between">
          <label className={`text-xs text-[${props.color}]`}>
            {props.startLabel}
          </label>
          <label className={"text-xs " + "text-[" + props.color + "]/70"}>
            {props.endLabel}
          </label>
        </div>
        <ProgressBar
          completed={props.value}
          maxCompleted={props.max}
          height={props.height || "10px"}
          bgColor={props.color}
          customLabel=" "
          className="w-full"
          barContainerClassName={`rounded ${props.barContainerClassName}`}
          completedClassName={props.completedClassName}
        />
      </div>
    );
  }

  return (
    <div className="flex gap-1 items-center text-xs md:text-sm flex-grow">
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
      />
    </div>
  );
};

export default MarketCapMeter;
