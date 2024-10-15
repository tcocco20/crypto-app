import { type CoinData } from "@/actions/getCoinsList";

interface ConverterContainerProps {
  coins: CoinData[];
}

const ConverterContainer = ({ coins }: ConverterContainerProps) => {
  return (
    <section className="w-full">
      <div>
        <p>Converter Container # of coins: {coins.length}</p>
      </div>
    </section>
  );
};

export default ConverterContainer;
