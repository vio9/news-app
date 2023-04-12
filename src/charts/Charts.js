import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

function Charts() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        options: {
          tooltip: {
            enabled: true,
          },
        },
        labels: ['red', 'blue', 'yellow'],
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)',
        ],
        hoverOffset: 4,
      },
    ],
  };
  const data2 = {
    labels: ['pratique de la natation'],
    datasets: [
      {
        options: {
          tooltip: {
            enabled: true,
          },
        },
        labels: ['pratique de la natation'],
        data: [30, 70],
        backgroundColor: ['rgb(54, 162, 235)', '#8bd4f0'],
        hoverOffset: 2,
      },
    ],
  };
  return (
    <>
      <div className='donuts-wrapper'>
        <Doughnut data={data} />
        <Doughnut data={data2} />
      </div>
    </>
  );
}
export default Charts;
