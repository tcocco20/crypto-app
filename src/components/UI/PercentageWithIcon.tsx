import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

interface PercentageWithIconProps {
  percentage: string;
  percentageUp: boolean;
  fixedSize?: boolean;
}

const PercentageWithIcon = ({
  percentage,
  percentageUp,
  fixedSize,
}: PercentageWithIconProps) => {
  const responsiveClasses = "md:text-xs lg:text-sm xl:text-base";

  return (
    <div className="flex gap-2 items-center">
      {percentageUp ? (
        <ChevronUp strokeWidth={4} size={20} className="text-cyan-600" />
      ) : (
        <ChevronDown strokeWidth={4} size={20} className="text-pink-600" />
      )}
      <p
        className={`${!fixedSize && responsiveClasses} ${
          percentageUp ? "text-cyan-600" : "text-pink-600"
        }`}
      >
        {percentage}
      </p>
    </div>
  );
};

export default PercentageWithIcon;
