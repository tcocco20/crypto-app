import React from "react";
import Drawer from "react-modern-drawer";
import SearchForCoin from "./SearchForCoin";

interface AddPortfolioCoinDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddPortfolioCoinDrawer = ({
  isOpen,
  onClose,
}: AddPortfolioCoinDrawerProps) => {
  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      direction="bottom"
      size={"80vh"}
      className="rounded-t-2xl"
      lockBackgroundScroll
    >
      <SearchForCoin />
    </Drawer>
  );
};

export default AddPortfolioCoinDrawer;
