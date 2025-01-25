import React from "react";
import Card from "../UI/Card";
import CoinBrand from "../UI/CoinBrand";
import { IndividualCoin } from "@/lib/types/IndividualCoin";

interface MobileCoinDescriptionProps {
  coin: IndividualCoin;
}

const MobileCoinDescription = ({ coin }: MobileCoinDescriptionProps) => {
  return (
    <Card className="w-full p-2">
      <div className="flex justify-between items-center">
        {/* <h1 className="text-2xl font-semibold">Description</h1> */}
        <CoinBrand
          name={coin.name}
          symbol={coin.symbol}
          imageUrl={coin.image.small}
        />
      </div>
    </Card>
  );
};

export default MobileCoinDescription;
