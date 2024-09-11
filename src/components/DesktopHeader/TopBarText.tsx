import { type ReactNode } from "react";

interface TopBarTextProps {
  text: string;
  value: string | number;
  icon?: ReactNode;
}

const TopBarText = ({ text, value, icon }: TopBarTextProps) => {
  return (
    <div>
      {!!icon && icon}
      <span className="text-gray-400">{text} </span>
      <span className="text-white">{value}</span>
    </div>
  );
};

export default TopBarText;
