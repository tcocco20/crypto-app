interface MeterProps {
  id: string;
  className?: string;
  value: number;
  max: number;
  min?: number;
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
    <div className="flex gap-2 items-center text-xs">
      <label className={props.labelClasses} htmlFor={props.id}>
        {props.label}
      </label>
      <meter
        className={props.className}
        id={props.id}
        value={props.value}
        max={props.max}
      />
    </div>
  );
};

export default MarketCapMeter;
