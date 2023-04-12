import './style/app.scss';
import Search from './Search';
import Charts from './charts/Charts';

function App() {
  return (
    <div className='wrapper'>
      <h1> ❄️ Card captor Game of throne 🐺</h1>
      <div className='content'>
        <Charts />
      </div>
      <div className='content'>
        <Search />
      </div>
    </div>
  );
}

export default App;
