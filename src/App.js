import './style/app.scss';
import Search from './Search';

function App() {
  return (
    <div className='wrapper'>
      <h1>Card captor Game of throne</h1>
      <header className='wrapper__btns'>
        <Search />
      </header>
    </div>
  );
}

export default App;
