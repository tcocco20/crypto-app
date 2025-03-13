"use client";
import React, { useRef } from "react";
import SearchBar from "../UI/SearchBar";

const AddPortfolioCoinModalContent = () => {
  const searchRef = useRef<HTMLInputElement>(null);

  const handleFocusSearchBar = () => {
    searchRef.current?.focus();
  };
  return (
    <div>
      <SearchBar
        value=""
        onChange={() => null}
        containerClasses="w-full"
        onClick={handleFocusSearchBar}
        ref={searchRef}
      />
    </div>
  );
};

export default AddPortfolioCoinModalContent;
