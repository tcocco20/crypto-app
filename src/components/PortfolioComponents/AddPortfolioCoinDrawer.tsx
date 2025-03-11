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
  const [currentPage, setCurrentPage] = useState<0 | 1>(0);
  const [selectedCoin, setSelectedCoin] = useState<SearchResult | null>(null);

  const handleSelectCoin = (result?: SearchResult) => {
    if (result) {
      setSelectedCoin(result);
    }
    setCurrentPage(1);
  };

  const handleBack = () => {
    setCurrentPage(0);
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
      {currentPage === 0 && (
        <DrawerSearchComponent handleSearchResultClick={handleSelectCoin} />
      )}
      {currentPage === 1 && (
        <PortfolioCoinDetails selectedCoin={selectedCoin} onGoBack={handleBack} />
      )}
    </Drawer>
  );
};

export default AddPortfolioCoinDrawer;
