"use client";
import React, { useState } from "react";
import MobileCoinOverview from "./MobileCoinOverview";
import { getCoinsList } from "@/actions/getCoinsList";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { type ListCoin } from "@/lib/types/ListCoin";
import { useIsMobile } from "@/hooks/useIsMobile";
import DesktopCoinOverview from "./DesktopCoinOverview";
import { loadCoins } from "@/lib/features/coinList/coinListSlice";

const MarketOverview = () => {
  const coins = useAppSelector((state) => state.coinList.coins);
  const currentPage = useAppSelector((state) => state.coinList.pagesLoaded);
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );
  const dispatch = useAppDispatch();
  const [hasMore, setHasMore] = useState(true);
  const isMobile = useIsMobile();

  const renderCoins = () => {
    if (!coins) return null;
    return coins.map((coin) => {
      return isMobile ? (
        <MobileCoinOverview key={coin.id} coin={coin} />
      ) : (
        <DesktopCoinOverview key={coin.id} coin={coin} />
      );
    });
  };

  const fetchCoins = async () => {
    const data = (await getCoinsList(
      selectedCurrency,
      currentPage + 1,
      true
    )) as ListCoin[];
    if (!data.length || data.length === 0) {
      setHasMore(false);
      return;
    }

    dispatch(loadCoins(data));
  };

  if (!coins) return <p className="text-white">Loading...</p>;

  return (
    <>
      <div className="hidden w-full md:grid md:grid-cols-11 md:gap-1 lg:gap-2 xl:gap-4 px-4 text-violet-900 dark:text-gray-400 text-xs xl:text-sm mb-4">
        <p className="col-span-2">Name</p>
        <p>Price</p>
        <p>1h %</p>
        <p>24h %</p>
        <p>7d %</p>
        <p className="col-span-2">24h Volume / Market Cap</p>
        <p className="col-span-2">Circulating / Total Supply</p>
        <p>Last 7d</p>
      </div>
      <InfiniteScroll
        dataLength={coins.length}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        endMessage={<p style={{ textAlign: "center" }}>end of list</p>}
        next={fetchCoins}
        className="text-white flex flex-col gap-1 md:gap-2 pb-16 mb-2"
      >
        {renderCoins()}
      </InfiniteScroll>
    </>
  );
};

export default MarketOverview;
