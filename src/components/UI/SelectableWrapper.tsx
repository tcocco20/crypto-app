import { type ReactNode } from "react";

interface SelectableButtonProps {
  selected: boolean;
  children: ReactNode;
}

const SelectableButton = ({ selected, children }: SelectableButtonProps) => {
  return (
    <div
      className={`p-[1px] ${
        selected
          ? "relative bg-gradient-to-b from-indigo-300 to-indigo-600 rounded-md shadow-2xl shadow-indigo-500"
          : ""
      }`}
    >
      {children}
    </div>
  );
};

export default SelectableButton;
