export const generateMonths = (firstDate: Date) => {
  const months = [];
  const currentMonth = firstDate.getMonth();
  for (let i = 0; i < 12; i++) {
    months.push(Math.abs(currentMonth + i + 1) % 12);
  }
  return months;
};
