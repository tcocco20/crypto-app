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
import { X } from "lucide-react";
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
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white dark:bg-gray-950 p-8 rounded-lg text-indigo-900 dark:text-white">
          <DialogTitle className="flex justify-between items-center">
            <h2 className="text-xl">Select Coin</h2>
            <DialogClose asChild>
              <button className="p-px rounded-full border border-indigo-900 dark:border-white">
                <X size={12} />
              </button>
            </DialogClose>
          </DialogTitle>
          <DialogDescription className="mt-1 text-indigo-900/60 dark:text-gray-400 mb-4">
            Search for a coin to add to portfolio
          </DialogDescription>
          <AddPortfolioCoinModalContent />
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default AddPortfolioCoinButton;
