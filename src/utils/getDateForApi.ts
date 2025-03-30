export const getDateForApi = (date: string) => {
  const dateObj = new Date(date);
  const day = String(dateObj.getDate() + 1).padStart(2, "0");
  const month = String(dateObj.getMonth() + 1).padStart(2, "0");
  const year = dateObj.getFullYear();
  const dateString = `${day}-${month}-${year}`;
  return dateString;
};
