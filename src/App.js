import './style/app.scss';
import Home from './Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Coucou from './Coucou';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='coucou' element={<Coucou />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
