import React, { ReactNode } from "react";

const HeaderButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="p-2 rounded text-white text-xs bg-violet-950 border border-gray-700/80 flex gap-2 items-center active:opacity-50">
      {children}
    </button>
  );
};

export default HeaderButton;
