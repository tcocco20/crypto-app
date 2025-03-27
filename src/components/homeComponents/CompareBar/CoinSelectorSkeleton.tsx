import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CoinSelectorSkeleton = () => {
  return (
    <div className="flex w-full gap-2">
      <Skeleton
        className="py-5 lg:py-10"
        containerClassName="bg-black flex-1"
      />
      <Skeleton
        className="py-5 lg:py-10"
        containerClassName="bg-black flex-1"
      />
      <Skeleton
        className="py-5 lg:py-10"
        containerClassName="bg-black flex-1"
      />
      <Skeleton
        className="py-5 lg:py-10"
        containerClassName="bg-black flex-1"
      />
    </div>
  );
};

export default CoinSelectorSkeleton;
