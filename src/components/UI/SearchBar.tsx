import React, { forwardRef } from "react";
import HeaderButton from "./HeaderButton";
import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onClick: () => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  containerClasses?: string;
}

const SearchBar = forwardRef<HTMLInputElement, SearchBarProps>(
  ({ onClick, value, onChange, containerClasses }, ref) => {
    return (
      <HeaderButton
        className={`lg:px-4 pointer-events-none active:opacity-100 ${
          containerClasses || ""
        }`}
        onClick={onClick}
      >
        <Search size={18} strokeWidth={2.5} onClick={onClick} />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none flex-1 pointer-events-auto"
          ref={ref}
          value={value}
          onChange={onChange}
        />
      </HeaderButton>
    );
  }
);

SearchBar.displayName = "SearchBar";

export default SearchBar;
