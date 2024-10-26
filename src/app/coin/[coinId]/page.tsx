import actions from "@/actions";
import CoinBrand from "@/components/UI/CoinBrand";

interface CoinDetailsPageProps {
  params: {
    coinId: string;
  };
}

const CoinDetailsPage = async ({ params }: CoinDetailsPageProps) => {
  const coin = await actions.getCoinById(params.coinId);
  return (
    <>
      <section className="grid grid-cols-3 gap-4">
        <CoinBrand
          name={coin.name}
          symbol={coin.symbol}
          imageUrl={coin.image.large}
        />
      </section>
    </>
  );
};

export default CoinDetailsPage;
