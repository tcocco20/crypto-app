import { type ReactNode } from "react";

interface TopBarTextProps {
  text?: string;
  value: string | number;
  icon?: ReactNode;
}

const TopBarText = ({ text, value, icon }: TopBarTextProps) => {
  return (
    <div className="flex gap-2 items-center">
      {!!icon && icon}
      {!!text && (
        <span className="text-gray-300 dark:text-gray-400">{text}</span>
      )}
      <span className="text-white">{value}</span>
    </div>
  );
};

export default TopBarText;
