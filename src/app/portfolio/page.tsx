import AddPortfolioCoinButton from "@/components/PortfolioComponents/AddPortfolioCoinButton";
import MobileActionButton from "@/components/PortfolioComponents/MobileActionButton";
import PortfolioCoinCard from "@/components/PortfolioComponents/PortfolioCoinCard";

const Portfolio = () => {
  return (
    <>
      <section className="pt-8 pb-20 text-indigo-900 dark:text-white flex flex-col gap-4 relative">
        <div className="block md:flex justify-between items-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
          <h1 className="text-2xl">Your Portfolio</h1>
          <div className="hidden md:block">
            <AddPortfolioCoinButton />
          </div>
        </div>
        <PortfolioCoinCard />
        <PortfolioCoinCard />
        <MobileActionButton />
      </section>
    </>
  );
};

export default Portfolio;
