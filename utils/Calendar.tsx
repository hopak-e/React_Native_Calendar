export const getNewDateInfo = (newDate: Date) => {
  const year = newDate.getFullYear();
  const month = newDate.getMonth() + 1;
  const date = newDate.getDate();
  return { year, month, date };
};

export const getMonthInfo = (year: number, month: number) => {
  const startDay = new Date(year, month - 1, 1).getDay();
  const endDate = new Date(year, month, 0).getDate();
  const prevEndDate = new Date(year, month - 1, 0).getDate();
  const nextStartDay = new Date(year, month, 1).getDay();
  return {
    startDay,
    endDate,
    prevEndDate,
    nextStartDay,
  };
};
