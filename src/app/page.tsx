import actions from "@/actions";
import CompareBar from "@/components/CompareBar";
import HomeNav from "@/components/homeComponents/HomeNav";

export default async function Home() {
  const coins = await actions.getCoinsList();
  return (
    <main className="flex min-h-screen flex-col px-3 md:px-24">
      <HomeNav />
      <CompareBar coins={coins} />
    </main>
  );
}
