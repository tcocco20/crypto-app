"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import CoinButton from "./CoinButton";
import { FreeMode } from "swiper/modules";
import { useEffect } from "react";
import { type ListCoin } from "@/lib/types/ListCoin";

interface CoinSelectorProps {
  coinsList: ListCoin[];
  compareModeSelected: boolean;
  selectedCoin: string;
  setSelectedCoin: (coin: string) => void;
  secondSelectedCoin?: string;
  setSecondSelectedCoin: (coin: string | undefined) => void;
}

const CoinSelector = ({
  coinsList,
  compareModeSelected,
  selectedCoin,
  setSelectedCoin,
  secondSelectedCoin,
  setSecondSelectedCoin,
}: CoinSelectorProps) => {
  const handleCoinClick = (coin: string) => {
    if (!compareModeSelected) {
      setSelectedCoin(coin);
    } else {
      if (coin === selectedCoin) {
        return;
      } else {
        setSecondSelectedCoin(coin);
      }
    }
  };

  useEffect(() => {
    if (!compareModeSelected) {
      setSecondSelectedCoin(undefined);
    }
  }, [compareModeSelected, setSecondSelectedCoin]);

  return (
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
            name={coin.symbol}
            image={coin.image}
            selected={
              selectedCoin === coin.id || secondSelectedCoin === coin.id
            }
            onClick={() => handleCoinClick(coin.id)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CoinSelector;
