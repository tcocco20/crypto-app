import actions from "@/actions";
import CoinDescription from "@/components/coinPageComponents/CoinDescription";
import ExtraLinks from "@/components/coinPageComponents/ExtraLinks";
import InvestmentDetails from "@/components/coinPageComponents/InvestmentDetails";
import CoinLink from "@/components/coinPageComponents/CoinLink";
import MarketData from "@/components/coinPageComponents/MarketData";
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
      <section className="flex flex-col md:grid md:grid-cols-7 gap-4 dark:text-white pt-8 pb-20">
        <div className="md:col-span-2 flex flex-col gap-4">
          <CoinBrand
            name={coin.name}
            symbol={coin.symbol}
            imageUrl={coin.image.large}
            className="flex-1"
          />
          <CoinLink url={coin.links.homepage} />
        </div>
        <InvestmentDetails coin={coin} selectedCurrency="usd" />
        <MarketData coin={coin} />
        <CoinDescription description={coin.description} />
        <ExtraLinks
          homepage={coin.links.homepage}
          blockchainSite={coin.links.blockchain_site[0]}
          blockchainSite2={coin.links.blockchain_site[1]}
        />
      </section>
    </>
  );
};

export default CoinDetailsPage;
