"use client";
import { toggleSearchDrawer } from "@/lib/features/preferences/preferencesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import SearchBar from "../UI/SearchBar";
import { type SearchResult } from "@/lib/types/SearchResult";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import actions from "@/actions";

const SearchDrawer = () => {
  const searchDrawerOpen = useAppSelector(
    (state) => state.preferences.searchDrawerOpen
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();

  const toggleDrawer = () => {
    dispatch(toggleSearchDrawer());
  };

  const handleSearchClick = () => {
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };

  const handleLinkClick = () => {
    toggleDrawer();
    setSearchQuery("");
  };

  const generateSearchResults = () => {
    if (searchResults.length === 0) {
      return <p>No results to display</p>;
    }

    return searchResults.map((result) => {
      return (
        <Link
          key={result.id}
          className="text-sm block mb-2"
          href={`/coin/${result.id}`}
          onClick={handleLinkClick}
        >
          {result.name}
        </Link>
      );
    });
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
    <Drawer
      open={searchDrawerOpen}
      onClose={toggleDrawer}
      direction="bottom"
      size={"80vh"}
      className="rounded-t-2xl"
      lockBackgroundScroll
    >
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
    </Drawer>
  );
};

export default SearchDrawer;
