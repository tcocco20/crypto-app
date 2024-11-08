import actions from "@/actions";
import InvestmentDetails from "@/components/coinPageComponents/InvestmentDetails";
import MarketData from "@/components/coinPageComponents/MarketData";
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
        <MarketData coin={coin} />
      </section>
    </>
  );
};

export default CoinDetailsPage;
