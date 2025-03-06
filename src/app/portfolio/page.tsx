import Card from "@/components/UI/Card";
import PercentageWithIcon from "@/components/UI/PercentageWithIcon";

const Portfolio = () => {
  return (
    <>
      <section className="py-8 dark:text-white">
        <Card className="p-[1px]">
          <div className="p-4">
            <div className="flex justify-between mb-6">
              <div>
                <h3 className="text-lg">Bitcoin (BTC)</h3>
                <p className="text-sm text-gray-400">Purchased 03.23.2023</p>
              </div>
              <div className="px-6 bg-orange-400 rounded-full"></div>
            </div>
            <div className="flex gap-2 items-center">
              <h4 className="text-xl font-medium mb-3">29,850 USD</h4>
              <PercentageWithIcon percentage="6.76%" percentageUp />
            </div>
          </div>
          <div className="bg-indigo-950 p-4 grid grid-cols-2 gap-4">
            <div className="border border-indigo-900 p-4 rounded">
              <h5 className="text-lg">86,000 USD</h5>
              <p className="text-sm text-gray-400">Current Price</p>
            </div>
            <div className="border border-indigo-900 p-4 rounded"></div>
            <div className="border border-indigo-900 p-4 rounded"></div>
            <div className="border border-indigo-900 p-4 rounded"></div>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Portfolio;
