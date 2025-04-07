import { Dialog, DialogPortal, DialogTrigger } from "@radix-ui/react-dialog";
import React from "react";
import SelectableWrapper from "../UI/SelectableWrapper";
import AddPortfolioCoinModalContent from "./AddPortfolioCoinModalContent";

const AddPortfolioCoinButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SelectableWrapper
          selected
          animationStyles="hover:opacity-70 active:opacity-50 transition-opacity duration-200 ease-in-out"
        >
          <button className="py-2 px-8 lg:px-12 xl:px-16">Add Asset</button>
        </SelectableWrapper>
      </DialogTrigger>
      <DialogPortal>
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-950/20 z-50 backdrop-blur-sm" />
        <AddPortfolioCoinModalContent />
      </DialogPortal>
    </Dialog>
  );
};

export default AddPortfolioCoinButton;
