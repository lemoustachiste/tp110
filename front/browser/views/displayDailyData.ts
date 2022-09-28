import createChart from "./createChart";
import type { ChartConfiguration } from './createChart';
import type { DataShape } from '../index';

export default function displayDailyData (data: DataShape) {
  const targetElement = document.getElementById('daily');

  const labels = data.days.map(day => day.date);
  const dailyData = data.days.map(day => parseInt(day.total, 10));

  const chartData: ChartConfiguration = {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: 'September', // TODO: no hard code bro
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: dailyData
      }]
    }
  };

  createChart(targetElement as HTMLCanvasElement, chartData);
}
