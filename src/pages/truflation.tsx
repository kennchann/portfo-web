import { Helmet } from 'react-helmet';
import Arrow from "../assets/svg/arrow.svg";
import { useNavigate } from 'react-router-dom';

function Truflation() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
    <Helmet>
      <title>Truflation | Kenneth Chan</title>
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
                <h1 className="prj-name">Truflation</h1>
                <h2 className="prj-yr">©2024</h2>
              </div>
            </div>
          </div>
          <div className="prj-img img-container img-responsive">
          <img data-scroll data-scroll-speed="-3" src="../truf-bg-1.webp" alt="" />
          </div>
        </section>

        
        <section data-scroll className="excerpt wrap prj-excerpt">
          <div className="grid container">
            <div className="grid-col col-s list">
              <span className="highlight list-item">Project Summary</span>
            </div>
            <div className="grid-col col-xl">
              <p>
              Truflation is an economic data aggregator serving independent, unbiased, real-time data on-chain and off-chain. In my role as a graphic designer for this project, I actively contributed to designing essential elements for marketing purposes. This included creating visually appealing social media templates, pitch decks, and various graphic elements. My aim was to ensure that these designs effectively captured attention and communicated the brand's message in a compelling manner.
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
                <p className="list-item">Graphic Design</p>
                <p className="list-item">Infographics</p>
                <p className="list-item">Data Visualisation</p>
                <p className="list-item">Presentation Design</p>
              </div>
            </div>
          </div>
        </section>

        <section data-scroll className="preview wrap">
          <div className="grid container">
            <div className="col-s">
              <div className="img-container aspect-1-1">
                <img src="../truf-logo.webp" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="img-container aspect-16-9">
                <img data-scroll data-scroll-speed="-0.5" src="../truf-bg-2.webp" alt="" />
              </div>
            </div>
            <div className="col-full">
              <div className="img-container aspect-16-9 img-responsive">
                <img data-scroll data-scroll-speed="-0.5" src="../truf-countdown.webp" alt="" />
              </div>
            </div>
            <div className="col-full">
              <div className="img-container aspect-16-9 img-responsive">
                <img data-scroll data-scroll-speed="-0.5" src="../truf-social-1.webp" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="img-container aspect-16-9">
                <img data-scroll data-scroll-speed="-0.5" src="../truf-info-1.webp" alt="" />
              </div>
            </div>
            <div className="col-l">
              <div className="img-container aspect-16-9">
                <img data-scroll data-scroll-speed="-0.5" src="../truf-info-2.webp" alt="" />
              </div>
            </div>
            <div className="col-l">
              <div className="img-container aspect-16-9">
                <img data-scroll data-scroll-speed="-0.5" src="../truf-social-3.webp" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="img-container aspect-16-9">
                <img data-scroll data-scroll-speed="-0.5" src="../truf-social-2.webp" alt="" />
              </div>
            </div>
            <div className="col-s">
              <div className="img-container aspect-16-9">
                <img src="../truf-social-5.webp" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="img-container aspect-16-9">
                <img data-scroll data-scroll-speed="-0.5" src="../truf-social-4.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Truflation;
