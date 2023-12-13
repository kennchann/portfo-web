import { Helmet } from 'react-helmet';
import Arrow from "../assets/svg/arrow.svg";
import { useNavigate } from 'react-router-dom';

function Dogily() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
    <Helmet>
      <title>Dogily | Kenneth Chan</title>
    </Helmet>
    <div className="prj-btn-wrap btn-fixed back">
      <button className="prj-btn" onClick={handleBack}>
        <img className="arrow" src={Arrow} alt="Arrow" />
        <h2>Back</h2>
      </button>
    </div>
      <div data-scroll-section className="project wrap">
        <section data-scroll className="prj-hero">
          <div className="grid container prj-title">
            <div className="prj-container col-xl">
              <div className="prj-info">
                <h1 className="prj-name">Dogily</h1>
                <h2 className="prj-yr">©2022</h2>
              </div>
            </div>
          </div>
          <div className="prj-img img-container img-responsive">
          <img data-scroll data-scroll-speed="-3" src="../dogily-mobile-1.webp" alt="" />
          </div>
        </section>

        
        <section data-scroll className="excerpt wrap prj-excerpt">
          <div className="grid container">
            <div className="grid-col col-s list">
              <span className="highlight list-item">Project Summary</span>
            </div>
            <div className="grid-col col-xl">
              <p>
              Dogily is committed to sourcing the finest textiles and creating pet-human matchy accessories that are chic yet timeless. The AR filter showcases their Collin Square Scarf with 3D movements and makeup effects for users, which is also engaging and playful, allowing users to experiment with different looks and share their experiences with their followers. The filter aligns with Dogily's commitment to timeless and chic designs and provide a unique and memorable experience for users.
              </p>
            </div>
          </div>
        </section>

        <section data-scroll className="excerpt wrap prj-excerpt">
          <div className="grid container">
            <div className="grid-col col-s list">
              <span className="highlight list-item">Project Info</span>
            </div>
            <div className="grid-col col-xl prj-list">
              <div className="col-s list">
                <p className="list-item">Client</p>
              </div>
              <div className="col-xl list">
                <p className="list-item">Dogily</p>
              </div>
            </div>
            <div className="grid-col col-xl prj-list">
              <div className="col-s list">
                <p className="list-item">Type</p>
              </div>
              <div className="col-xl list">
                <p className="list-item">Commercial</p>
              </div>
            </div>
            <div className="grid-col col-xl prj-list">
              <div className="col-s list">
                <p className="list-item">Capabilities</p>
              </div>
              <div className="col-xl list">
                <p className="list-item">AR Filter</p>
                <p className="list-item">3D Modelling</p>
              </div>
            </div>
          </div>
        </section>

        <section data-scroll className="preview wrap">
          <div className="grid container">
            <div className="col-s">
              <div className="img-container aspect-1-1">
                <img src="../dogily-logo.webp" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="img-container aspect-16-9">
                <img data-scroll data-scroll-speed="-0.5" src="../dogily-bg.webp" alt="" />
              </div>
            </div>
            <div className="col-full">
              <div className="img-container aspect-16-9 img-responsive">
                <img data-scroll data-scroll-speed="-0.5" src="../dogily-filter-1.webp" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="img-container aspect-16-9">
                <img data-scroll data-scroll-speed="-0.5" src="../dogily-filter-2.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dogily;
