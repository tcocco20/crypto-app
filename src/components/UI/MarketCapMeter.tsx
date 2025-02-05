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
  priceUp?: boolean;
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
  const { priceUp } = props;
  const priceUpColor = priceUp ? "text-cyan-600" : "text-pink-600";
  const priceUpBg = priceUp ? "text-cyan-600/70" : "text-pink-600/70";

  if ("startLabel" in props) {
    return (
      <div
        className={`text-xs flex flex-col gap-1 ${props.containerClassName}`}
      >
        <div className="w-full flex justify-between">
          <label className={`text-xs ${priceUpColor}`}>
            {props.startLabel}
          </label>
          <label className={"text-xs " + priceUpBg}>{props.endLabel}</label>
        </div>
        <ProgressBar
          completed={props.value}
          maxCompleted={props.max}
          height={props.height || "6px"}
          bgColor={props.color}
          customLabel=" "
          className="w-full"
          barContainerClassName={`rounded-sm ${props.barContainerClassName}`}
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
