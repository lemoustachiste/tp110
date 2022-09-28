import { Chart, ChartConfiguration, registerables } from 'chart.js';
import prepareMonthData from "./prepareMonthData";
import type { DataShape } from '../index';

export function displayMonthData (data: DataShape) {
  const monthData = prepareMonthData(data)
  const targetElement = document.getElementById('month');

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

  Chart.register(...registerables);
  new Chart(targetElement as HTMLCanvasElement, chartData);
}
