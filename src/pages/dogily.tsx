import Arrow from "../assets/svg/arrow.svg";
import { useNavigate } from 'react-router-dom';

function Dogily() {
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
                <h1 className="prj-name">Dogily Official</h1>
                <h2 className="prj-yr">©2022</h2>
                <div className="grid-end prj-btn-wrap back">
                  <button className="prj-btn" onClick={handleBack}>
                    <img className="arrow" src={Arrow} alt="Arrow" />
                    <h2>Back</h2>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="prj-img img-container img-responsive">
            <img src="../dogily-mobile-1.webp" alt="" />
          </div>
        </section>

        <section className="excerpt wrap">
          <div className="grid container">
            <div className="col-s list">
              <span className="list-item">AR Filter</span>
            </div>
            <div className="col-xl">
              <p>
              Dogily is committed to sourcing the finest textiles and creating pet-human matchy accessories that are chic yet timeless. The AR filter showcases their Collin Square Scarf with 3D movements and makeup effects for users, which is also engaging and playful, allowing users to experiment with different looks and share their experiences with their followers. The filter aligns with Dogily's commitment to timeless and chic designs and provide a unique and memorable experience for users.
              </p>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-s">
              <div className="img-container aspect-1-1">
                <img src="../dogily-logo.webp" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="img-container aspect-16-9">
                <img src="../dogily-bg.webp" alt="" />
              </div>
            </div>
            <div className="col-full">
              <div className="img-container aspect-16-9 img-responsive">
                <img src="../dogily-filter-1.webp" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="img-container aspect-16-9">
                <img src="../dogily-filter-2.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Dogily;
