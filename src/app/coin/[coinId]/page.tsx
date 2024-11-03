import actions from "@/actions";
import InvestmentDetails from "@/components/coinPageComponents/InvestmentDetails";
import Card from "@/components/UI/Card";
import CoinBrand from "@/components/UI/CoinBrand";
import SelectableWrapper from "@/components/UI/SelectableWrapper";
import { Plus } from "lucide-react";

interface CoinDetailsPageProps {
  params: {
    coinId: string;
  };
}

const CoinDetailsPage = async ({ params }: CoinDetailsPageProps) => {
  const coin = await actions.getCoinById(params.coinId);
  return (
    <>
      <section className="grid grid-cols-7 gap-4 dark:text-white">
        <CoinBrand
          name={coin.name}
          symbol={coin.symbol}
          imageUrl={coin.image.large}
          className="col-span-2"
        />
        <InvestmentDetails coin={coin} />
        <Card className="p-16 flex flex-col gap-4 col-span-3">
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
          {/* <div className="flex items-center">
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
          </div> */}
        </Card>
      </section>
    </>
  );
};

export default CoinDetailsPage;
