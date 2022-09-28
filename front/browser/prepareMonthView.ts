export interface DataShape {
  days: Array<{
    date: string; // ISO no minutes
    total: string;
  }>
}

export type MonthData = number[];

export default function prepareMonthView (data: DataShape): MonthData {
  const recordedMonths = Array(12).fill(0);

  data.days.forEach(day => {
    const month = day.date.split('-')[1];
    const monthIndex = parseInt(month, 10) - 1;
    recordedMonths[monthIndex] += parseInt(day.total, 10);
  });

  return recordedMonths;
}
