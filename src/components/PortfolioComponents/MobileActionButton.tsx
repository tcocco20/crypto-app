"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import { Plus } from "lucide-react";
import { useState } from "react";
import AddPortfolioCoinDrawer from "./AddPortfolioCoinDrawer";
import PrimaryButton from "../UI/PrimaryButton";

const MobileActionButton = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isMobile = useIsMobile();
  if (!isMobile) return null;

  const handleToggleMenu = () => {
    setIsOpened((prev) => !prev);
  };
  return (
    <div className="fixed bottom-20 right-8">
      <PrimaryButton
        rounded
        shadowSize="shadow-none"
        onClick={handleToggleMenu}
      >
        <Plus size={24} />
      </PrimaryButton>
      <AddPortfolioCoinDrawer onClose={handleToggleMenu} isOpen={isOpened} />
    </div>
  );
};

export default MobileActionButton;
