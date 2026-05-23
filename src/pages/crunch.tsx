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
    <div className="prj-btn-wrap btn-fixed btn-blue">
      <a href="https://www.figma.com/proto/f7xTinuqVAnSBsAW64NJuu/CrunchDAO?node-id=7-16125&viewport=1297%2C3908%2C0.33&t=yQmt5PUcjBKrdwbl-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=7%3A16125&page-id=1%3A90799" target="_blank">
        <button className="prj-btn">
          <h2>Prototype</h2>
          <img className="arrow" src={Arrow} alt="Arrow" />
        </button>
      </a>
    </div>
      <div className="project wrap">
        <section className="prj-hero">
          <div className="grid container prj-title">
            <div className="prj-container col-xl">
              <div className="prj-info">
                <h1 className="prj-name">CrunchDAO</h1>
                <h2 className="prj-yr">©2026</h2>
              </div>
            </div>
          </div>
          <div className="prj-img img-container img-responsive">
                <div className="img-container vid-container">
                <VideoComponent videoSource="/crunch-vid-2.mp4" />
                </div>
          </div>
        </section>

        
        <section className="excerpt wrap prj-excerpt">
          <div className="grid container">
            <div className="grid-col col-s list">
              <span className="highlight list-item">Project Summary</span>
            </div>
            <div className="grid-col col-xl">
              <p>
              CrunchDAO leverages a decentralized network of machine learning engineers to build predictive modeling markets, bridging the gap between rigorous technical infrastructure and user-centric applications. As the UI/UX and Visual Designer, my work spans the brand’s visual output, ranging from marketing collateral, whitepaper infographics, and storyboarding to motion branding and internal design assets. A notable milestone was shaping the digital experience for Crunch Capital, an AI-driven trading simulation competition. This involved designing the overall user interface and engineering the interactive user journey. By proposing a retro gaming UI aesthetic, institutional-grade sentiment analysis and backtesting were successfully gamified, resulting in a visually compelling product strictly aligned with the core brand.
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

        <section className="preview wrap">
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
            <div className="col-full">
              <div className="img-wrap">
                <div className="img-container aspect-16-9">
                  <img src="../crunch-capital-1.webp" alt="" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">Crunch Capital</span>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <p>Crunch Capital is an AI-powered trading simulation competition that <span className="feature">gamifies</span> the world of financial news analysis. It allows users to step into the shoes of a hedge fund manager with $50,000,000 in paper capital. Through a three-step engine, users select data feeds, define trading logic, and use natural language prompts to backtest two years of Bloomberg TV sentiment against Bitcoin price movements. The platform features a high-tech retro aesthetic, utilizing amber-phosphor terminal interfaces and dithered bitmap graphics to build a high-stakes, institutional atmosphere.
              </p>
              <p>As the UI/UX Designer, I collaborate closely with the marketing director and developers to <span className="feature">define the brand voice</span>, <span className="feature">build a unified visual design system</span>, and <span className="feature">architect the entire user journey</span> from the initial strategy setup to the final social performance sharing.</p>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-m">
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
            <div className="col-l">
              <div className="img-wrap">
                <div className="img-container centered vid-container aspect-5-2">
                <VideoComponent videoSource="/crunch-vid-2.mp4" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">Branding Video for Social Media</span>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="img-wrap">
                <div className="img-container centered aspect-16-9">
                  <img src="../crunch-info-1.webp" alt="" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">Infographics for Crunch Litepaper</span>
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
