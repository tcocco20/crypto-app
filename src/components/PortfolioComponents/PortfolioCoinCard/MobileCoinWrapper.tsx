import React, { ReactNode, useState } from "react";
import AddPortfolioCoinDrawer from "../AddPortfolioCoinDrawer";
import { PortfolioCoinWithMarketData } from "@/lib/types/PortfolioCoinWithMarketData";

interface MobileCoinWrapperProps {
  children: ReactNode;
  coin: PortfolioCoinWithMarketData;
}

const MobileCoinWrapper = ({ children, coin }: MobileCoinWrapperProps) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleToggleMenu = () => {
    setIsOpened((prev) => !prev);
  };
  return (
    <>
      <button onClick={handleToggleMenu}>{children}</button>
      <AddPortfolioCoinDrawer
        onClose={handleToggleMenu}
        isOpen={isOpened}
        coinToEdit={coin}
      />
    </>
  );
};

export default MobileCoinWrapper;
