"use client";
import React, { useEffect, useState } from "react";
import MobileCoinOverview from "./MobileCoinOverview";
import { CoinData, getCoinsList } from "@/actions/getCoinsList";

const MarketOverview = () => {
  const [coins, setCoins] = useState<CoinData[] | undefined>();
  const [currentPage, setCurrentPage] = useState(1);

  const renderCoins = () => {
    if (!coins) return null;
    return coins.map((coin) => {
      return <MobileCoinOverview key={coin.id} coin={coin} />;
    });
  };

  useEffect(() => {
    const fetchCoins = async () => {
      const data = (await getCoinsList("usd", currentPage)) as CoinData[];
      setCoins(data);
    };
    fetchCoins();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prev) => ++prev);
  };

  if (!coins) return <p className="text-white">Loading...</p>;

  return (
    <div className="text-white flex flex-col gap-1 pb-16 mb-2">
      <button
        className="bg-blue-500 rounded-md py-4 active:opacity-50"
        onClick={handleNextPage}
      >
        Current Page: {currentPage} Next Page
      </button>
      {renderCoins()}
    </div>
  );
};

export default MarketOverview;
