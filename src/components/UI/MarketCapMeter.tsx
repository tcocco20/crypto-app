import React from "react";

interface OneLabelMeter extends HTMLMeterElement {
  label: string;
}

interface TwoLabelMeter extends HTMLMeterElement {
  startLabel: string;
  endLabel: string;
}

type MarketCapMeterProps = OneLabelMeter | TwoLabelMeter;

const MarketCapMeter = (props: MarketCapMeterProps) => {
  return (
    <div>
      <label htmlFor=""></label>
      <meter value={props.value}></meter>
    </div>
  );
};

export default MarketCapMeter;
