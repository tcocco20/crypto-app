"use client";

import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import DrawerSearchComponent from "../UI/DrawerSearchComponent";

import "react-modern-drawer/dist/index.css";
import PortfolioCoinDetails from "./PortfolioCoinDetails";

interface AddPortfolioCoinDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddPortfolioCoinDrawer = ({
  isOpen,
  onClose,
}: AddPortfolioCoinDrawerProps) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handleChangePage = () => {
    setCurrentPage((prev) => prev + 1);
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
        <DrawerSearchComponent handleSearchResultClick={handleChangePage} />
      )}
      {currentPage === 1 && <PortfolioCoinDetails />}
    </Drawer>
  );
};

export default AddPortfolioCoinDrawer;
