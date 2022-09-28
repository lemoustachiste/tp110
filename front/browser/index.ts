import request, { SERVER_METHODS } from './services/request';
import displayMonthData from './views/displayMonthData';
import displayDailyData from "./views/displayDailyData";

export interface DataShape {
  days: Array<{
    date: string; // ISO no minutes
    total: string;
  }>
}

async function init (): Promise<void> {
  const data: DataShape = await request('http://0.0.0.0:3333/read', SERVER_METHODS.GET);
  displayMonthData(data);
  displayDailyData(data);
}

init();
