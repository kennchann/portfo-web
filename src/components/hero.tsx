import '../_assets/css/modules/hero.scss'

function Hero() {
  return (
    <section className="hero wrap">
        <div className="grid container">
            <div className='col-s list'>
              <span className="highlight list-item">Web Design</span>
              <span className="highlight list-item">UI/ UX Design</span>
              <span className="highlight list-item">Brand Identity</span>
              <span className="highlight list-item">Web Development</span>
            </div>
            <div className="hero-content col-xl grid-mid">
              <h1>Seamlessly blending aesthetics and functionality in web and UI designs to create captivating digital experiences.</h1>
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
  );
}

export default Hero;
