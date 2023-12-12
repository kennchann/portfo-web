import { useEffect, useRef, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Nav from './components/nav';
import Footer from './components/footer';

import Home from './pages/home';
import Work from './pages/work';
import Nuon from './pages/nuon';
import CultureHomes from './pages/culture-homes';
import TNode from './pages/tnode';
import Skyteam from './pages/skyteam';
import GradBook from './pages/cfss-gradbook';
import Dogily from './pages/dogily';

import locomotiveScroll from 'locomotive-scroll'

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const [scrollInstance, setScrollInstance] = useState<locomotiveScroll | null>(null);

  useEffect(() => {
    const scrollOptions: LocomotiveScroll.InstanceOptions = {
      el: scrollRef.current!,
      smooth: true,
      reloadOnContextChange: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
        breakpoint: 768
      },
    };

    const scroll = new locomotiveScroll(scrollOptions);
    setScrollInstance(scroll);

    return () => {
      if (scrollInstance) {
        scrollInstance.destroy();
      }
    };
  }, []);

  useEffect(() => {
    if (scrollInstance) {
      scrollInstance.destroy();
      scrollInstance.init();
    }
  }, [location.pathname, scrollInstance]);

  return (
    <>
      <Nav />
      <main data-scroll-container="true" ref={scrollRef}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/nuon" element={<Nuon />} />
          <Route path="/work/culture-homes" element={<CultureHomes />} />
          <Route path="/work/trusted-node" element={<TNode />} />
          <Route path="/work/skyteam" element={<Skyteam />} />
          <Route path="/work/cfss-gradbook" element={<GradBook />} />
          <Route path="/work/dogily" element={<Dogily />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;