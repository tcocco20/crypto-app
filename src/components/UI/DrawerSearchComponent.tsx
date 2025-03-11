"use client";
import React, { type ReactNode, useEffect, useRef, useState } from "react";
import SearchBar from "../UI/SearchBar";
import { SearchResult } from "@/lib/types/SearchResult";
import actions from "@/actions";

interface DrawerSearchComponentProps {
  renderSearchItem: (searchItems: SearchResult) => ReactNode;
}

const DrawerSearchComponent = ({
  renderSearchItem,
}: DrawerSearchComponentProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);

  const handleSearchClick = () => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  const handleItemClick = () => {
    setSearchQuery("");
  };

  const generateSearchResults = () => {
    if (searchResults.length === 0) {
      return <p>No results to display</p>;
    }

    return searchResults.map((result) => (
      <div key={result.id} onClick={handleItemClick}>
        {renderSearchItem(result)}
      </div>
    ));
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
  return (
    <div className="text-violet-900 bg-indigo-600/15 dark:text-white dark:bg-indigo-950 rounded-t-xl flex flex-col gap-2 h-full">
      <div className="border-b border-gray-400 p-4">
        <h1 className="text-lg mb-2">Search</h1>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={handleSearchClick}
          containerClasses="w-full"
          ref={searchRef}
        />
      </div>
      <div className="flex-1 overflow-scroll p-4">
        {generateSearchResults()}
      </div>
    </div>
  );
};

export default DrawerSearchComponent;
