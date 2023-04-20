import './style/app.scss';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coucou from './Coucou';
import MiniChartPage from './MiniChartPage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='coucou' element={<Coucou />} />
        <Route path='mini chart' element={<MiniChartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
