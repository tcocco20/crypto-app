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
  selectedCurrency = ""
) => {
  const userLocale = navigator.language || "en-US";

  if (selectedCurrency && isCurrencySupported(selectedCurrency)) {
    const currencyVal = new Intl.NumberFormat(userLocale, {
      style: "currency",
      currency: selectedCurrency,
    }).format(currencyValue);

    return { currencyVal, supported: true };
  }

  const currencyVal = new Intl.NumberFormat(userLocale).format(currencyValue);
  return { currencyVal, supported: false };
};
