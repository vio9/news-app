import Nav from './othersComponents/Nav';
import DonutChart from 'react-donut-chart';
function MiniChartPage() {
  const data = [
    {
      label: 'men jon snow kills',
      value: 65,
    },
    {
      label: 'men dany snow kills',
      value: 100,
    },
    {
      label: 'men Arya kills',
      value: 15,
    },
    {
      label: 'men the hound kills',
      value: 25,
    },
  ];
  const strokeColor = '#FFFFFF';
  const colors = ['#A8E9B6', '#23BCEB', '#C181F5', '#F58580'];
  const selectedOffset = 0;
  const reactDonutChartInnerRadius = 0.6;

  return (
    <>
      <Nav />
      <div>react donut chart test</div>
      <div className='mini-chart-wrapper'>
        <DonutChart
          selectedOffset={selectedOffset}
          data={data}
          innerRadius={reactDonutChartInnerRadius}
          colors={colors}
          strokeColor={strokeColor}
        />
      </div>
    </>
  );
}
export default MiniChartPage;
