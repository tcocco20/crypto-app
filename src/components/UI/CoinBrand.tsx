import Image from "next/image";
import Card from "./Card";

interface CoinBrandProps {
  name: string;
  symbol: string;
  imageUrl: string;
}

const CoinBrand = ({ name, symbol, imageUrl }: CoinBrandProps) => {
  return (
    <Card className="flex flex-col items-center justify-center dark:text-white">
      <Image
        className="bg-violet-900/30 p-4 rounded-md"
        src={imageUrl}
        alt={name}
        width={70}
        height={70}
      />
      <h1 className="text-3xl font-bold">
        {name} ({symbol.toUpperCase()})
      </h1>
    </Card>
  );
};

export default CoinBrand;
