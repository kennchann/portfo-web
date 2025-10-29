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
                <div className="ellipse ellipse-fx"></div>
              </div>
              <div className="ellipse-wrap">
                <div className="ellipse ellipse-fx fx2"></div>
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
              marketing design make him an invaluable asset to any team looking to create compelling digital experiences.
            </p>
            <button className="prj-btn">
              <Link
                to="/work"
              >
              <h3>View Works</h3>
              </Link>
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
                to="/work/ctf"
                className="img-container img-responsive"
              >
                <img src="./ctf-bg-1.webp" alt="" />
              </Link>
              <div className="work-detail-wrap">
                <div className="work-detail">
                  <h2 className="work-title">CTF Club Loyalty App</h2>
                  <span className="work-brief">
                    Membership App for CTF Club.
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
              <Link
                to="/work/op"
                className="img-container img-responsive"
              >
                <img src="./op-bg-1.webp" alt="" />
              </Link>
              <div className="work-detail-wrap">
                <div className="work-detail">
                  <h2 className="work-title">Ocean Park Halloween 2024</h2>
                  <span className="work-brief">
                  A campaign website for Ocean Park's Halloween 2024 event.
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
              <Link to="/work/truflation" className="img-container img-responsive">
                <img src="./truf-bg-1.webp" alt="" />
              </Link>
              <div className="work-detail-wrap">
                <div className="work-detail">
                  <h2 className="work-title">Truflation</h2>
                  <span className="work-brief">
                    The go-to Data Oracle for RWA, Indexes, and Inflation 18M+ Data Points 60+ Data Providers.
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
