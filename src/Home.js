import './style/app.scss';
import Search from './Search';
import Nav from './othersComponents/Nav';

function Home() {
  return (
    <div className='wrapper'>
      <Nav />
      <h1> ❄️ Card captor Game of throne 🐺</h1>
      <div className='content'>
        <Search />
      </div>
    </div>
  );
}

export default Home;
