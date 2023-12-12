import Arrow from "../assets/svg/arrow.svg";
import { useNavigate } from "react-router-dom";

function Nuon() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
    <div className="prj-btn-wrap btn-fixed back">
      <button className="prj-btn" onClick={handleBack}>
        <img className="arrow" src={Arrow} alt="Arrow" />
        <h2>Back</h2>
      </button>
    </div>
    <div className="prj-btn-wrap btn-fixed btn-blue">
      <a href="https://nuon.fi/" target="_blank">
        <button className="prj-btn">
          <h2>Live Site</h2>
          <img className="arrow" src={Arrow} alt="Arrow" />
        </button>
      </a>
    </div>
      <div className="project wrap">
        <section data-scroll-section className="prj-hero">
          <div className="grid container prj-title">
            <div className="prj-container col-xl">
              <div className="prj-info">
                <h1 className="prj-name">Nuon Finance</h1>
                <h2 className="prj-yr">©2022</h2>
              </div>
            </div>
          </div>
          <div className="prj-img img-container img-responsive">
          <img data-scroll data-scroll-speed="-3" src="../nuon-poster-1.webp" alt="" />
          </div>
        </section>

        <section data-scroll-section className="excerpt wrap prj-excerpt">
          <div className="grid container">
            <div className="grid-col col-s list">
              <span className="highlight list-item">Project Summary</span>
            </div>
            <div className="grid-col col-xl">
              <p>
                Nuon.fi is a safe and transparent DeFi protocol where users can
                mint Nuon flatcoins to hedge against inflation and take
                advantage of arbitrage opportunities. The goal is to create a
                visual identity that reflects the company's values of consensus,
                evolutionary movement, world-centric thinking, sovereignty,
                equality via pluralism, natural hierarchy, leading edge of
                consciousness, and multiple perspectives of community.
              </p>
            </div>
          </div>
        </section>

        <section data-scroll-section className="excerpt wrap prj-excerpt">
          <div className="grid container">
            <div className="grid-col col-s list">
              <span className="highlight list-item">Project Info</span>
            </div>
            <div className="grid-col col-xl prj-list">
              <div className="col-s list">
              <p className="list-item">Client</p>
              </div>
              <div className="col-xl list">
                <p className="list-item">Laguna Labs</p>
              </div>
            </div>
            <div className="grid-col col-xl prj-list">
              <div className="col-s list">
              <p className="list-item">Type</p>
              </div>
              <div className="col-xl list">
                <p className="list-item">Digital Products</p>
              </div>
            </div>
            <div className="grid-col col-xl prj-list">
              <div className="col-s list">
              <p className="list-item">Capabilities</p>
              </div>
              <div className="col-xl list">
                <p className="list-item">Branding</p>
                <p className="list-item">Web Design</p>
                <p className="list-item">UI/ UX Design</p>
                <p className="list-item">Graphic Design</p>
                <p className="list-item">Web Development</p>
              </div>
            </div>
          </div>
        </section>

        <section data-scroll-section className="preview wrap">
          <div className="grid container">
            <div data-scroll className="col-s">
              <div className="img-container aspect-1-1">
                <img src="../nuon-logo.webp" alt="" />
              </div>
            </div>
            <div data-scroll className="col-xl">
              <div className="img-container aspect-16-9">
                <img data-scroll data-scroll-speed="-0.5" src="../nuon-bg.webp" alt="" />
              </div>
            </div>
            <div data-scroll className="col-full">
              <div className="img-container aspect-16-9 img-responsive">
                <img data-scroll data-scroll-speed="-0.5" src="../nuon-web-1.webp" alt="" />
              </div>
            </div>
            <div data-scroll className="col-xl flex">
              <div className="img-container aspect-16-9">
                <img src="../nuon-color-1.webp" alt="" />
              </div>
              <div className="img-container aspect-16-9">
                <img src="../nuon-color-2.webp" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section data-scroll-section className="excerpt wrap">
          <div className="grid container">
            <div data-scroll className="col-xl">
              <p>
                The design direction is modern, sophisticated, and memorable,
                with a focus on natural hierarchy, multiple perspectives of
                community, and leading edge technology. Responsive UI design is
                also built for different devices for user friendliness.
              </p>
            </div>
          </div>
        </section>

        <section data-scroll-section className="preview wrap">
          <div className="grid container">
            <div data-scroll className="col-full">
              <div className="img-container aspect-16-9">
                <img data-scroll data-scroll-speed="-0.5" src="../nuon-ui-1.webp" alt="" />
              </div>
            </div>
            <div data-scroll className="col-m">
              <div className="img-container aspect-1-1">
                <img data-scroll data-scroll-speed="-0.5" src="../nuon-ui-2.webp" alt="" />
              </div>
            </div>
            <div data-scroll className="col-xxl">
              <div className="img-container aspect-4-3">
                <img data-scroll data-scroll-speed="-0.5" src="../nuon-ui-3.webp" alt="" />
              </div>
            </div>
            <div data-scroll className="col-full">
              <div className="img-container aspect-16-9">
                <img data-scroll data-scroll-speed="-0.5" src="../nuon-ui-4.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Nuon;
