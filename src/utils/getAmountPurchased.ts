import { type MarketDataArray } from "./types/MarketDataArray";

export const getAmountPurchased = (
  priceAtPurchase: MarketDataArray,
  amountPurchased: number,
  selectedCurrency: string
) => {
  const amountObject = {} as MarketDataArray;

  const price = priceAtPurchase[selectedCurrency];
  const quantity = amountPurchased / price;

  for (const currency in priceAtPurchase) {
    amountObject[currency] = +(quantity * priceAtPurchase[currency]).toFixed(4);
  }

  return amountObject;
};
