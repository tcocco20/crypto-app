import AddPortfolioCoinButton from "@/components/PortfolioComponents/AddPortfolioCoinButton";
import MobileActionButton from "@/components/PortfolioComponents/MobileActionButton";
import PortfolioCoins from "@/components/PortfolioComponents/PortfolioCoins";

const Portfolio = () => {
  return (
    <>
      <section className="pt-8 pb-20 text-indigo-900 dark:text-white flex flex-col gap-4 relative">
        <div className="block md:flex justify-between items-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
          <h1 className="text-2xl">Your Portfolio</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Track your investments and manage your portfolio. Tap on a coin to edit its details.
          </p>
          <div className="hidden md:block">
            <AddPortfolioCoinButton />
          </div>
        </div>
        <PortfolioCoins />
        <MobileActionButton />
      </section>
    </>
  );
};

export default Portfolio;
