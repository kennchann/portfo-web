import { useEffect, useRef, useState } from "react";
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

// import locomotiveScroll from "locomotive-scroll";

function App() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  // const [scrollInstance, setScrollInstance] = useState<locomotiveScroll | null>(
  //   null
  // );

  // useEffect(() => {
  //   const scrollOptions: LocomotiveScroll.InstanceOptions = {
  //     el: scrollRef.current!,
  //     smooth: true,
  //     lerp: 0.1,
  //     multiplier: 1.4,
  //     reloadOnContextChange: true,
  //     touchMultiplier: 2.5,

  //     smartphone: {
  //       smooth: false,
  //     },
  //     tablet: {
  //       smooth: false,
  //       breakpoint: 1024,
  //     },
  //   };

  //   const scroll = new locomotiveScroll(scrollOptions);
  //   setScrollInstance(scroll);

  //   return () => {
  //     if (scrollInstance) {
  //       scrollInstance.destroy();
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   if (scrollInstance) {
  //     scrollInstance.destroy();
  //     scrollInstance.init();
  //   }
  // }, [location.pathname, scrollInstance]);

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