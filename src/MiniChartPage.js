import Nav from './othersComponents/Nav';
import DonutChart from 'react-donut-chart';
function MiniChartPage() {
  const data = [
    {
      label: 'men jon snow kills',
      value: 65,
      color: 'blue',
    },
    {
      label: 'men dany snow kills',
      value: 100,
      color: 'red',
    },
    {
      label: 'men Arya kills',
      value: 15,
      color: 'green',
    },
    {
      label: 'men the hound kills',
      value: 25,
      color: 'black',
    },
  ];

  const selectedOffset = 0;

  return (
    <>
      <Nav />
      <div>react donut chart test</div>
      <DonutChart selectedOffset={selectedOffset} data={data} />
    </>
  );
}
export default MiniChartPage;
