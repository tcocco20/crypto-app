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
import { getInputDateFromPortfolioCoin } from "@/utils/getInputDateFromPortfolioCoin";

export const usePortfolioSubmit = (
  coinToEdit?: PortfolioCoinWithMarketData,
  onSuccess?: () => void
) => {
  const dispatch = useAppDispatch();
  const selectedCurrency = useAppSelector(
    (state) => state.preferences.selectedCurrency
  );
  const maxDate = new Date().toISOString().split("T")[0];
  const oneYearAgo = new Date(maxDate);
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const minDate = oneYearAgo.toISOString().split("T")[0];

  const [amount, setAmount] = useState(
    coinToEdit?.amountPurchased[selectedCurrency] || ""
  );
  const [formSubmitAttempted, setFormSubmitAttempted] = useState(!!coinToEdit);
  const [date, setDate] = useState(
    coinToEdit && new Date(coinToEdit.datePurchased) > oneYearAgo
      ? getInputDateFromPortfolioCoin(coinToEdit.datePurchased)
      : ""
  );

  const handleAddCoin = async (selectedCoin?: {
    id: string;
    name: string;
    symbol: string;
    image: string;
  }) => {
    setFormSubmitAttempted(true);
    if (
      (!selectedCoin && !coinToEdit) ||
      invalidateDate() ||
      invalidateAmount()
    ) {
      return;
    }

    const datePurchased = formatPortfolioCoinDate(date);
    const apiDate = getDateForApi(date);
    let priceAtPurchase: MarketDataArray = {};
    const coinId = selectedCoin ? selectedCoin.id : coinToEdit!.coinId;

    try {
      priceAtPurchase = await actions.getHistoricalDataForPortfolio(
        coinId,
        apiDate
      );
    } catch (error) {
      toast.error("Error fetching price data. Please try again later.");
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
          coinId,
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
          coinId,
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

  const invalidateDate = () => {
    const formattedDate = new Date(formatPortfolioCoinDate(date));
    return !date || formattedDate < oneYearAgo || formattedDate > new Date();
  };

  return {
    amount,
    setAmount,
    date,
    setDate,
    formSubmitAttempted,
    handleAddCoin,
    handleDeleteCoin,
    invalidateAmount,
    minDate,
    maxDate,
    dateInvalid: invalidateDate(),
    amountInvalid: invalidateAmount(),
    selectedCurrency,
  };
};
