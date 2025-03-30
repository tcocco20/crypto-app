import { type PortfolioCoinWithMarketData } from "@/lib/types/PortfolioCoinWithMarketData";
import { Dialog, DialogPortal, DialogTrigger } from "@radix-ui/react-dialog";
import EditPortfolioCoinModal from "../EditPortfolioCoinModal";

interface DesktopCoinWrapperProps {
  coin: PortfolioCoinWithMarketData;
  children: React.ReactNode;
}

const DesktopCoinWrapper = ({ coin, children }: DesktopCoinWrapperProps) => {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogPortal>
        <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-gray-950/20 z-50 backdrop-blur-sm" />
        <EditPortfolioCoinModal coin={coin} />
      </DialogPortal>
    </Dialog>
  );
};

export default DesktopCoinWrapper;
