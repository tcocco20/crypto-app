import React from "react";

interface OneLabelMeter extends HTMLMeterElement {
  label: string;
}

interface TwoLabelMeter extends HTMLMeterElement {
  startLabel: string;
  endLabel: string;
}

type MarketCapMeterProps = OneLabelMeter | TwoLabelMeter;

const MarketCapMeter = ({
  label,
  startLabel,
  endLabel,
}: MarketCapMeterProps) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <meter value=""></meter>
    </div>
  );
};

export default MarketCapMeter;
