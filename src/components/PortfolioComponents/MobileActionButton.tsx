"use client";

import { useIsMobile } from "@/hooks/useIsMobile";
import SelectableWrapper from "../UI/SelectableWrapper";
import { Plus, X } from "lucide-react";
import { useState } from "react";

const MobileActionButton = () => {
  const [isOpened, setIsOpened] = useState(false);
  const isMobile = useIsMobile();
  if (!isMobile) return null;
  return (
    <div className="fixed bottom-20 right-8">
      <SelectableWrapper selected py="p-2" rounded shadowSize="shadow-none">
        {isOpened ? <X size={24} /> : <Plus size={24} />}
      </SelectableWrapper>
    </div>
  );
};

export default MobileActionButton;
