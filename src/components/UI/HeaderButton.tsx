import { type ComponentPropsWithoutRef, type ReactNode } from "react";

interface HeaderButtonProps extends ComponentPropsWithoutRef<"button"> {
  children: ReactNode;
}

const HeaderButton = ({
  children,
  className: extraClasses,
  ...props
}: HeaderButtonProps) => {
  return (
    <button
      {...props}
      className={`p-2 rounded md:rounded-lg text-white text-xs md:text-sm lg:text-base bg-violet-950 border border-gray-700/80 flex gap-2 items-center active:opacity-50 ${extraClasses}`}
    >
      {children}
    </button>
  );
};

export default HeaderButton;
