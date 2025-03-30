import { type ReactNode } from "react";

const Card = ({
  children,
  className,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div className={`bg-white dark:bg-indigo-900/40 rounded-md ${className}`}>
      {children}
    </div>
  );
};

export default Card;
