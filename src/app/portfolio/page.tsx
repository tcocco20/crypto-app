import Card from "@/components/UI/Card";
import PercentageWithIcon from "@/components/UI/PercentageWithIcon";

const Portfolio = () => {
  return (
    <>
      <section className="py-8 text-indigo-900 dark:text-white">
        <Card className="p-[1px] rounded-md">
          <div className="p-4">
            <div className="flex justify-between mb-6">
              <div>
                <h3 className="text-lg">Bitcoin (BTC)</h3>
                <p className="text-sm dark:text-gray-300">
                  Purchased 03.23.2023
                </p>
              </div>
              <div className="px-6 bg-orange-400 rounded-full"></div>
            </div>
            <div className="flex gap-2 items-center">
              <h4 className="text-xl font-medium">29,850 USD</h4>
              <PercentageWithIcon percentage="6.76%" percentageUp />
            </div>
          </div>
          <div className="bg-indigo-200/50 dark:bg-indigo-950 p-4 grid grid-cols-2 gap-3 rounded-b-md">
            <div className="border border-white dark:border-indigo-900 p-2 rounded-md">
              <h5 className="text-lg mb-2">86,000 USD</h5>
              <p className="text-sm dark:text-gray-300">Current Price</p>
            </div>
            <div className="border border-white dark:border-indigo-900 p-2 rounded-md">
              <h5 className="text-lg mb-2">80,000 USD</h5>
              <p className="text-sm dark:text-gray-300">Purchase Price</p>
            </div>
            <div className="border border-white dark:border-indigo-900 p-2 rounded-md">
              <div className="text-lg mb-2">
                <PercentageWithIcon
                  percentage="11.04%"
                  percentageUp
                  fixedSize
                />
              </div>
              <p className="text-sm dark:text-gray-300">24h%</p>
            </div>
            <div className="border border-white dark:border-indigo-900 p-2 rounded-md">
            <p className="text-sm dark:text-gray-300">Volume / Cap</p>
            </div>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Portfolio;
