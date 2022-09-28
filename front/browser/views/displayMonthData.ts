import prepareMonthData from "./prepareMonthData";
import createChart from "./createChart";
import type { DataShape } from '../index';
import type { ChartConfiguration } from './createChart';

export default function displayMonthData (data: DataShape) {
  const monthData = prepareMonthData(data)
  const targetElement = document.getElementById('monthly');

  const labels = [
    'Janvier',
    'Février',
    'Mars',
    'Avril',
    'Mai',
    'Juin',
    'Juillet',
    'Août',
    'Septembre',
    'Octobre',
    'Novembre',
    'Décembre'
  ];

  const chartData: ChartConfiguration = {
    type: 'bar',
    data: {
      labels,
      datasets: [{
        label: '2022', // TODO: no hard code bro
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        data: monthData
      }]
    }
  };

  createChart(targetElement as HTMLCanvasElement, chartData);
}
