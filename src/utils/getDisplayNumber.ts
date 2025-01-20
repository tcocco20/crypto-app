export const getDisplayNumber = (num: number): string => {
  let numString = "0";
  if (Number.isInteger(num) && num <= 10000000000000) return num.toString();
  if (num < 1000) {
    numString = num.toFixed(8);
  }
  if (num >= 1000 && num < 1000000) {
    numString = num.toFixed(6);
  }
  if (num >= 1000000 && num < 1000000000) {
    numString = num.toFixed(3);
  }
  if (num >= 1000000000) {
    numString = (num / 1000000000).toFixed(2) + "B";
  }
  if (num >= 1000000000000) {
    numString = (num / 1000000000000).toFixed(2) + "T";
  }
  return numString;
};
