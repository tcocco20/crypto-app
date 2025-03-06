import PortfolioCoinCard from "@/components/PortfolioComponents/PortfolioCoinCard";

const Portfolio = () => {
  return (
    <>
      <section className="py-8 text-indigo-900 dark:text-white flex flex-col gap-4 relative">
        <PortfolioCoinCard />
        <PortfolioCoinCard />
      </section>
    </>
  );
};

export default Portfolio;
