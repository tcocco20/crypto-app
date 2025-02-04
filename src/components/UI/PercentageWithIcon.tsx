import { ChevronDown, ChevronUp } from "lucide-react";
import React from "react";

interface PercentageWithIconProps {
  percentage: string;
  percentageUp: boolean;
  fixedSize?: boolean;
  selectable?: boolean;
}

const PercentageWithIcon = ({
  percentage,
  percentageUp,
  fixedSize,
  selectable,
}: PercentageWithIconProps) => {
  const responsiveClasses = "md:text-xs lg:text-sm xl:text-base";
  const priceUpSelectableClasses = "text-cyan-800 dark:text-cyan-600";
  const priceUpTextClasses = selectable
    ? priceUpSelectableClasses
    : "text-cyan-600";

  return (
    <div className="flex gap-2 items-center">
      {percentageUp ? (
        <ChevronUp strokeWidth={4} size={20} className={priceUpTextClasses} />
      ) : (
        <ChevronDown strokeWidth={4} size={20} className="text-pink-600" />
      )}
      <p
        className={`${!fixedSize && responsiveClasses} ${
          percentageUp ? priceUpTextClasses : "text-pink-600"
        }`}
      >
        {percentage}
      </p>
    </div>
  );
};

export default PercentageWithIcon;
