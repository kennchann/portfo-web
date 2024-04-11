import { Helmet } from 'react-helmet';
import Arrow from "../assets/svg/arrow.svg";
import { useNavigate } from "react-router-dom";

function TaiHing() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
    <Helmet>
      <title>Tai Hing | Kenneth Chan</title>
    </Helmet>
    <div className="prj-btn-wrap btn-fixed back">
      <button className="prj-btn" onClick={handleBack}>
        <img className="arrow" src={Arrow} alt="Arrow" />
        <h2>Back</h2>
      </button>
    </div>
    <div className="prj-btn-wrap btn-fixed btn-blue">
      <a href="https://www.taihing.com/" target="_blank">
        <button className="prj-btn">
          <h2>Live Site</h2>
          <img className="arrow" src={Arrow} alt="Arrow" />
        </button>
      </a>
    </div>
      <div data-scroll-section className="project wrap">
        <section className="prj-hero">
          <div className="grid container prj-title">
            <div className="prj-container col-xl">
              <div className="prj-info">
                <h1 className="prj-name">Tai Hing</h1>
                <h2 className="prj-yr">©2019</h2>
              </div>
            </div>
          </div>
          <div className="prj-img img-container img-responsive">
          <img data-scroll data-scroll-speed="-3" src="../taihing-bg.webp" alt="" />
          </div>
        </section>

        <section className="excerpt wrap prj-excerpt">
          <div className="grid container">
            <div className="grid-col col-s list">
              <span className="highlight list-item">Project Summary</span>
            </div>
            <div className="grid-col col-xl">
              <p>
              Tai Hing Group is a restaurant chain in Hong Kong. As of May 2019, it operates 9 brands, with a total of 191 branches. The objective of the project was to develop a website design that seamlessly integrates with the Tai Hing brand identity, while establishing a professional and contemporary ambiance. By incorporating the brand's distinctive tone, we aimed to deliver a website that reflects the company's commitment to excellence and captures the essence of Tai Hing's unique dining experience.
              </p>
            </div>
          </div>
        </section>

        <section className="excerpt wrap prj-excerpt">
          <div className="grid container">
            <div className="grid-col col-s list">
              <span className="highlight list-item">Project Info</span>
            </div>
            <div className="grid-col col-xl prj-list">
              <div className="col-s list">
                <p className="list-item">Client</p>
              </div>
              <div className="col-xl list">
                <p className="list-item">Tai Hing Group Holdings Limited</p>
              </div>
            </div>
            <div className="grid-col col-xl prj-list">
              <div className="col-s list">
                <p className="list-item">Type</p>
              </div>
              <div className="col-xl list">
                <p className="list-item">Corporate Website</p>
              </div>
            </div>
            <div className="grid-col col-xl prj-list">
              <div className="col-s list">
                <p className="list-item">Capabilities</p>
              </div>
              <div className="col-xl list">
                <p className="list-item">Web Design</p>
              </div>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-s">
              <div className="img-container aspect-1-1">
                <img src="../taihing-logo.webp" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="img-container aspect-16-9">
                <img data-scroll data-scroll-speed="-0.5" src="../taihing-web-1.webp" alt="" />
              </div>
            </div>
            <div className="col-full">
              <div className="img-container aspect-16-9 img-responsive">
                <img data-scroll data-scroll-speed="-0.5" src="../taihing-web-2.webp" alt="" />
              </div>
            </div>
            <div className="col-full">
              <div className="img-container aspect-9-10">
                <img src="../taihing-layout.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default TaiHing;
