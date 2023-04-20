import { Chart } from 'react-google-charts';

function GoogleChart() {
  const data = [
    ['heros', 'Temps ecran'],
    ['Jon Snow', 30],
    ['Daenerys', 25],
    ['Arya', 10],
    ['Tyrion', 8],
    ['Cersei', 20],
  ];

  const data2 = [
    ['pour', 'contre'],
    ['oui', 44],
    ['non', 34],
  ];

  const options = {
    title: 'temps ecrans persos GOT',
    pieHole: 0.3,
    is3D: false,
    colors: ['#D7BBEB', '#E6C4A6', '#58ADF5', '#09D9A1', '#489AE8', '#BFB1DB'],
    legend: {
      position: 'right',
      alignment: 'center',
    },
    chartArea: {
      left: 10,
      top: 10,
      width: '130%',
      height: '65%',
    },
  };
  const options2 = {
    title: 'chart ex 2',
    pieHole: 0.3,
    is3D: false,
    colors: ['#09D9A1', '#02A6E6', '#D4A6E6'],
  };

  return (
    <div>
      <Chart
        chartType='PieChart'
        width='100%'
        height='60%'
        data={data}
        options={options}
      />
      <Chart
        chartType='PieChart'
        width='100%'
        height='60%'
        data={data2}
        options={options2}
      />
    </div>
  );
}

export default GoogleChart;
