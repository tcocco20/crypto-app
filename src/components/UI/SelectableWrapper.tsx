import { type ReactNode } from "react";

interface SelectableWrapperProps {
  selected: boolean;
  children: ReactNode;
  py?: string;
  shadowSize?: string;
  widthClasses?: string;
  rounded?: boolean;
  animationStyles?: string;
}

const SelectableWrapper = ({
  selected,
  children,
  py,
  shadowSize,
  widthClasses,
  rounded,
  animationStyles,
}: SelectableWrapperProps) => {
  return (
    <div
      className={`p-[1px]${widthClasses ? " " + widthClasses : ""}${
        selected
          ? ` bg-gradient-to-b from-indigo-600 to-indigo-500 dark:from-indigo-300 dark:to-indigo-600 shadow-indigo-500 ${
              shadowSize || ""
            } text-white`
          : ""
      }${rounded ? " rounded-full" : " rounded-md"} ${animationStyles || ""}`}
    >
      <div
        className={`${selected ? "bg-indigo-400 dark:bg-indigo-700/90 " : " "}${
          py ? " " + py : ""
        }${rounded ? " rounded-full" : " rounded-md"}`}
      >
        {children}
      </div>
    </div>
  );
};

export default SelectableWrapper;
