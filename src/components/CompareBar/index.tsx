import { ChartLine } from "lucide-react";
import CoinSelector from "./CoinSelector";

const CompareBar = () => {
  return (
    <section className="my-5">
      <div className="flex justify-between items-center text-xs font-light dark:text-white">
        <p>Select the currency to view statistics</p>
        <button className="p-3 dark:bg-violet-900/40 rounded-md flex items-center gap-1 active:opacity-50 transition-opacity duration-50">
          <ChartLine size={16} />
          <span>Compare</span>
        </button>
      </div>
      <CoinSelector />
    </section>
  );
};

export default CompareBar;
