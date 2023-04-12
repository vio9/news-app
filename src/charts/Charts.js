import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
Chart.register(ArcElement);

function Charts() {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        label: 'My First Dataset',
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
  return (
    <>
      <p> blabla</p>
      <div className='donuts-wrapper'>
        <Doughnut data={data} />
      </div>
    </>
  );
}
export default Charts;
