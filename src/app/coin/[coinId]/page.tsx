import actions from "@/actions";
import MobileLayout from "@/components/coinPageComponents/MobileLayout";
import DesktopLayout from "@/components/coinPageComponents/DesktopLayout";
interface CoinDetailsPageProps {
  params: {
    coinId: string;
  };
}

const CoinDetailsPage = async ({ params }: CoinDetailsPageProps) => {
  const coin = await actions.getCoinById(params.coinId);

  return (
    <>
      <MobileLayout coin={coin} />
      <DesktopLayout coin={coin} />
    </>
  );
};

export default CoinDetailsPage;
