import actions from "@/actions";
import Card from "@/components/UI/Card";
import CoinBrand from "@/components/UI/CoinBrand";
import SelectableWrapper from "@/components/UI/SelectableWrapper";
import { ChevronDown, ChevronUp, Layers, Plus } from "lucide-react";

interface CoinDetailsPageProps {
  params: {
    coinId: string;
  };
}

const CoinDetailsPage = async ({ params }: CoinDetailsPageProps) => {
  const coin = await actions.getCoinById(params.coinId);
  const priceUp = coin.market_data.price_change_percentage_24h > 0;
  return (
    <>
      <section className="grid grid-cols-3 gap-4 dark:text-white">
        <CoinBrand
          name={coin.name}
          symbol={coin.symbol}
          imageUrl={coin.image.large}
        />
        <Card className="py-12 px-16 flex flex-col gap-4">
          <div className="flex gap-1 items-end">
            <h2 className="text-4xl font-semibold">
              ${coin.market_data.current_price.usd.toLocaleString()}
            </h2>
            {priceUp ? (
              <ChevronUp
                strokeWidth={4}
                size={20}
                className="text-cyan-600 ml-2"
              />
            ) : (
              <ChevronDown
                strokeWidth={4}
                size={20}
                className="text-pink-600 ml-2"
              />
            )}
            <p
              className={`text-xl ${
                priceUp ? "text-cyan-600" : "text-pink-600"
              }`}
            >
              {coin.market_data.price_change_percentage_24h.toPrecision(3)}%
            </p>
          </div>
          <Layers size={24} className="mx-auto" />
          <div>
            <div className="flex gap-4 items-center">
              <ChevronUp strokeWidth={4} size={24} className="text-cyan-600" />
              <p>All Time High:</p>
              <p className="text-2xl">
                ${coin.market_data.ath.usd.toLocaleString()}
              </p>
            </div>
            <p className="dark:text-gray-300/70 text-right">
              {new Date(coin.market_data.ath_date.usd).toUTCString()}
            </p>
          </div>
          <div>
            <div className="flex gap-4 items-center">
              <ChevronDown
                strokeWidth={4}
                size={24}
                className="text-pink-600"
              />
              <p>All Time low:</p>
              <p className="text-2xl">
                ${coin.market_data.atl.usd.toLocaleString()}
              </p>
            </div>
            <p className="dark:text-gray-300/70 text-right">
              {new Date(coin.market_data.atl_date.usd).toUTCString()}
            </p>
          </div>
        </Card>
        <Card className="px-8 py-12 flex flex-col gap-4">
          <div className="flex items-center">
            <div className="flex items-center w-1/2 gap-3">
              <SelectableWrapper
                selected
                rounded
                shadowSize="shadow-[0_0_20px]"
              >
                <Plus size={24} strokeWidth={3} className="p-1" />
              </SelectableWrapper>
              <p>Market Cap</p>
            </div>
            <p className="text-xl w-1/2">
              ${coin.market_data.market_cap.usd.toLocaleString()}
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex items-center w-1/2 gap-3">
              <SelectableWrapper
                selected
                rounded
                shadowSize="shadow-[0_0_20px]"
              >
                <Plus size={24} strokeWidth={3} className="p-1" />
              </SelectableWrapper>
              <p>Fully Diluted Valuation</p>
            </div>
            <p className="text-xl w-1/2">
              ${coin.market_data.fully_diluted_valuation.usd.toLocaleString()}
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex items-center w-1/2 gap-3">
              <SelectableWrapper
                selected
                rounded
                shadowSize="shadow-[0_0_20px]"
              >
                <Plus size={24} strokeWidth={3} className="p-1" />
              </SelectableWrapper>
              <p>Volume 24h</p>
            </div>
            <p className="text-xl w-1/2">
              ${coin.market_data.total_volume.usd.toLocaleString()}
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex items-center w-1/2 gap-3">
              <SelectableWrapper
                selected
                rounded
                shadowSize="shadow-[0_0_20px]"
              >
                <Plus size={24} strokeWidth={3} className="p-1" />
              </SelectableWrapper>
              <p>Volume/Market</p>
            </div>
            <p className="text-xl w-1/2">
              {coin.market_data.market_cap_fdv_ratio}
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex items-center w-1/2 gap-3">
              <SelectableWrapper
                selected
                rounded
                shadowSize="shadow-[0_0_20px]"
              >
                <Plus size={24} strokeWidth={3} className="p-1" />
              </SelectableWrapper>
              <p>Total Volume</p>
            </div>
            <p className="text-xl w-1/2">
              {coin.market_data.total_volume.btc.toLocaleString()} BTC
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex items-center w-1/2 gap-3">
              <SelectableWrapper
                selected
                rounded
                shadowSize="shadow-[0_0_20px]"
              >
                <Plus size={24} strokeWidth={3} className="p-1" />
              </SelectableWrapper>
              <p>Circulating Supply</p>
            </div>
            <p className="text-xl w-1/2">
              {coin.market_data.circulating_supply.toLocaleString()} BTC
            </p>
          </div>
          <div className="flex items-center">
            <div className="flex items-center w-1/2 gap-3">
              <SelectableWrapper
                selected
                rounded
                shadowSize="shadow-[0_0_20px]"
              >
                <Plus size={24} strokeWidth={3} className="p-1" />
              </SelectableWrapper>
              <p>Max Supply</p>
            </div>
            <p className="text-xl w-1/2">
              {coin.market_data.max_supply.toLocaleString()} BTC
            </p>
          </div>
        </Card>
      </section>
    </>
  );
};

export default CoinDetailsPage;
