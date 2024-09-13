import { type ComponentPropsWithoutRef, type ReactNode } from "react";

interface HeaderButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
  size: "sm" | "lg";
}

const HeaderButton = ({
  children,
  size,
  className: extraClasses,
  ...props
}: HeaderButtonProps) => {
  return (
    <button
      {...props}
      className={`p-2 ${size === "sm" ? "rounded" : "rounded-lg"} text-white ${
        size === "sm" ? "text-xs" : "text-base"
      } bg-violet-950 border border-gray-700/80 flex gap-2 items-center active:opacity-50 ${extraClasses}`}
    >
      {children}
    </button>
  );
};

export default HeaderButton;
