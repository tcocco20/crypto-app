"use client";

import { type SearchResult } from "@/lib/types/SearchResult";
import DesktopSearchComponent from "../UI/DesktopSearchComponent";
import { useRouter } from "next/navigation";

const SearchButton = () => {
  const router = useRouter();

  const handleItemSelect = (item?: SearchResult) => {
    router.push(`/coin/${item?.id}`);
  };

  return (
    <DesktopSearchComponent
      onItemSelect={handleItemSelect}
      clearOnSelect
      searchBarClasses="w-[14.2rem] lg:w-72 xl:w-96 h-full"
    />
  );
};

export default SearchButton;
