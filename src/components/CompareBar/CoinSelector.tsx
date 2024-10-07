import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import CoinButton from "./CoinButton";
import { type CoinData } from "@/actions/getCoinsList";
import { FreeMode } from "swiper/modules";

interface CoinSelectorProps {
  coinsList: CoinData[];
}

const CoinSelector = ({ coinsList }: CoinSelectorProps) => {
  return (
    <Swiper
      spaceBetween={10}
      modules={[FreeMode]}
      freeMode
      slidesPerView={"auto"}
    >
      {coinsList.map((coin) => (
        <SwiperSlide key={coin.id} style={{ width: "100px" }}>
          <CoinButton name={coin.symbol} image={coin.image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CoinSelector;
