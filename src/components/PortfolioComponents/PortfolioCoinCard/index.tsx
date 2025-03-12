import Card from "@/components/UI/Card";
import MarketCapMeter from "@/components/UI/MarketCapMeter";
import PercentageWithIcon from "@/components/UI/PercentageWithIcon";

const PortfolioCoinCard = () => {
  return (
    <Card className="p-[1px] rounded-md md:flex">
      <div className="p-4">
        <div className="flex justify-between mb-6 items-center md:gap-12 lg:gap-16 xl:gap-20">
          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl">Bitcoin (BTC)</h3>
            <p className="text-sm md:text-base dark:text-gray-300">
              Purchased 03.23.2023
            </p>
            <p className="text-sm md:text-base dark:text-gray-300">
              Purchase Amount: 27,000 USD
            </p>
          </div>
          <div className="p-6 bg-orange-400 rounded-full"></div>
        </div>
        <div className="flex gap-2 items-center">
          <h4 className="text-xl md:text-2xl lg:text-3xl font-medium">
            29,850 USD
          </h4>
          <PercentageWithIcon percentage="6.76%" percentageUp />
        </div>
      </div>
      <div className="bg-indigo-200/50 dark:bg-indigo-950 p-4 grid grid-cols-2 gap-3 rounded-b-md md:flex-1">
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
            <PercentageWithIcon percentage="11.04%" percentageUp fixedSize />
          </div>
          <p className="text-sm dark:text-gray-300">24h%</p>
        </div>
        <div className="border border-white dark:border-indigo-900 p-2 rounded-md">
          <MarketCapMeter
            label="44%"
            labelClasses="text-lg text-cyan-600 mr-2"
            value={44}
            max={100}
            height="8px"
            barContainerClassName="bg-cyan-800 rounded"
            color="#00b6b0"
          />
          <p className="text-sm dark:text-gray-300 mt-2">Volume / Cap</p>
        </div>
      </div>
    </Card>
  );
};

export default PortfolioCoinCard;
