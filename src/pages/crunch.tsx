import { Helmet } from 'react-helmet';
import Arrow from "../assets/svg/arrow.svg";
import { useNavigate } from 'react-router-dom';
import VideoComponent from "../assets/video/video";

function Crunch() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
    <Helmet>
      <title>CrunchDAO | Kenneth Chan</title>
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
                <h1 className="prj-name">CrunchDAO</h1>
                <h2 className="prj-yr">©2026</h2>
              </div>
            </div>
          </div>
          <div className="prj-img img-container img-responsive">
          <img data-scroll data-scroll-speed="-3" src="../crunch-bg-1.webp" alt="" />
          </div>
        </section>

        
        <section data-scroll className="excerpt wrap prj-excerpt">
          <div className="grid container">
            <div className="grid-col col-s list">
              <span className="highlight list-item">Project Summary</span>
            </div>
            <div className="grid-col col-xl">
              <p>
              as a UI/UX and Visual Designer at CrunchDAO, I contribute to an ecosystem where high-stakes financial data meets immersive digital experience. CrunchDAO leverages a decentralized network of machine learning engineers to build predictive modeling markets, effectively bridging the gap between rigorous technical infrastructure and user-centric applications. My work spans the brand’s visual output, ranging from marketing collateral, whitepaper infographics, storyboarding and motion branding to internal design assets. Most notably, I designed the UI/UX for Crunch Capital, an AI-driven trading simulation competition. In this project, I engineered the interactive user journey from strategy selection to social performance sharing, while adapting the platform’s high-tech retro aesthetic to gamify institutional-grade sentiment analysis and backtesting.
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
                <p className="list-item">CrunchDAO</p>
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
                <p className="list-item">UX/ UI Design</p>
                <p className="list-item">Video Editing</p>
                <p className="list-item">Infographics</p>
                <p className="list-item">Creative Direction</p>
              </div>
            </div>
          </div>
        </section>

        <section data-scroll className="preview wrap">
          <div className="grid container">
            <div className="col-full">
              <div className="carousel">
                <div className="carousel-group">
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-1.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-2.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-3.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-4.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-5.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-6.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-7.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-8.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-9.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-10.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-1-1">
                    <img src="../crunch-social-11.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-1-1">
                    <img src="../crunch-social-12.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-13.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-1-1">
                    <img src="../crunch-social-14.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-15.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-16.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-17.webp" alt="" />
                  </div>
                </div>
                <div className="carousel-group">
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-1.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-2.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-3.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-4.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-5.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-6.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-7.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-8.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-9.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-10.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-1-1">
                    <img src="../crunch-social-11.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-1-1">
                    <img src="../crunch-social-12.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-13.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-1-1">
                    <img src="../crunch-social-14.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-15.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-16.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../crunch-social-17.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-s">
              <div className="img-wrap">
                <div className="img-container centered vid-container aspect-1-1">
                <VideoComponent videoSource="/crunch-vid-1.mp4" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">Motion Graphics for Social Media</span>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="img-wrap">
                <div className="img-container centered vid-container">
                <VideoComponent videoSource="/crunch-vid-2.mp4" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">Branding Video for Social Media</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Crunch;
