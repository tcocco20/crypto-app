"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import CoinButton from "./CoinButton";
import { FreeMode } from "swiper/modules";
import { type ListCoin } from "@/lib/types/ListCoin";
import { useCompareBarContext } from "@/context/CompareBarContext/useCompareBarContext";

interface CoinSelectorProps {
  coinsList: ListCoin[];
}

const CoinSelector = ({ coinsList }: CoinSelectorProps) => {
  const {
    compareModeSelected,
    firstCoinId,
    updateFirstCoinId,
    secondCoinId,
    updateSecondCoinId,
    updateFirstCoin,
    updateSecondCoin,
  } = useCompareBarContext();

  const handleCoinClick = (coinId: string) => {
    if (!compareModeSelected) {
      updateFirstCoinId(coinId);
      updateFirstCoin(coinsList.find((coin) => coin.id === coinId)!);
    } else {
      if (coinId === firstCoinId) {
        return;
      } else {
        updateSecondCoinId(coinId);
        updateSecondCoin(coinsList.find((coin) => coin.id === coinId)!);
      }
    }
  };

  return (
    <div className="w-full">
      <Swiper
        spaceBetween={10}
        modules={[FreeMode]}
        freeMode
        slidesPerView={"auto"}
        loop
        observer
        observeSlideChildren
      >
        {coinsList.map((coin) => (
          <SwiperSlide key={coin.id} style={{ width: "fit-content" }}>
            <CoinButton
              coin={coin}
              selected={firstCoinId === coin.id || secondCoinId === coin.id}
              onClick={() => handleCoinClick(coin.id)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CoinSelector;
