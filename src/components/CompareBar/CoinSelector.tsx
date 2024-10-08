"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import CoinButton from "./CoinButton";
import { type CoinData } from "@/actions/getCoinsList";
import { FreeMode } from "swiper/modules";
import { useEffect, useState } from "react";

interface CoinSelectorProps {
  coinsList: CoinData[];
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
      if (selectedCoin === "") {
        setSelectedCoin(coin);
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
              compareModeSelected
                ? coin.symbol === selectedCoin ||
                  coin.symbol === secondSelectedCoin
                : coin.symbol === selectedCoin
            }
            onClick={() => handleCoinClick(coin.symbol)}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CoinSelector;
