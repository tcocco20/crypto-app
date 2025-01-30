export const getShortNumber = (num: number): string => {
  if (num >= 1000 && num < 1000000) {
    return (num / 1000).toFixed(2) + "K";
  }
  if (num >= 1000000 && num < 1000000000) {
    return (num / 1000000).toFixed(2) + "M";
  }
  if (num >= 1000000000 && num < 1000000000000) {
    return (num / 1000000000).toFixed(2) + "B";
  }
  if (num >= 1000000000000) {
    return (num / 1000000000000).toFixed(2) + "T";
  }
  return num.toString();
};
