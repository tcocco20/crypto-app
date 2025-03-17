"use client";

import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import DrawerSearchComponent from "../UI/DrawerSearchComponent";

import "react-modern-drawer/dist/index.css";
import PortfolioCoinDetails from "./PortfolioCoinDetails";
import { type SearchResult } from "@/lib/types/SearchResult";

interface AddPortfolioCoinDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddPortfolioCoinDrawer = ({
  isOpen,
  onClose,
}: AddPortfolioCoinDrawerProps) => {
  const [selectedCoin, setSelectedCoin] = useState<SearchResult | null>(null);

  const handleSelectCoin = (result?: SearchResult) => {
    if (result) {
      setSelectedCoin(result);
    }
  };

  const handleBack = () => {
    setSelectedCoin(null);
  };

  const handleAddCoin = () => {
    alert("Added " + selectedCoin?.name + " to portfolio");
    onClose();
    setSelectedCoin(null);
  };

  const handleCancelAddCoin = () => {
    onClose();
    setSelectedCoin(null);
  };

  return (
    <Drawer
      open={isOpen}
      onClose={onClose}
      direction="bottom"
      size={"80vh"}
      className="rounded-t-2xl"
      lockBackgroundScroll
    >
      {!selectedCoin && (
        <DrawerSearchComponent
          handleSearchResultClick={handleSelectCoin}
          title="Add Coin to Portfolio"
          helperText="Search for a coin to add to your portfolio"
        />
      )}
      {selectedCoin && (
        <PortfolioCoinDetails
          selectedCoin={selectedCoin}
          onGoBack={handleBack}
          onAddCoin={handleAddCoin}
          onCancelAddCoin={handleCancelAddCoin}
        />
      )}
    </Drawer>
  );
};

export default AddPortfolioCoinDrawer;
