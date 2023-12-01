import Arrow from "../assets/svg/arrow.svg";
import { useNavigate } from 'react-router-dom';

function Nuon() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="project wrap">
        <section className="prj-hero">
          <div className="grid container prj-title">
            <div className="prj-container col-xl">
              <div className="prj-info">
                <h1 className="prj-name">Nuon Finance</h1>
                <h2 className="prj-yr">©2022</h2>
                <div className="grid-end prj-btn-wrap back">
                  <button className="prj-btn" onClick={handleBack}>
                    <img className="arrow" src={Arrow} alt="Arrow" />
                    <h2>Back</h2>
                  </button>
                </div>
                <div className="grid-end prj-btn-wrap btn-blue">
                    <a href="https://nuon.fi/" target="_blank">
                  <button className="prj-btn">
                    <h2>Live Site</h2>
                    <img className="arrow" src={Arrow} alt="Arrow" />
                  </button></a>
                </div>
              </div>
            </div>
          </div>
          <div className="prj-img img-container img-responsive">
            <img src="../nuon-poster-1.webp" alt="" />
          </div>
        </section>

        <section className="excerpt wrap">
          <div className="grid container">
            <div className="col-s list">
              <span className="highlight list-item">Branding</span>
              <span className="highlight list-item">Web Design</span>
              <span className="highlight list-item">UI/ UX Design</span>
              <span className="highlight list-item">Graphic Design</span>
              <span className="highlight list-item">Web Development</span>
              <span className="highlight list-item">Digital Products</span>
            </div>
            <div className="col-xl">
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

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-s">
              <div className="img-container aspect-1-1">
                <img src="../nuon-logo.webp" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="img-container aspect-16-9">
                <img src="../nuon-bg.webp" alt="" />
              </div>
            </div>
            <div className="col-full">
              <div className="img-container aspect-16-9 img-responsive">
                <img src="../nuon-web-1.webp" alt="" />
              </div>
            </div>
            <div className="col-xl flex">
              <div className="img-container aspect-16-9">
                <img src="../nuon-color-1.webp" alt="" />
              </div>
              <div className="img-container aspect-16-9">
                <img src="../nuon-color-2.webp" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="excerpt wrap">
          <div className="grid container">
            <div className="col-xl">
              <p>
                The design direction is modern, sophisticated, and memorable, with a focus on natural hierarchy, multiple perspectives of community, and leading edge technology. Responsive UI design is also built for different devices for user friendliness.
              </p>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-full">
              <div className="img-container aspect-16-9">
                <img src="../nuon-ui-1.webp" alt="" />
              </div>
            </div>
            <div className="col-m">
              <div className="img-container aspect-1-1">
                <img src="../nuon-ui-2.webp" alt="" />
              </div>
            </div>
            <div className="col-xxl">
              <div className="img-container aspect-4-3">
                <img src="../nuon-ui-3.webp" alt="" />
              </div>
            </div>
            <div className="col-full">
              <div className="img-container aspect-16-9">
                <img src="../nuon-ui-4.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Nuon;
