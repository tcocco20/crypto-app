import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CoinSelectorSkeleton = () => {
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
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
    </SkeletonTheme>
  );
};

export default CoinSelectorSkeleton;
