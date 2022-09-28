import { Chart, ChartConfiguration, registerables } from 'chart.js';
import prepareMonthView, { MonthData } from './prepareMonthView';
import request, { SERVER_METHODS } from './request';

function displayMonthData (monthData: MonthData) {
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

async function init (): Promise<void> {
  const data = await request('http://0.0.0.0:3333/read', SERVER_METHODS.GET);
  const monthData = prepareMonthView(data);
  displayMonthData(monthData);
}

init();
