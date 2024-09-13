import { type ComponentPropsWithoutRef, type ReactNode } from "react";

interface HeaderButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}

const HeaderButton = ({ children, ...props }: HeaderButtonProps) => {
  return (
    <button
      {...props}
      className="p-2 rounded text-white text-xs bg-violet-950 border border-gray-700/80 flex gap-2 items-center active:opacity-50"
    >
      {children}
    </button>
  );
};

export default HeaderButton;
