export const generateMonths = () => {
  const today = new Date();
  const months = [];
  const currentMonth = today.getMonth();
  for (let i = 0; i < 12; i++) {
    months.unshift((currentMonth - i) % 12);
  }
  return months;
};
