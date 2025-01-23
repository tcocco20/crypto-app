import actions from "@/actions";
import CompareBar from "@/components/homeComponents/CompareBar";
import HomeNav from "@/components/homeComponents/HomeNav";
import MarketOverview from "@/components/homeComponents/MarketOverview";
import { CompareBarContextProvider } from "@/context/CompareBarContext/CompareBarContextProvider";

export default async function Home() {
  const coins = await actions.getCoinsList("usd", 1, true);
  return (
    <>
      <HomeNav />
      <CompareBarContextProvider>
        <CompareBar coins={coins} />
      </CompareBarContextProvider>
      <MarketOverview startingCoins={coins} />
    </>
  );
}
