import Arrow from "../assets/svg/arrow.svg";
import { useNavigate } from 'react-router-dom';

function CultureHomes() {
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
                <h1 className="prj-name">Culture Homes</h1>
                <h2 className="prj-yr">©2019</h2>
                <div className="grid-end prj-btn-wrap back">
                  <button className="prj-btn" onClick={handleBack}>
                    <img className="arrow" src={Arrow} alt="Arrow" />
                    <h2>Back</h2>
                  </button>
                </div>
                <div className="grid-end prj-btn-wrap btn-blue">
                  <a href="https://culturehomes.com.hk/" target="_blank">
                    <button className="prj-btn">
                      <h2>Live Site</h2>
                      <img className="arrow" src={Arrow} alt="Arrow" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="prj-img img-container img-responsive">
            <img src="../culture-web-1.webp" alt="" />
          </div>
        </section>

        <section className="excerpt wrap">
          <div className="grid container">
            <div className="col-s list">
              <span className="highlight list-item">Web Design</span>
              <span className="highlight list-item">UI/ UX Design</span>
            </div>
            <div className="col-xl">
              <p>
              Culture Homes is a Hong Kong based end-to-end integrated solution provider for elderly care and services. The goal is to reflect the business's vision of providing elderly care and rehabilitation services that promote a youthful and energetic lifestyle. The design should also convey a sense of hope and possibility and inspire visitors to explore the services Culture Homes offers to improve the quality of life for seniors.
              </p>
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
                <img src="../culture-bg.webp" alt="" />
              </div>
            </div>
            <div className="col-full">
              <div className="img-container aspect-16-9 img-responsive">
                <img src="../culture-ui-1.webp" alt="" />
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
              The design should also incorporate elements that symbolize growth, possibility, and new beginnings, such as sprouts, flowers, and butterflies. The use of playful graphics and animations can add an element of fun and excitement to the website, making it more engaging for visitors of all ages. 
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
