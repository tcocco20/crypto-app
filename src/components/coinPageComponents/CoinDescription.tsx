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
    if (isMobile) {
      return utils.truncateString(description, 250);
    }
    return utils.truncateString(description, 870);
  };
  return (
    <div className="col-span-4">
      <h3 className="text-xl mb-4">Description</h3>
      {renderDescription()}
      {description.length > 870 && (
        <button className="text-indigo-500 ml-4" onClick={handleToggleExpanded}>
          {isExpanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};

export default CoinDescription;
