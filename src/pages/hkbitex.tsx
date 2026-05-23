import { Helmet } from 'react-helmet';
import Arrow from "../assets/svg/arrow.svg";
import { useNavigate } from 'react-router-dom';
import VideoComponent from "../assets/video/video";

function HKbitEX() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
    <Helmet>
      <title>HKbitEX | Kenneth Chan</title>
    </Helmet>
    <div className="prj-btn-wrap btn-fixed back">
      <button className="prj-btn" onClick={handleBack}>
        <img className="arrow" src={Arrow} alt="Arrow" />
        <h2>Back</h2>
      </button>
    </div>
      <div className="project wrap">
        <section className="prj-hero">
          <div className="grid container prj-title">
            <div className="prj-container col-xl">
              <div className="prj-info">
                <h1 className="prj-name">HKbitEX</h1>
                <h2 className="prj-yr">©2025</h2>
              </div>
            </div>
          </div>
          <div className="prj-img img-container img-responsive">
          <img src="../hkbitex-bg-1.webp" alt="" />
          </div>
        </section>

        
        <section className="excerpt wrap prj-excerpt">
          <div className="grid container">
            <div className="grid-col col-s list">
              <span className="highlight list-item">Project Summary</span>
            </div>
            <div className="grid-col col-xl">
              <p>
              HKbitEX leverages a decentralized network of machine learning engineers to build predictive modeling markets, bridging the gap between rigorous technical infrastructure and user-centric applications. As the UI/UX and Visual Designer, my work spans the brand’s visual output, ranging from marketing collateral, whitepaper infographics, and storyboarding to motion branding and internal design assets. A notable milestone was shaping the digital experience for Crunch Capital, an AI-driven trading simulation competition. This involved designing the overall user interface and engineering the interactive user journey. By proposing a retro gaming UI aesthetic, institutional-grade sentiment analysis and backtesting were successfully gamified, resulting in a visually compelling product strictly aligned with the core brand.
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
                <p className="list-item">HKbitEX</p>
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
                <p className="list-item">Brand Design</p>
                <p className="list-item">UX/ UI Design</p>
                <p className="list-item">Website Design</p>
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
                    <img src="../hkbitex-social-1.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../hkbitex-social-2.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../hkbitex-social-3.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../hkbitex-social-4.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../hkbitex-social-5.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-21-9">
                    <img src="../hkbitex-social-6.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../hkbitex-social-7.webp" alt="" />
                  </div>
                </div>
                <div className="carousel-group">
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../hkbitex-social-1.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../hkbitex-social-2.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../hkbitex-social-3.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../hkbitex-social-4.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../hkbitex-social-5.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../hkbitex-social-6.webp" alt="" />
                  </div>
                  <div className="carousel-card img-container aspect-16-9">
                    <img src="../hkbitex-social-7.webp" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-m col-text-left">
              <p>Through thorough <span className="feature">competitor analysis</span>, <span className="feature">market research</span>, <span className="feature">user journey mapping</span>, and <span className="feature">usability testing</span>, key opportunities were identified to enhance navigation, streamline onboarding, and improve overall usability.</p>
              <p>The work focused on bridging institutional credibility with user-friendly interfaces, resulting in a cohesive visual identity and an elevated digital experience that strengthened <span className="feature">brand perception</span> and <span className="feature">user engagement</span> across the platform.</p>
            </div>
            <div className="col-l">
              <div className="img-wrap">
                <div className="img-container inherit">
                  <img src="../hkbitex-web-1.webp" alt="" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">Homepage Redesign</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="excerpt wrap">
          <div className="grid container">
            <div className="col-xl">
              <p>A detailed audit of the existing website uncovered multiple <span className="feature">design pain points</span>, including cluttered layouts, weak information hierarchy, and unclear navigation flows. A <span className="feature">revised sitemap</span> and <span className="feature">content architecture</span> were proposed, strategically rearranging content positions to strengthen <span className="feature">UX hotspots</span>, improve <span className="feature">visual hierarchy</span>, and incorporate impactful CTAs. These changes significantly enhanced <span className="feature">user engagement</span> and created a more intuitive, conversion-focused digital experience.</p>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-s">
              <div className="img-wrap">
                <div className="img-container inherit">
                  <img src="../hkbitex-web-2.webp" alt="" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">Blog Listing Page</span>
                </div>
              </div>
            </div>

            <div className="col-s">
              <div className="img-wrap">
                <div className="img-container inherit">
                  <img src="../hkbitex-web-3.webp" alt="" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">Blog Post Page</span>
                </div>
              </div>
            </div>

            <div className="col-s">
              <div className="img-wrap">
                <div className="img-container inherit">
                  <img src="../hkbitex-web-4.webp" alt="" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">Academy Page</span>
                </div>
              </div>
            </div>

            <div className="col-s">
              <div className="img-wrap">
                <div className="img-container inherit">
                  <img src="../hkbitex-web-5.webp" alt="" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">Help Center FAQ Detail Page</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default HKbitEX;
