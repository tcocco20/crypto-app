interface CoinBrandProps {
  name: string;
  symbol: string;
  imageUrl: string;
}

const CoinBrand = ({ name, symbol, imageUrl }: CoinBrandProps) => {
  return (
    <div>
      {name} {symbol} {imageUrl}
    </div>
  );
};

export default CoinBrand;
