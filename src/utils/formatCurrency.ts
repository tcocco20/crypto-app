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

const getUserLocale = (): string => {
  if (typeof window !== "undefined") {
    const Cookies = require("js-cookie");
    return Cookies.get("locale") || window.navigator.language || "en-US";
  } else {
    const { cookies } = require("next/headers");
    return cookies().get("locale")?.value || "en-US";
  }
};

export const getCurrencyFormatter = (selectedCurrency = "") => {
  const userLocale = getUserLocale();

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
