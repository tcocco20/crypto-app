export const formatChartDate = (timeStamp: number) => {
  const dateObj = new Date(timeStamp);
  const dateStr =
    dateObj.toLocaleDateString() + ", " + dateObj.toLocaleTimeString();

  return dateStr;
};
