import { type ReactNode } from "react";

const Card = ({ children }: { children: ReactNode }) => {
  return <div className="bg-indigo-950/80 rounded-md">{children}</div>;
};

export default Card;
