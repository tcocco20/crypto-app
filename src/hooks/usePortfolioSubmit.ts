import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  addCoinToPortfolio,
  editPortfolioCoin,
  removeCoinById,
} from "@/lib/features/portfolio/portfolioSlice";
import { formatPortfolioCoinDate } from "@/utils/formatPortfolioCoinDate";
import { getAmountPurchased } from "@/utils/getAmountPurchased";
import actions from "@/actions";
import { getDateForApi } from "@/utils/getDateForApi";
import { toast } from "react-toastify";
import { MarketDataArray } from "@/utils/types/MarketDataArray";
import { PortfolioCoinWithMarketData } from "@/lib/types/PortfolioCoinWithMarketData";

interface UsePortfolioCoinProps {
  coinToEdit?: PortfolioCoinWithMarketData;
  onSuccess?: () => void;
}

export const usePortfolioCoin = ({
  coinToEdit,
  onSuccess,
}: UsePortfolioCoinProps) => {
  const dispatch = useAppDispatch();
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );

  const [amount, setAmount] = useState(
    coinToEdit?.amountPurchased[selectedCurrency] || ""
  );
  const [formSubmitAttempted, setFormSubmitAttempted] = useState(!!coinToEdit);
  const [date, setDate] = useState(
    coinToEdit ? formatPortfolioCoinDate(coinToEdit.datePurchased) : ""
  );

  const handleAddCoin = async (selectedCoin?: {
    id: string;
    name: string;
    symbol: string;
    image: string;
  }) => {
    setFormSubmitAttempted(true);
    if ((!selectedCoin && !coinToEdit) || !date || invalidateAmount()) {
      return;
    }

    const datePurchased = formatPortfolioCoinDate(date);
    const apiDate = getDateForApi(date);
    let priceAtPurchase: MarketDataArray = {};

    try {
      const coinId = selectedCoin ? selectedCoin.id : coinToEdit!.coinId;
      priceAtPurchase = await actions.getHistoricalDataForPortfolio(
        coinId,
        apiDate
      );
    } catch (error) {
      toast.error("Error fetching historical data. Please try again later.");
      return;
    }

    const amountPurchased = getAmountPurchased(
      priceAtPurchase,
      +amount,
      selectedCurrency
    );

    if (selectedCoin && !coinToEdit) {
      dispatch(
        addCoinToPortfolio({
          id: Math.random().toString(36).substring(2, 9),
          coinId: selectedCoin.id,
          name: selectedCoin.name,
          symbol: selectedCoin.symbol,
          image: selectedCoin.image,
          datePurchased,
          priceAtPurchase,
          amountPurchased,
        })
      );
    } else {
      dispatch(
        editPortfolioCoin({
          id: coinToEdit!.id,
          coinId: selectedCoin?.id || coinToEdit!.coinId,
          name: selectedCoin?.name || coinToEdit!.name,
          symbol: selectedCoin?.symbol || coinToEdit!.symbol,
          image: selectedCoin?.image || coinToEdit!.image,
          datePurchased,
          priceAtPurchase,
          amountPurchased,
        })
      );
    }

    onSuccess?.();
  };

  const handleDeleteCoin = () => {
    if (coinToEdit) {
      dispatch(removeCoinById(coinToEdit.id));
      onSuccess?.();
    }
  };

  const invalidateAmount = () => !amount || +amount <= 0;

  return {
    amount,
    setAmount,
    date,
    setDate,
    formSubmitAttempted,
    handleAddCoin,
    handleDeleteCoin,
    invalidateAmount,
  };
};
