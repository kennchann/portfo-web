import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Work from './pages/work';
import Nuon from './pages/work/nuon'
import CultureHomes from './pages/work/culture-homes';

function App() {
  return (
    <>
    <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/work' element={<Work />} />
          <Route path='/work/nuon' element={<Nuon />} />
          <Route path='/work/culture-homes' element={<CultureHomes />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
