import React from "react";
import Drawer from "react-modern-drawer";
import DrawerSearchComponent from "../UI/DrawerSearchComponent";
import { SearchResult } from "@/lib/types/SearchResult";

interface AddPortfolioCoinDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddPortfolioCoinDrawer = ({
  isOpen,
  onClose,
}: AddPortfolioCoinDrawerProps) => {
  const renderSearchItem = (result: SearchResult) => (
    <button className="text-sm block mb-2">{result.name}</button>
  );
  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      direction="bottom"
      size={"80vh"}
      className="rounded-t-2xl"
      lockBackgroundScroll
    >
      <DrawerSearchComponent renderSearchItem={renderSearchItem} />
    </Drawer>
  );
};

export default AddPortfolioCoinDrawer;
