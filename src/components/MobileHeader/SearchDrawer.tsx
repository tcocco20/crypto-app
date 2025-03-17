"use client";
import { toggleSearchDrawer } from "@/lib/features/preferences/preferencesSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Drawer from "react-modern-drawer";

import "react-modern-drawer/dist/index.css";
import { type SearchResult } from "@/lib/types/SearchResult";
import DrawerSearchComponent from "../UI/DrawerSearchComponent";
import { useRouter } from "next/navigation";

const SearchDrawer = () => {
  const searchDrawerOpen = useAppSelector(
    (state) => state.preferences.searchDrawerOpen
  );
  const router = useRouter();

  const dispatch = useAppDispatch();

  const toggleDrawer = () => {
    dispatch(toggleSearchDrawer());
  };

  const handleSearchItemClick = (item: SearchResult | undefined) => {
    toggleDrawer();
    if (item) {
      router.push(`/coin/${item.id}`);
    }
  };

  return (
    <Drawer
      open={searchDrawerOpen}
      onClose={toggleDrawer}
      direction="bottom"
      size={"80vh"}
      className="rounded-t-2xl"
      lockBackgroundScroll
    >
      <DrawerSearchComponent
        handleSearchResultClick={handleSearchItemClick}
        title="Search"
        helperText="No results found, type in search bar to find coins"
      />
    </Drawer>
  );
};

export default SearchDrawer;
