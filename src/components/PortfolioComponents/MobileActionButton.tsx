"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import SelectableWrapper from "../UI/SelectableWrapper";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import MobileActionMenu from "./MobileActionMenu";

const MobileActionButton = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isMobile = useIsMobile();
  if (!isMobile) return null;

  const handleToggleMenu = () => {
    setIsOpened((prev) => !prev);
  };
  return (
    <div className="fixed bottom-20 right-8">
      <SelectableWrapper selected rounded shadowSize="shadow-none">
        <button onClick={handleToggleMenu} className="p-2">
          {isOpened ? <X size={24} /> : <Plus size={24} />}
        </button>
      </SelectableWrapper>
      {isOpened && <MobileActionMenu />}
    </div>
  );
};

export default MobileActionButton;
