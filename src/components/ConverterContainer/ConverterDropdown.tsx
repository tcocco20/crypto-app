import React from "react";
import Dropdown from "../UI/Dropdown";
import { ChevronDown } from "lucide-react";

const ConverterDropdown = () => {
  const placeholder = "Select Currency to begin";
  return (
    <>
      <Dropdown containerClassName="flex flex-1 text-xs items-center gap-2">
        {placeholder && (
          <p className="text-gray-400 font-thin">{placeholder}</p>
        )}
        <ChevronDown size={12} />
      </Dropdown>
    </>
  );
};

export default ConverterDropdown;
