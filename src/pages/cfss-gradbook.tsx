import { Helmet } from 'react-helmet';
import Arrow from "../assets/svg/arrow.svg";
import { useNavigate } from "react-router-dom";

function GradBook() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
    <Helmet>
      <title>CFSS GradBook | Kenneth Chan</title>
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
                <h1 className="prj-name">CFSS Gradbook</h1>
                <h2 className="prj-yr">©2020</h2>
              </div>
            </div>
          </div>
          <div className="prj-img img-container img-responsive">
          <img data-scroll data-scroll-speed="-3" src="../cfss-book-1.webp" alt="" />
          </div>
        </section>

        <section data-scroll className="excerpt wrap prj-excerpt">
          <div className="grid container">
            <div className="grid-col col-s list">
              <span className="highlight list-item">Project Summary</span>
            </div>
            <div className="grid-col col-xl">
              <p>
                The CFSS Class of 2020 Graduation Book will feature a bold and
                memorable design that captures the spirit and accomplishments of
                the graduating class. The design will incorporate vibrant
                colors, unique typography, and innovative layouts to create a
                visually stunning publication that celebrates the achievements
                and memories of this special group of students.
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
                <p className="list-item">CFSS Class of 2020</p>
              </div>
            </div>
            <div className="grid-col col-xl prj-list">
              <div className="col-s list">
                <p className="list-item">Type</p>
              </div>
              <div className="col-xl list">
                <p className="list-item">Publication</p>
              </div>
            </div>
            <div className="grid-col col-xl prj-list">
              <div className="col-s list">
                <p className="list-item">Capabilities</p>
              </div>
              <div className="col-xl list">
                <p className="list-item">Art Direction</p>
                <p className="list-item">Graphic Design</p>
              </div>
            </div>
          </div>
        </section>

        <section data-scroll className="preview wrap">
          <div className="grid container">
            <div className="col-s">
              <div className="img-container aspect-1-1">
                <img data-scroll data-scroll-speed="-0.5" src="../cfss-bg-1.webp" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="img-container aspect-16-9">
                <img data-scroll data-scroll-speed="-0.5" src="../cfss-print-2.webp" alt="" />
              </div>
            </div>
            <div className="col-full">
              <div className="img-container aspect-16-9 img-responsive">
                <img data-scroll data-scroll-speed="-0.5" src="../cfss-print-3.webp" alt="" />
              </div>
            </div>
            <div className="col-m">
              <div className="img-container aspect-1-1">
                <img data-scroll data-scroll-speed="-0.5" src="../cfss-bg-3.webp" alt="" />
              </div>
            </div>
            <div className="col-xxl">
              <div className="img-container aspect-4-3">
                <img data-scroll data-scroll-speed="-0.5" src="../cfss-bg-2.webp" alt="" />
              </div>
            </div>
            <div className="col-full">
              <div className="img-container aspect-16-9 img-responsive">
                <img data-scroll data-scroll-speed="-0.5" src="../cfss-print-4.webp" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="img-container aspect-4-9">
                <img src="../cfss-print-5.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default GradBook;
