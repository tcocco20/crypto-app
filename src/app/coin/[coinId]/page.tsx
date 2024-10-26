import actions from "@/actions";
import Card from "@/components/UI/Card";
import CoinBrand from "@/components/UI/CoinBrand";
import { ChevronDown, ChevronUp, Layers } from "lucide-react";

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
        <Card className="py-8 px-12 flex flex-col gap-4">
          <div className="flex gap-1 items-end">
            <h2 className="text-4xl font-semibold">
              ${coin.market_data.current_price.usd.toLocaleString()}
            </h2>
            {priceUp ? (
              <ChevronUp strokeWidth={4} size={20} className="text-cyan-600 ml-2" />
            ) : (
              <ChevronDown strokeWidth={4} size={20} className="text-pink-600 ml-2" />
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
        </Card>
      </section>
    </>
  );
};

export default CoinDetailsPage;
