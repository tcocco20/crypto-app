"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import CoinButton from "./CoinButton";
import { FreeMode } from "swiper/modules";
import { useEffect, useState } from "react";
import { type ListCoin } from "@/lib/types/ListCoin";

interface CoinSelectorProps {
  coinsList: ListCoin[];
  compareModeSelected: boolean;
}

const CoinSelector = ({
  coinsList,
  compareModeSelected,
}: CoinSelectorProps) => {
  const [selectedCoin, setSelectedCoin] = useState<string>("btc");
  const [secondSelectedCoin, setSecondSelectedCoin] = useState<string>("");

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
      setSecondSelectedCoin("");
    }
  }, [compareModeSelected]);

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
              selectedCoin === coin.symbol || secondSelectedCoin === coin.symbol
            }
            onClick={() => handleCoinClick(coin.symbol)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CoinSelector;
