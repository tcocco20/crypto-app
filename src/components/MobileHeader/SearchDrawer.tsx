"use client";
import { toggleSearchDrawer } from "@/lib/features/preferences/preferencesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";

const SearchDrawer = () => {
  const searchDrawerOpen = useAppSelector(
    (state) => state.preferences.searchDrawerOpen
  );

  const dispatch = useAppDispatch();

  const toggleDrawer = () => {
    dispatch(toggleSearchDrawer());
  };

  return (
    <Drawer open={searchDrawerOpen} onClose={toggleDrawer} direction="bottom">
      <div className="bg-gray-950 dark:bg-gray-200/45 text-white dark:text-black p-4 h-full">
        <h1 className="text-2xl font-bold">Search</h1>
        <input
          type="text"
          placeholder="Search..."
          className="w-full bg-gray-800 dark:bg-gray-200/60 text-white dark:text-black p-2 mt-4"
        />
      </div>
    </Drawer>
  );
};

export default SearchDrawer;
