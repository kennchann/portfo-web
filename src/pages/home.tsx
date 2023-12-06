import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero wrap page-wrap">
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
              <button className="prj-btn">
                <h3>Coming Soon</h3>
              </button>
          </div>
        </div>
      </section>

      <section className="work featured">
        <div className="grid container">
          <div className="work-item">
            <div className="list col-xs">
              <span className="list-item">Project 01</span>
            </div>
            <div className="work-wrap">
              <Link
                to="/work/culture-homes"
                className="img-container img-responsive"
              >
                <img src="./culture-web-1.webp" alt="" />
              </Link>
              <div className="work-detail-wrap">
                <div className="work-detail">
                  <h2 className="work-title">Culture Homes</h2>
                  <span className="work-brief">
                    End-to-end integrated solution provider for elderly care and
                    services.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="work-item">
            <div className="list col-xs">
              <span className="list-item">Project 02</span>
            </div>
            <div className="work-wrap">
              <Link to="/work/nuon" className="img-container img-responsive">
                <img src="./nuon-poster-1.webp" alt="" />
              </Link>
              <div className="work-detail-wrap">
                <div className="work-detail">
                  <h2 className="work-title">Nuon Finance</h2>
                  <span className="work-brief">
                    Nuon.fi is a safe and transparent DeFi protocol.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="work-item">
            <div className="list col-xs">
              <span className="list-item">Project 03</span>
            </div>
            <div className="work-wrap">
              <Link
                to="/work/trusted-node"
                className="img-container img-responsive"
              >
                <img src="./tnode-poster-1.webp" alt="" />
              </Link>
              <div className="work-detail-wrap">
                <div className="work-detail">
                  <h2 className="work-title">Trusted Node</h2>
                  <span className="work-brief">
                    Decentralized, non-custodial validator service and
                    governance hub.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
