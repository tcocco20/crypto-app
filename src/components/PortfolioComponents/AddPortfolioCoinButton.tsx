import {
  Dialog,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import React from "react";
import SelectableWrapper from "../UI/SelectableWrapper";
import AddPortfolioCoinModalContent from "./AddPortfolioCoinModalContent";

const AddPortfolioCoinButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SelectableWrapper selected>
          <button className="py-2 px-8 lg:px-12 xl:px-16">Add Asset</button>
        </SelectableWrapper>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-gray-950/20 z-50 backdrop-blur-sm" />
        <AddPortfolioCoinModalContent />
      </DialogPortal>
    </Dialog>
  );
};

export default AddPortfolioCoinButton;
