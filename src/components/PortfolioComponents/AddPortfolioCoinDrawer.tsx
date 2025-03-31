"use client";

import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import DrawerSearchComponent from "../UI/DrawerSearchComponent";
import PortfolioCoinDetails from "./PortfolioCoinDetails";
import { type SearchResult } from "@/lib/types/SearchResult";

import "react-modern-drawer/dist/index.css";
import { PortfolioCoinWithMarketData } from "@/lib/types/PortfolioCoinWithMarketData";
interface AddPortfolioCoinDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  coinToEdit?: PortfolioCoinWithMarketData;
}

const AddPortfolioCoinDrawer = ({
  isOpen,
  onClose,
  coinToEdit,
}: AddPortfolioCoinDrawerProps) => {
  const [selectedCoin, setSelectedCoin] = useState<SearchResult | null>(null);
  const [currentPage, setCurrentPage] = useState<1 | 2>(coinToEdit ? 2 : 1);

  const handleSelectCoin = (result?: SearchResult) => {
    if (result) {
      setCurrentPage(2);
      setSelectedCoin(result);
    }
  };

  const handleBack = () => {
    setCurrentPage(1);
    setSelectedCoin(null);
  };

  const handleAddCoin = () => {
    setCurrentPage(1);
    onClose();
    setSelectedCoin(null);
  };

  const handleCancelAddCoin = () => {
    setCurrentPage(1);
    setSelectedCoin(null);
    onClose();
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
      {currentPage === 1 && (
        <DrawerSearchComponent
          handleSearchResultClick={handleSelectCoin}
          title="Add Coin to Portfolio"
          helperText="Search for a coin to add to your portfolio"
        />
      )}
      {currentPage === 2 && (
        <PortfolioCoinDetails
          selectedCoin={selectedCoin}
          coinToEdit={coinToEdit}
          onGoBack={handleBack}
          onAddCoin={handleAddCoin}
          onCancelAddCoin={handleCancelAddCoin}
        />
      )}
    </Drawer>
  );
};

export default AddPortfolioCoinDrawer;
