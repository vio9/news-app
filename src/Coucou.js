import Charts from './charts/Charts';
import GoogleChart from './charts/GoogleChart';
import Recharts from './charts/Recharts';
import Nav from './othersComponents/Nav';

function Coucou() {
  return (
    <div>
      Charts
      <Nav />
      <div className='content'>
        <h3>test google donut chart </h3>
        <GoogleChart />
      </div>
      <div className='content'>
        <h3>test de donuts rechart</h3>
        <Recharts />
      </div>
      <div className='content'>
        <h3>test de donuts react-chartjs-2</h3>
        <Charts />
      </div>
    </div>
  );
}

export default Coucou;
