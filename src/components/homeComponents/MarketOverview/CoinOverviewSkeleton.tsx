"use client";
import { useIsMobile } from "@/hooks/useIsMobile";
import React from "react";
import Skeleton from "react-loading-skeleton";

const CoinOverviewSkeleton = () => {
  const isMobile = useIsMobile();
  const skeletonHeight = isMobile ? 60 : 70;
  return (
    <div>
      <Skeleton height={skeletonHeight} />
      <Skeleton height={skeletonHeight} />
      <Skeleton height={skeletonHeight} />
      <Skeleton height={skeletonHeight} />
      <Skeleton height={skeletonHeight} />
      <Skeleton height={skeletonHeight} />
    </div>
  );
};

export default CoinOverviewSkeleton;
