import actions from "@/actions";
import CompareBar from "@/components/homeComponents/CompareBar";
import HomeNav from "@/components/homeComponents/HomeNav";
import MarketOverview from "@/components/homeComponents/MarketOverview";

export default async function Home() {
  const coins = await actions.getCoinsList();
  return (
    <>
      <HomeNav />
      <CompareBar coins={coins} />
      <MarketOverview startingCoins={coins} />
    </>
  );
}
