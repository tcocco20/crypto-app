"use client";

import React, { useRef, useState } from "react";
import Dropdown from "../UI/Dropdown";
import HeaderButton from "../UI/HeaderButton";
import { Search } from "lucide-react";

const SearchButton = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    setDropdownOpen((prev) => !prev);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <Dropdown
      menuClassName="text-indigo-900 bg-indigo-600/15 dark:text-white dark:bg-violet-950 w-full border border-indigo-600/5 dark:border-gray-700/80 rounded-b"
      parentClassName="h-full"
      containerClassName="h-full"
      onBackgroundClick={() => setDropdownOpen(false)}
    >
      <HeaderButton
        className={`lg:px-4 w-[14.2rem] lg:w-72 xl:w-96 pointer-events-none active:opacity-100 h-full ${
          dropdownOpen ? "md:rounded-b-none" : ""
        }`}
        onClick={handleSearchClick}
      >
        <Search size={18} strokeWidth={2.5} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none flex-1 pointer-events-auto"
          ref={searchInputRef}
        />
      </HeaderButton>
    </Dropdown>
  );
};

export default SearchButton;
