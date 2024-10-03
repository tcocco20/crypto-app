import { type ReactNode } from "react";

interface SelectableWrapperProps {
  selected: boolean;
  children: ReactNode;
  py?: string;
  shadowSize?: string;
}

const SelectableWrapper = ({
  selected,
  children,
  py,
  shadowSize,
}: SelectableWrapperProps) => {
  return (
    <div
      className={`p-[1px] ${
        selected
          ? `relative bg-gradient-to-b from-indigo-600 to-indigo-500 dark:from-indigo-300 dark:to-indigo-600 rounded-md shadow-indigo-500 ${
              shadowSize ? shadowSize : ""
            } text-white`
          : ""
      }`}
    >
      <div
        className={`${
          selected ? "bg-indigo-400 dark:bg-indigo-700/90 " : ""
        } rounded-md ${py ? py : ""}`}
      >
        {children}
      </div>
    </div>
  );
};

export default SelectableWrapper;
