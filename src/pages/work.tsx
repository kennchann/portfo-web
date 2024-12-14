import { Link } from "react-router-dom";

function Work() {
  return (
    <>
    <section className="work page-wrap">
      <div className="grid container">
        <div className="hero-content col-s grid-end section-title">
          <h1 data-scroll-section>Work Showcase</h1>
        </div>
      </div>
      <div data-scroll-section className="grid container">

        <div className="work-item">
          <div className="list col-xs">
            <span className="list-item">Project 01</span>
          </div>
          <div className="work-wrap">
            <Link
              to="/work/op"
              className="img-container img-responsive"
            >
              <img data-scroll data-scroll-speed="-0.5" src="./op-bg-1.webp" alt="" />
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
            <span className="list-item">Project 02</span>
          </div>
          <div className="work-wrap">
            <Link
              to="/work/truflation"
              className="img-container img-responsive"
            >
              <img data-scroll data-scroll-speed="-0.5" src="./truf-bg-1.webp" alt="" />
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

        <div className="work-item">
          <div className="list col-xs">
            <span className="list-item">Project 03</span>
          </div>
          <div className="work-wrap">
            <Link
              to="/work/culture-homes"
              className="img-container img-responsive"
            >
              <img data-scroll data-scroll-speed="-0.5" src="./culture-web-1.webp" alt="" />
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
            <span className="list-item">Project 04</span>
          </div>
          <div className="work-wrap">
            <Link to="/work/nuon" className="img-container img-responsive">
              <img data-scroll data-scroll-speed="-0.5" src="./nuon-poster-1.webp" alt="" />
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
            <span className="list-item">Project 05</span>
          </div>
          <div className="work-wrap">
            <Link to="/work/taihing" className="img-container img-responsive">
              <img data-scroll data-scroll-speed="-0.5" src="./taihing-bg.webp" alt="" />
            </Link>
            <div className="work-detail-wrap">
              <div className="work-detail">
                <h2 className="work-title">Tai Hing</h2>
                <span className="work-brief">
                  Tai Hing Group is a restaurant chain in Hong Kong.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="work-item">
          <div className="list col-xs">
            <span className="list-item">Project 06</span>
          </div>
          <div className="work-wrap">
            <Link
              to="/work/trusted-node"
              className="img-container img-responsive"
            >
              <img data-scroll data-scroll-speed="-0.5" src="./tnode-poster-1.webp" alt="" />
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

        <div className="work-item">
          <div className="list col-xs">
            <span className="list-item">Project 07</span>
          </div>
          <div className="work-wrap">
            <Link to="/work/skyteam" className="img-container img-responsive">
              <img data-scroll data-scroll-speed="-0.5" src="./skyteam-poster.webp" alt="" />
            </Link>
            <div className="work-detail-wrap">
              <div className="work-detail">
                <h2 className="work-title">Skyteam Education</h2>
                <span className="work-brief">
                  Offers a range of academic courses for secondary students.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="work-item">
          <div className="list col-xs">
            <span className="list-item">Project 08</span>
          </div>
          <div className="work-wrap">
            <Link
              to="/work/cfss-gradbook"
              className="img-container img-responsive"
            >
              <img data-scroll data-scroll-speed="-0.5" src="./cfss-book-1.webp" alt="" />
            </Link>
            <div className="work-detail-wrap">
              <div className="work-detail">
                <h2 className="work-title">CFSS Gradbook</h2>
                <span className="work-brief">
                  Captures the spirit and accomplishments of the graduating
                  class.
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="work-item">
          <div className="list col-xs">
            <span className="list-item">Project 09</span>
          </div>
          <div className="work-wrap">
            <Link to="/work/dogily" className="img-container img-responsive">
              <img data-scroll data-scroll-speed="-0.5" src="./dogily-mobile-1.webp" alt="" />
            </Link>
            <div className="work-detail-wrap">
              <div className="work-detail">
                <h2 className="work-title">Dogily Official</h2>
                <span className="work-brief">
                  Creating pet-human matchy accessories that are chic yet
                  timeless.
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

export default Work;
