"use client";
import React, { useEffect, useRef, useState } from "react";
import SearchBar from "../UI/SearchBar";
import { SearchResult } from "@/lib/types/SearchResult";
import actions from "@/actions";
import Image from "next/image";
import SearchLoader from "./SearchLoader";
import { useDebounce } from "@/hooks/useDebounce";

interface DrawerSearchComponentProps {
  handleSearchResultClick: (item?: SearchResult) => void;
  title: string;
  helperText: string;
}

const DrawerSearchComponent = ({
  handleSearchResultClick,
  title,
  helperText,
}: DrawerSearchComponentProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);
  const debouncedSearchTerm = useDebounce(searchQuery, 200);

  const handleSearchClick = () => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  const generateSearchResults = () => {
    if (searchResults.length === 0) {
      return <p>{helperText}</p>;
    }

    return searchResults.map((result) => {
      const renderImage = !result.image.includes("missing");
      const handleItemClick = () => {
        handleSearchResultClick(result);
        setSearchQuery("");
      };
      return (
        <button
          key={result.id}
          className="text-sm mb-2 flex items-center gap-2 hover:opacity-75 active:opacity-50"
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
    });
  };

  useEffect(() => {
    const getSearch = async () => {
      setLoading(true);
      setSearchResults([]);
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

  return (
    <div className="text-violet-900 bg-indigo-600/15 dark:text-white dark:bg-indigo-950 rounded-t-xl flex flex-col gap-2 h-full">
      <div className="border-b border-gray-400 p-4">
        <h1 className="text-lg mb-2 text-center">{title}</h1>
        <SearchBar
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onClick={handleSearchClick}
          containerClasses="w-full"
          ref={searchRef}
        />
      </div>
      <div className="flex-1 overflow-scroll p-4 pb-20">
        {loading && <SearchLoader />}
        {generateSearchResults()}
      </div>
    </div>
  );
};

export default DrawerSearchComponent;
