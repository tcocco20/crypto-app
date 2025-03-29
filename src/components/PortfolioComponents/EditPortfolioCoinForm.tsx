import React from "react";
import CoinBrand from "../UI/CoinBrand";
import { PortfolioCoinWithMarketData } from "@/lib/types/PortfolioCoinWithMarketData";

interface EditPortfolioCoinFormProps {
  selectedCoin: PortfolioCoinWithMarketData;
}

const EditPortfolioCoinForm = ({
  selectedCoin,
}: EditPortfolioCoinFormProps) => {
  return (
    <div>
      <CoinBrand
        className="col-span-2"
        name={selectedCoin.name}
        symbol={selectedCoin.symbol}
        imageUrl={selectedCoin.image}
      />
    </div>
  );
};

export default EditPortfolioCoinForm;
