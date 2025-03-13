import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
} from "@radix-ui/react-dialog";
import React from "react";
import SelectableWrapper from "../UI/SelectableWrapper";

const AddPortfolioCoinModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SelectableWrapper selected>
          <button className="py-2 px-8 lg:px-12 xl:px-16 hover:opacity-80">
            Add Asset
          </button>
        </SelectableWrapper>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 bg-gray-200/35 z-50" />
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <DialogTitle>Modal Title</DialogTitle>
          <DialogDescription>Description</DialogDescription>
          <DialogClose />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default AddPortfolioCoinModal;
