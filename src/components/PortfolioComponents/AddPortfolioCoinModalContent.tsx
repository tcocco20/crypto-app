import React from "react";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import AddPortfolioForm from "./AddPortfolioForm";

const AddPortfolioCoinModalContent = () => {
  return (
    <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white dark:bg-gray-950 p-8 rounded-lg text-indigo-900 dark:text-white min-w-[50rem] lg:min-w-[60rem]">
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
      <AddPortfolioForm />
    </DialogContent>
  );
};

export default AddPortfolioCoinModalContent;
