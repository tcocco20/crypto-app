"use client";

import React, { useEffect, useRef, useState } from "react";
import Dropdown from "../UI/Dropdown";
import actions from "@/actions";
import { type SearchResult } from "@/lib/types/SearchResult";
import SearchBar from "../UI/SearchBar";
import Image from "next/image";

interface DesktopSearchComponentProps {
  clearOnSelect?: boolean;
  onItemSelect: (item?: SearchResult) => void;
  searchBarClasses?: string;
}

const DesktopSearchComponent = ({
  onItemSelect,
  clearOnSelect = true,
  searchBarClasses,
}: DesktopSearchComponentProps) => {
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

  const renderSearchResult = (result: SearchResult) => {
    const renderImage = !result.image.includes("missing");
    const handleItemClick = () => {
      onItemSelect(result);
      setSearchQuery(result.name);
      setDropdownOpen(false);
      if (clearOnSelect) setSearchQuery("");
    };
    return (
      <button
        className="text-sm mb-2 flex items-center gap-2"
        onClick={handleItemClick}
      >
        {renderImage && (
          <Image
            src={result.thumbnail}
            alt={"Logo for " + result.name}
            width={24}
            height={24}
            className="rounded-full"
          />
        )}
        {result.name}
      </button>
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
        containerClasses={`${searchBarClasses || ""} ${
          dropdownOpen ? "md:rounded-b-none" : ""
        }`}
        ref={searchInputRef}
      />
    </Dropdown>
  );
};

export default DesktopSearchComponent;
