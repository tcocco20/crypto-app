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

export const getCurrencyFormatter = (selectedCurrency = "") => {
  let userLocale = "en-US";
  if (typeof window !== "undefined") {
    userLocale = window.navigator.language;
  }

  if (selectedCurrency && isCurrencySupported(selectedCurrency)) {
    const formatter = new Intl.NumberFormat(userLocale, {
      style: "currency",
      currency: selectedCurrency,
    });

    return { formatter, supported: true };
  }

  const formatter = new Intl.NumberFormat(userLocale);
  return { formatter, supported: false };
};
