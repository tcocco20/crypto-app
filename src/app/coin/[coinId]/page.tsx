import actions from "@/actions";
import InvestmentDetails from "@/components/coinPageComponents/InvestmentDetails";
import MarketData from "@/components/coinPageComponents/MarketData";
import Card from "@/components/UI/Card";
import CoinBrand from "@/components/UI/CoinBrand";
import { type IndividualCoinWith24hVolume } from "@/lib/types/IndividualCoin";
import { Copy, Link } from "lucide-react";
interface CoinDetailsPageProps {
  params: {
    coinId: string;
  };
}

const CoinDetailsPage = async ({ params }: CoinDetailsPageProps) => {
  const coinData = await actions.getCoinById(params.coinId);
  const volumeChange = await actions.get24hVolumeInCurrency(params.coinId);
  const coin = {
    ...coinData,
    volume_24h: volumeChange,
  } as IndividualCoinWith24hVolume;

  return (
    <>
      <section className="grid grid-cols-7 gap-4 dark:text-white">
        <div className="col-span-2 flex flex-col gap-4">
          <CoinBrand
            name={coin.name}
            symbol={coin.symbol}
            imageUrl={coin.image.large}
            className="flex-1"
          />
          <Card className="flex justify-center gap-4 py-4">
            <Link size={24} />
            <p>{coin.links.homepage}</p>
            <Copy size={24} />
          </Card>
        </div>
        <InvestmentDetails coin={coin} selectedCurrency="usd" />
        <MarketData coin={coin} />
      </section>
    </>
  );
};

export default CoinDetailsPage;
