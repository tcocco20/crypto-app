import React from "react";

interface PercentageWithIconProps {
  percentage: number;
}

const PercentageWithIcon = ({ percentage }: PercentageWithIconProps) => {
  return <div>{percentage}</div>;
};

export default PercentageWithIcon;
