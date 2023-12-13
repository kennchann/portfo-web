import { Helmet } from 'react-helmet';
import Arrow from "../assets/svg/arrow.svg";
import { useNavigate } from "react-router-dom";

function CultureHomes() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
    <Helmet>
      <title>Culture Homes | Kenneth Chan</title>
    </Helmet>
    <div className="prj-btn-wrap btn-fixed back">
      <button className="prj-btn" onClick={handleBack}>
        <img className="arrow" src={Arrow} alt="Arrow" />
        <h2>Back</h2>
      </button>
    </div>
    <div className="prj-btn-wrap btn-fixed btn-blue">
      <a href="https://culturehomes.com.hk/" target="_blank">
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
                <h1 className="prj-name">Culture Homes</h1>
                <h2 className="prj-yr">©2019</h2>
              </div>
            </div>
          </div>
          <div className="prj-img img-container img-responsive">
          <img data-scroll data-scroll-speed="-3" src="../culture-web-1.webp" alt="" />
          </div>
        </section>

        <section className="excerpt wrap prj-excerpt">
          <div className="grid container">
            <div className="grid-col col-s list">
              <span className="highlight list-item">Project Summary</span>
            </div>
            <div className="grid-col col-xl">
              <p>
                Culture Homes is a Hong Kong based end-to-end integrated
                solution provider for elderly care and services. The goal is to
                reflect the business's vision of providing elderly care and
                rehabilitation services that promote a youthful and energetic
                lifestyle. The design should also convey a sense of hope and
                possibility and inspire visitors to explore the services Culture
                Homes offers to improve the quality of life for seniors.
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
                <p className="list-item">Culture Homes</p>
              </div>
            </div>
            <div className="grid-col col-xl prj-list">
              <div className="col-s list">
                <p className="list-item">Type</p>
              </div>
              <div className="col-xl list">
                <p className="list-item">Ecommerce</p>
              </div>
            </div>
            <div className="grid-col col-xl prj-list">
              <div className="col-s list">
                <p className="list-item">Capabilities</p>
              </div>
              <div className="col-xl list">
                <p className="list-item">Web Design</p>
                <p className="list-item">UI/ UX Design</p>
                <p className="list-item">Graphic Design</p>
              </div>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-s">
              <div className="img-container aspect-1-1">
                <img src="../culture-logo.webp" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="img-container aspect-16-9">
                <img data-scroll data-scroll-speed="-0.5" src="../culture-bg.webp" alt="" />
              </div>
            </div>
            <div className="col-full">
              <div className="img-container aspect-16-9 img-responsive">
                <img data-scroll data-scroll-speed="-0.5" src="../culture-ui-1.webp" alt="" />
              </div>
            </div>
            <div className="col-xl flex">
              <div className="img-container aspect-16-9">
                <img src="../culture-color-1.webp" alt="" />
              </div>
              <div className="img-container aspect-16-9">
                <img src="../culture-color-2.webp" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="excerpt wrap">
          <div className="grid container">
            <div className="col-xl">
              <p>
                The design should also incorporate elements that symbolize
                growth, possibility, and new beginnings, such as sprouts,
                flowers, and butterflies. The use of playful graphics and
                animations can add an element of fun and excitement to the
                website, making it more engaging for visitors of all ages.
              </p>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-full">
              <div className="img-container aspect-9-16">
                <img src="../culture-ui-2.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default CultureHomes;
