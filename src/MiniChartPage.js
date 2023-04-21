import Nav from './othersComponents/Nav';
import DonutChart from 'react-donut-chart';
import axios from 'axios';
import { useEffect, useState } from 'react';

function MiniChartPage() {
  const [datas, setDatas] = useState([]);

  async function getDatas() {
    try {
      let res = await axios.get('https://fakestoreapi.com/products?limit=5');
      setDatas(res.data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getDatas();
  }, []);
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
      <div className='mini-chart-wrapper'>
        coucou
        {datas.map((item) => {
          return (
            <div className='content' key={item.id}>
              <h3>{item.title}</h3>
              <br />
              <p>prix : {item.price}</p>
              <img className='img-data' src={item.image} />
            </div>
          );
        })}
      </div>
    </>
  );
}
export default MiniChartPage;
