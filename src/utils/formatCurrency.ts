export const formatCurrency = (currencyValue: number) => {
  const number = new Intl.NumberFormat().format(currencyValue);
  return number;
};
