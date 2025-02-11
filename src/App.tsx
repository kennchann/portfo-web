import { useEffect } from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import Nav from "./components/nav";
import Footer from "./components/footer";

import Home from "./pages/home";
import Work from "./pages/work";
import Nuon from "./pages/nuon";
import CultureHomes from "./pages/culture-homes";
import TNode from "./pages/tnode";
import Skyteam from "./pages/skyteam";
import GradBook from "./pages/cfss-gradbook";
import Dogily from "./pages/dogily";
import Truflation from "./pages/truflation";
import OP from "./pages/op";
import TaiHing from "./pages/taihing";
import NotFound from "./pages/not-found";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Nav />
      <main>
        <Helmet>
          <title>Kenneth Chan</title> {/* Default title */}
        </Helmet>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/truflation" element={<Truflation />} />
          <Route path="/work/op" element={<OP />} />
          <Route path="/work/taihing" element={<TaiHing />} />
          <Route path="/work/nuon" element={<Nuon />} />
          <Route path="/work/culture-homes" element={<CultureHomes />} />
          <Route path="/work/trusted-node" element={<TNode />} />
          <Route path="/work/skyteam" element={<Skyteam />} />
          <Route path="/work/cfss-gradbook" element={<GradBook />} />
          <Route path="/work/dogily" element={<Dogily />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;