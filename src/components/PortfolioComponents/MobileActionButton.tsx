"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import SelectableWrapper from "../UI/SelectableWrapper";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddPortfolioCoinDrawer from "./AddPortfolioCoinDrawer";

const MobileActionButton = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isMobile = useIsMobile();
  if (!isMobile) return null;

  const handleToggleMenu = () => {
    setIsOpened((prev) => !prev);
  };
  return (
    <div className="fixed bottom-20 right-8">
      <SelectableWrapper
        selected
        rounded
        shadowSize="shadow-none"
        animationStyles="hover:opacity-70 active:opacity-50 transition-opacity duration-200 ease-in-out"
      >
        <button onClick={handleToggleMenu} className="p-2">
          <Plus size={24} />
        </button>
      </SelectableWrapper>
      <AddPortfolioCoinDrawer onClose={handleToggleMenu} isOpen={isOpened} />
    </div>
  );
};

export default MobileActionButton;
