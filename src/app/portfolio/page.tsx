import MobileActionButton from "@/components/PortfolioComponents/MobileActionButton";
import PortfolioCoinCard from "@/components/PortfolioComponents/PortfolioCoinCard";
import SelectableWrapper from "@/components/UI/SelectableWrapper";

const Portfolio = () => {
  return (
    <>
      <section className="py-8 text-indigo-900 dark:text-white flex flex-col gap-4 relative">
        <div className="block md:flex justify-between items-center mb-4 md:mb-6 lg:mb-8 xl:mb-10">
          <h1 className="text-2xl">Your Portfolio</h1>
          <div className="hidden md:block">
            <SelectableWrapper selected>
              <button className="py-2 px-8 lg:px-12 xl:px-16 hover:opacity-80">Add Asset</button>
            </SelectableWrapper>
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
