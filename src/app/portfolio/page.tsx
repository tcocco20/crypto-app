import MobileActionButton from "@/components/PortfolioComponents/MobileActionButton";
import PortfolioCoinCard from "@/components/PortfolioComponents/PortfolioCoinCard";

const Portfolio = () => {
  return (
    <>
      <section className="py-8 text-indigo-900 dark:text-white flex flex-col gap-4 relative">
        <div className="">
          <h1 className="text-2xl">Your Portfolio</h1>
        </div>
        <PortfolioCoinCard />
        <PortfolioCoinCard />
        <MobileActionButton />
      </section>
    </>
  );
};

export default Portfolio;
