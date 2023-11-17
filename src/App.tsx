import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Work from './pages/work';
import Nuon from './pages/nuon';
import CultureHomes from './pages/culture-homes';
import TNode from './pages/tnode';
import Skyteam from './pages/skyteam';
import GradBook from './pages/cfss-gradbook';
import Dogily from './pages/dogily';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/nuon" element={<Nuon />} />
        <Route path="/culture-homes" element={<CultureHomes />} />
        <Route path="/trusted-node" element={<TNode />} />
        <Route path="/skyteam" element={<Skyteam />} />
        <Route path="/cfss-gradbook" element={<GradBook />} />
        <Route path="/dogily" element={<Dogily />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;