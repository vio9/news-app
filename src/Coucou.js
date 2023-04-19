import Charts from './charts/Charts';
import Recharts from './charts/Recharts';
import Nav from './othersComponents/Nav';

function Coucou() {
  return (
    <div>
      Charts
      <Nav />
      <div className='content'>
        <Recharts />
      </div>
      <div className='content'>
        <Charts />
      </div>
    </div>
  );
}

export default Coucou;
