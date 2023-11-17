import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Nav from './components/nav.tsx'
import Footer from './components/footer.tsx'
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
    <BrowserRouter basename="/">
      <Nav />
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
      <Footer />
    </BrowserRouter>
  );
}

export default App;