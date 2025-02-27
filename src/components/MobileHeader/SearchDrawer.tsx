"use client";
import { toggleSearchDrawer } from "@/lib/features/preferences/preferencesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import SearchBar from "../UI/SearchBar";

const SearchDrawer = () => {
  const searchDrawerOpen = useAppSelector(
    (state) => state.preferences.searchDrawerOpen
  );

  const dispatch = useAppDispatch();

  const toggleDrawer = () => {
    dispatch(toggleSearchDrawer());
  };

  return (
    <Drawer
      open={searchDrawerOpen}
      onClose={toggleDrawer}
      direction="bottom"
      size={"90vh"}
      className="rounded-t-2xl"
    >
      <div className="dark:bg-gray-950 bg-gray-200/45 dark:text-white text-black p-4 rounded-t-xl">
        <h1 className="text-2xl font-bold">Search</h1>
        <SearchBar value="test" onChange={() => null} onClick={() => ""} containerClasses="w-full" />
      </div>
    </Drawer>
  );
};

export default SearchDrawer;
