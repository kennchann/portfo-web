import Arrow from "../assets/svg/arrow.svg";

function Home() {
  return (
    <>
      <section className="hero wrap">
        <div className="grid container">
          <div className="col-s list">
            <span className="highlight list-item">Web Design</span>
            <span className="highlight list-item">UI/ UX Design</span>
            <span className="highlight list-item">Brand Identity</span>
            <span className="highlight list-item">Web Development</span>
          </div>
          <div className="hero-content col-xl">
            <h1>
              Seamlessly blending aesthetics and functionality in web and UI
              designs to create captivating digital experiences.
            </h1>
            <div className="ellipse-container">
              <div className="ellipse-wrap">
                <div className="ellipse"></div>
              </div>
              <div className="ellipse-wrap">
                <div className="ellipse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="excerpt wrap">
        <div className="grid container">
          <div className="col-xl">
            <p>
              With an eye for detail and a passion for creating beautiful
              designs that are both functional and user-friendly, Kenneth is an
              accomplished UI/ Web Designer. His skills in web design, UI/UX
              design, brand design, front-end development, visual design and
              marketing design make him an invaluable asset to any team looking
              to create compelling digital experiences.
            </p>
            <button>Available soon</button>
          </div>
        </div>
      </section>

      <section className="work">
        <div className="grid container">
          <div className="work-item">
            <div className="list col-xs">
              <span className="list-item">Web Design</span>
            </div>
            <div className="work-wrap">
              <div className="img-container img-responsive">
                <img src="./culture-web-1.webp" alt="" />
              </div>
              <div className="work-detail-wrap">
                <div className="work-detail">
                  <h2 className="work-title">Culture Homes</h2>
                  <span className="work-brief">
                    End-to-end integrated solution provider for elderly care and
                    services.
                  </span>
                </div>
                <a href="/culture-homes">
                  <button className="arrow-btn">
                    <img className="arrow" src={Arrow} alt="Arrow" />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="work-item">
            <div className="list col-xs">
              <span className="list-item">Branding</span>
              <span className="list-item">UI/ UX Design</span>
              <span className="list-item">Web Design</span>
              <span className="list-item">Graphic Design</span>
              <span className="list-item">Web Development</span>
              <span className="list-item">Digital Products</span>
            </div>
            <div className="work-wrap">
              <div className="img-container img-responsive">
                <img src="./nuon-poster-1.webp" alt="" />
              </div>
              <div className="work-detail-wrap">
                <div className="work-detail">
                  <h2 className="work-title">Nuon Finance</h2>
                  <span className="work-brief">
                    Nuon.fi is a safe and transparent DeFi protocol.
                  </span>
                </div>
                <a href="/nuon">
                  <button className="arrow-btn">
                    <img className="arrow" src={Arrow} alt="Arrow" />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="work-item">
            <div className="list col-xs">
              <span className="list-item">Branding</span>
              <span className="list-item">UI/ UX Design</span>
              <span className="list-item">Web Design</span>
              <span className="list-item">Graphic Design</span>
              <span className="list-item">Digital Products</span>
            </div>
            <div className="work-wrap">
              <div className="img-container img-responsive">
                <img src="./tnode-poster-1.webp" alt="" />
              </div>
              <div className="work-detail-wrap">
                <div className="work-detail">
                  <h2 className="work-title">Trusted Node</h2>
                  <span className="work-brief">
                    Decentralized, non-custodial validator service and
                    governance hub.
                  </span>
                </div>
                <a href="/trusted-node">
                  <button className="arrow-btn">
                    <img className="arrow" src={Arrow} alt="Arrow" />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="work-item">
            <div className="list col-xs">
              <span className="list-item">Branding</span>
              <span className="list-item">Graphic Design</span>
            </div>
            <div className="work-wrap">
              <div className="img-container img-responsive">
                <img src="./skyteam-poster.webp" alt="" />
              </div>
              <div className="work-detail-wrap">
                <div className="work-detail">
                  <h2 className="work-title">Skyteam Education</h2>
                  <span className="work-brief">
                    Offers a range of academic courses for secondary students.
                  </span>
                </div>
                <a href="/skyteam">
                  <button className="arrow-btn">
                    <img className="arrow" src={Arrow} alt="Arrow" />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="work-item">
            <div className="list col-xs">
              <span className="list-item">Graphic Design</span>
              <span className="list-item">Art Direction</span>
            </div>
            <div className="work-wrap">
              <div className="img-container img-responsive">
                <img src="./cfss-book-1.webp" alt="" />
              </div>
              <div className="work-detail-wrap">
                <div className="work-detail">
                  <h2 className="work-title">CFSS Gradbook</h2>
                  <span className="work-brief">
                    Captures the spirit and accomplishments of the graduating
                    class.
                  </span>
                </div>
                <a href="/cfss-gradbook">
                  <button className="arrow-btn">
                    <img className="arrow" src={Arrow} alt="Arrow" />
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div className="work-item">
            <div className="list col-xs">
              <span className="list-item">AR Filter</span>
            </div>
            <div className="work-wrap">
              <div className="img-container img-responsive">
                <img src="./dogily-mobile-1.webp" alt="" />
              </div>
              <div className="work-detail-wrap">
                <div className="work-detail">
                  <h2 className="work-title">Dogily Official</h2>
                  <span className="work-brief">
                    Creating pet-human matchy accessories that are chic yet
                    timeless.
                  </span>
                </div>
                <a href="/dogily">
                  <button className="arrow-btn">
                    <img className="arrow" src={Arrow} alt="Arrow" />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
