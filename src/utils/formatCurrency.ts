const isCurrencySupported = (currencyCode: string): boolean => {
  try {
    new Intl.NumberFormat(undefined, {
      style: "currency",
      currency: currencyCode,
    });
    return true;
  } catch {
    return false;
  }
};

export const formatCurrency = (
  currencyValue: number,
  currencyDisplay = false,
  selectedCurrency = ""
) => {
  const userLocale = navigator.language || "en-US";

  if (!currencyDisplay)
    return new Intl.NumberFormat(userLocale).format(currencyValue);
  if (!selectedCurrency || !isCurrencySupported(selectedCurrency))
    return new Intl.NumberFormat(userLocale, { style: "currency" }).format(
      currencyValue
    );
  return new Intl.NumberFormat(userLocale, {
    style: "currency",
    currency: selectedCurrency,
  }).format(currencyValue);
};
