import Image from "next/image";
import Card from "./Card";

interface CoinBrandProps {
  name: string;
  symbol: string;
  imageUrl: string;
  className?: string;
}

const CoinBrand = ({ name, symbol, imageUrl, className }: CoinBrandProps) => {
  return (
    <Card
      className={`flex flex-col items-center justify-center dark:text-white${
        className ? " " + className : ""
      }`}
    >
      <Image
        className="bg-indigo-400/30 dark:bg-violet-900/30 p-4 rounded-md mb-6 shadow-inner shadow-indigo-400 dark:shadow-none"
        src={imageUrl}
        alt={name}
        width={70}
        height={70}
      />
      <h1 className="text-3xl font-bold">
        {name} {symbol && "(" + symbol.toUpperCase() + ")"}
      </h1>
    </Card>
  );
};

export default CoinBrand;
