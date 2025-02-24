"use client";

import React, { useEffect, useRef, useState } from "react";
import Dropdown from "../UI/Dropdown";
import HeaderButton from "../UI/HeaderButton";
import { Search } from "lucide-react";
import actions from "@/actions";
import { type SearchResult } from "@/lib/types/SearchResult";
import Link from "next/link";

const SearchButton = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    setDropdownOpen(true);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const getSearch = async () => {
      const searchResults = await actions.getSearchResults(searchQuery);
      setSearchResults(searchResults);
    };

    if (searchQuery.length > 0) {
      timer = setTimeout(() => {
        getSearch();
      }, 1000);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const renderSearchResult = (item: SearchResult) => {
    return (
      <Link className="text-sm" href={`/coin/${item.id}`}>
        {item.name}
      </Link>
    );
  };

  const extractKey = (item: SearchResult) => item.id;

  return (
    <Dropdown
      menuClassName="text-indigo-900 bg-indigo-600/15 dark:text-white dark:bg-violet-950 w-full border border-indigo-600/5 dark:border-gray-700/80 rounded-b"
      parentClassName="h-full z-10"
      containerClassName="h-full"
      onBackgroundClick={() => setDropdownOpen(false)}
      data={searchResults}
      renderItem={renderSearchResult}
      keyExtractor={extractKey}
    >
      <HeaderButton
        className={`lg:px-4 w-[14.2rem] lg:w-72 xl:w-96 pointer-events-none active:opacity-100 h-full ${
          dropdownOpen ? "md:rounded-b-none" : ""
        }`}
        onClick={handleSearchClick}
      >
        <Search size={18} strokeWidth={2.5} onClick={handleSearchClick} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none flex-1 pointer-events-auto"
          ref={searchInputRef}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </HeaderButton>
    </Dropdown>
  );
};

export default SearchButton;
