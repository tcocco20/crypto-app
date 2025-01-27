"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import utils from "@/utils";
import { useState } from "react";

interface CoinDescriptionProps {
  description: string;
}

const CoinDescription = ({ description }: CoinDescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const isMobile = useIsMobile();
  const shortDescriptionLength = isMobile ? 250 : 870;

  const handleToggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  const renderDescription = () => {
    if (description.length === 0) {
      return "No description available.";
    }
    if (isExpanded) {
      return description;
    }
    return utils.truncateString(description, shortDescriptionLength);
  };
  return (
    <div className="col-span-4 md:text-xs lg:text-sm xl:text-base">
      <h3 className="text-xl md:text-lg xl:text-xl mb-4">Description</h3>
      {renderDescription()}
      {description.length > shortDescriptionLength && (
        <button className="text-indigo-500 ml-4" onClick={handleToggleExpanded}>
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default CoinDescription;
