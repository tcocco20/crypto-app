import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import React from "react";
import EditPortfolioCoinForm from "./EditPortfolioCoinForm";
import { PortfolioCoinWithMarketData } from "@/lib/types/PortfolioCoinWithMarketData";

interface EditPortfolioCoinModalProps {
  coin: PortfolioCoinWithMarketData;
}

const EditPortfolioCoinModal = ({ coin }: EditPortfolioCoinModalProps) => {
  return (
    <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white dark:bg-gray-950 p-8 rounded-lg text-indigo-900 dark:text-white min-w-[50rem] lg:min-w-[60rem]">
      <DialogTitle className="flex justify-between items-center">
        <h2 className="text-xl">Edit Coin</h2>
        <DialogClose asChild>
          <button className="p-px rounded-full border border-indigo-900 dark:border-white">
            <X size={12} />
          </button>
        </DialogClose>
      </DialogTitle>
      <DialogDescription className="mt-1 text-indigo-900/60 dark:text-gray-400 mb-4">
        Edit the details of the coin in your portfolio, or delete the coin from
        your portfolio. For more accurate details, add subsequent purchases of
        the same coin as a separate entry.
      </DialogDescription>
      <EditPortfolioCoinForm selectedCoin={coin} />
    </DialogContent>
  );
};

export default EditPortfolioCoinModal;
