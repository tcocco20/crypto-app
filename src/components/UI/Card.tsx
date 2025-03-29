import { type ReactNode } from "react";

const Card = ({
  children,
  className,
  onClick,
}: {
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <div
      className={`bg-white dark:bg-indigo-900/40 rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
