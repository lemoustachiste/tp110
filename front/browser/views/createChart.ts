import { Chart, ChartConfiguration, registerables } from 'chart.js';
Chart.register(...registerables);

export {
  ChartConfiguration
};

export default function createChart (targetElement: HTMLCanvasElement, chartData: ChartConfiguration) {
  new Chart(targetElement, chartData);
}
