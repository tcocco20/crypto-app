"use client";

import React, { useEffect, useRef, useState } from "react";
import Dropdown from "../UI/Dropdown";
import actions from "@/actions";
import { type SearchResult } from "@/lib/types/SearchResult";
import Link from "next/link";
import SearchBar from "../UI/SearchBar";

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
    } else {
      setSearchResults([]);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const handleLinkClick = () => {
    setDropdownOpen(false);
    setSearchQuery("");
  };

  const renderSearchResult = (item: SearchResult) => {
    return (
      <Link
        className="text-sm"
        href={`/coin/${item.id}`}
        onClick={handleLinkClick}
      >
        {item.name}
      </Link>
    );
  };

  const extractKey = (item: SearchResult) => item.id;

  return (
    <Dropdown
      menuClassName="text-indigo-900 bg-indigo-600/15 dark:text-white dark:bg-violet-950 w-full border border-indigo-600/5 dark:border-gray-700/80 rounded-b p-2 overflow-y-scroll max-h-[18rem]"
      parentClassName="h-full z-40"
      containerClassName="h-full"
      onBackgroundClick={() => setDropdownOpen(false)}
      data={searchResults}
      renderItem={renderSearchResult}
      keyExtractor={extractKey}
    >
      <SearchBar
        value={searchQuery}
        onClick={handleSearchClick}
        onChange={(e) => setSearchQuery(e.target.value)}
        containerClasses={`w-[14.2rem] lg:w-72 xl:w-96 ${
          dropdownOpen ? "md:rounded-b-none" : ""
        }`}
        ref={searchInputRef}
      />
    </Dropdown>
  );
};

export default SearchButton;
