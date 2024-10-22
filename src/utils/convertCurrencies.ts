export const convertCurrencies = (
  fromCurrency: number,
  toCurrency: number,
  quantity: number
) => {
  return (fromCurrency / toCurrency) * quantity;
};
