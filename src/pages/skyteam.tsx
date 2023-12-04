import Arrow from "../assets/svg/arrow.svg";
import { useNavigate } from "react-router-dom";

function Skyteam() {
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
                <h1 className="prj-name">Skyteam Education</h1>
                <h2 className="prj-yr">©2020</h2>
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
            <img src="../skyteam-poster.webp" alt="" />
          </div>
        </section>

        <section className="excerpt wrap prj-excerpt">
          <div className="grid container">
            <div className="grid-col col-s list">
              <span className="highlight list-item">Project Summary</span>
            </div>
            <div className="grid-col col-xl">
              <p>
                Established in 2013, Skyteam Education Centre offers a range of
                academic courses and programs to help secondary students improve
                their academic performance. The overall aim is to create a
                welcoming and engaging learning environment for secondary
                students while reflecting the center's commitment to academic
                excellence and personal growth.
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
                <p className="list-item">Skyteam Education Centre</p>
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
                <p className="list-item">Contribution</p>
              </div>
              <div className="col-xl list">
                <p className="list-item">Branding</p>
                <p className="list-item">Graphic Design</p>
              </div>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-s">
              <div className="img-container aspect-1-1">
                <img src="../skyteam-logo.webp" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="img-container aspect-4-3">
                <img src="../skyteam-bg.webp" alt="" />
              </div>
            </div>
            <div className="col-full">
              <div className="img-container aspect-16-9 img-responsive">
                <img src="../skyteam-print-1.webp" alt="" />
              </div>
            </div>
            <div className="col-xl flex">
              <div className="img-container aspect-16-9">
                <img src="../skyteam-color-1.webp" alt="" />
              </div>
              <div className="img-container aspect-16-9">
                <img src="../skyteam-color-2.webp" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="excerpt wrap">
          <div className="grid container">
            <div className="col-xl">
              <p>
                The design direction for Skyteam Education Centre is
                professional and approachable, incorporating natural textures
                and warm earthy colors such as sandrift and light apricot. The
                color scheme also includes shades of grey-blue and white rock,
                with pops of Casal blue to add freshness.
              </p>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-xl">
              <div className="img-container aspect-16-9">
                <img src="../skyteam-print-2.webp" alt="" />
              </div>
            </div>
            <div className="col-full">
              <div className="img-container aspect-16-9 img-responsive">
                <img src="../skyteam-print-3.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Skyteam;
