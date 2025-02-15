import CompareBar from "@/components/homeComponents/CompareBar";
import HomeNav from "@/components/homeComponents/HomeNav";
import MarketOverview from "@/components/homeComponents/MarketOverview";
import { CompareBarContextProvider } from "@/context/CompareBarContext/CompareBarContextProvider";

export default function Home() {
  return (
    <>
      <HomeNav />
      <CompareBarContextProvider>
        <CompareBar />
      </CompareBarContextProvider>
      <MarketOverview />
    </>
  );
}
