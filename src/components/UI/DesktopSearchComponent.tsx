"use client";

import React, { useEffect, useRef, useState } from "react";
import Dropdown from "../UI/Dropdown";
import actions from "@/actions";
import { type SearchResult } from "@/lib/types/SearchResult";
import SearchBar from "../UI/SearchBar";
import Image from "next/image";
import SearchLoader from "./SearchLoader";
import { useDebounce } from "@/hooks/useDebounce";

interface DesktopSearchComponentProps {
  clearOnSelect?: boolean;
  onItemSelect: (item?: SearchResult) => void;
  searchBarClasses?: string;
  wrapperClasses?: string;
  inputContainerClasses?: string;
}

const DesktopSearchComponent = ({
  onItemSelect,
  clearOnSelect = true,
  searchBarClasses,
  wrapperClasses,
  inputContainerClasses,
}: DesktopSearchComponentProps) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const debouncedSearchTerm = useDebounce(searchQuery, 200);

  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    setDropdownOpen(true);
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  useEffect(() => {
    const getSearch = async () => {
      setLoading(true);
      const searchResults = await actions.getSearchResults(debouncedSearchTerm);
      setSearchResults(searchResults);
      setLoading(false);
    };

    if (debouncedSearchTerm) {
      getSearch();
    } else {
      setSearchResults([]);
    }
  }, [debouncedSearchTerm]);

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
      parentClassName={"h-full z-40 " + (wrapperClasses || "")}
      containerClassName={"h-full " + (inputContainerClasses || "")}
      onBackgroundClick={() => setDropdownOpen(false)}
      data={searchResults}
      renderItem={renderSearchResult}
      keyExtractor={extractKey}
      loading={loading}
      loadingComponent={<SearchLoader />}
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
