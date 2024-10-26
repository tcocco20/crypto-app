"use client";
import React, { useState } from "react";
import MobileCoinOverview from "./MobileCoinOverview";
import { getCoinsList } from "@/actions/getCoinsList";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppSelector } from "@/lib/hooks";
import { type ListCoin } from "@/lib/types/ListCoin";

interface MarketOverviewProps {
  startingCoins: ListCoin[];
}

const MarketOverview = ({ startingCoins }: MarketOverviewProps) => {
  const [coins, setCoins] = useState(startingCoins);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );

  const renderCoins = () => {
    if (!coins) return null;
    return coins.map((coin) => {
      return <MobileCoinOverview key={coin.id} coin={coin} />;
    });
  };

  const fetchCoins = async () => {
    const data = (await getCoinsList(
      selectedCurrency,
      currentPage + 1
    )) as ListCoin[];
    if (!data.length || data.length === 0) {
      setHasMore(false);
      return;
    }

    setCoins((prev) => {
      if (!prev) return data;
      return [...prev, ...data];
    });
    setCurrentPage((prev) => ++prev);
  };

  if (!coins) return <p className="text-white">Loading...</p>;

  return (
    <InfiniteScroll
      dataLength={coins.length}
      hasMore={hasMore}
      loader={<p>Loading...</p>}
      endMessage={<p style={{ textAlign: "center" }}>end of list</p>}
      next={fetchCoins}
      className="text-white flex flex-col gap-1 pb-16 mb-2"
    >
      {renderCoins()}
    </InfiniteScroll>
  );
};

export default MarketOverview;
