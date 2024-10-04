"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CoinButton from "./CoinButton";
import { type CoinData } from "@/actions/getCoinsList";

interface CoinSelectorProps {
  coinsList: CoinData[];
}

const CoinSelector = ({ coinsList }: CoinSelectorProps) => {
  return (
    <Swiper spaceBetween={10} slidesPerView={3}>
      {coinsList.map((coin) => (
        <SwiperSlide key={coin.id}>
          <CoinButton name={coin.symbol} image={coin.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CoinSelector;
