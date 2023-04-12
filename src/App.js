import './style/app.scss';
import Search from './Search';
import Charts from './charts/Charts';

function App() {
  return (
    <div className='wrapper'>
      <h1>Card captor Game of throne</h1>
      <div className='content'>
        <Search />
      </div>
      <div className='content'></div>
      <Charts />
    </div>
  );
}

export default App;
