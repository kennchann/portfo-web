import { Helmet } from 'react-helmet';
import Arrow from "../assets/svg/arrow.svg";
import { useNavigate } from 'react-router-dom';
import VideoComponent from "../assets/video/video";

function OP() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
    <Helmet>
      <title>Ocean Park Halloween 2024 | Kenneth Chan</title>
    </Helmet>
    <div className="prj-btn-wrap btn-fixed back">
      <button className="prj-btn" onClick={handleBack}>
        <img className="arrow" src={Arrow} alt="Arrow" />
        <h2>Back</h2>
      </button>
    </div>
    <div className="prj-btn-wrap btn-fixed btn-blue">
      <a href="https://www.oceanpark.com.hk/tc/park-experience/halloween-fest-2024" target="_blank">
        <button className="prj-btn">
          <h2>Live Site</h2>
          <img className="arrow" src={Arrow} alt="Arrow" />
        </button>
      </a>
    </div>
      <div className="project wrap">
        <section className="prj-hero">
          <div className="grid container prj-title">
            <div className="prj-container col-xl">
              <div className="prj-info">
                <h1 className="prj-name">Ocean Park Halloween 2024 Campaign Site</h1>
                <h2 className="prj-yr">©2024</h2>
              </div>
            </div>
          </div>
          <div className="prj-img img-container img-responsive">
          <img src="../op-bg-1.webp" alt="" />
          </div>
        </section>

        
        <section className="excerpt wrap prj-excerpt">
          <div className="grid container">
            <div className="grid-col col-s list">
              <span className="highlight list-item">Project Summary</span>
            </div>
            <div className="grid-col col-xl">
              <p>
              The project goal was to develop a campaign website for Ocean Park's Halloween 2024 event. Serving as the UI designer, I was involved in the entire process, contributing to ideation, crafting UI elements, establishing design libraries, creating 3D visuals for the haunted house, and producing Figma prototypes to showcase interactive effects and functionality.
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
                <p className="list-item">Ocean Park</p>
              </div>
            </div>
            <div className="grid-col col-xl prj-list">
              <div className="col-s list">
                <p className="list-item">Type</p>
              </div>
              <div className="col-xl list">
                <p className="list-item">Campaign Site</p>
              </div>
            </div>
            <div className="grid-col col-xl prj-list">
              <div className="col-s list">
                <p className="list-item">Capabilities</p>
              </div>
              <div className="col-xl list">
                <p className="list-item">Web Design</p>
                <p className="list-item">UI Design</p>
                <p className="list-item">Graphic Design</p>
              </div>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-full">
              <div className="img-wrap">
                <div className="img-container aspect-16-9">
                  <img src="../op-visual-ref.webp" alt="" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">Visual Reference</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="excerpt wrap">
          <div className="grid container">
            <div className="col-xl">
              <p>
              The event's captivating theme, 'Horrors of the Hidden City,' set the stage for a truly immersive experience. The innovative concept revolved around a dynamic 3D building design, where each floor served as a portal into one of Ocean Park's six haunting attractions, engaging visitors through a seamless scrolling experience that unraveled the chilling narratives of each attraction.
              </p>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-s">
              <div className="img-wrap">
                <div className="img-container aspect-1-1 img-slideshow">
                  <img src="../op-building-1.png" alt="" />
                  <img src="../op-building-2.png" alt="" />
                  <img src="../op-building-3.png" alt="" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">Haunted House 3D Model</span>
                </div>
              </div>
            </div>
            <div className="col-xl">
              <div className="img-wrap">
                <div className="img-container centered">
                  <img src="../op-preview.webp" alt="" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">Haunted House 3D Model with scrolling animation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-xl">
              <div className="img-wrap">
                <div className="img-container centered">
                  <img src="../op-parallax.gif" alt="" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">Mouse hover parallax effect featuring layered fog and city elements</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-m col-text-left">
              <p>One significant challenge we encountered was the heavy browser loading caused by the massive file size of the 3D building element. Due to this, preloading upon webpage entry was unfeasible.
              </p>
              <p>As a solution, we initially hid the 3D building, displaying a map instead. Upon user interaction by selecting attractions, the 3D building dynamically loaded, effectively addressing and resolving the heavy loading challenge through strategic user-triggered content delivery.</p>
            </div>
            <div className="col-l">
              <div className="img-wrap">
                <div className="img-container centered vid-container">
                <VideoComponent videoSource="/op-landing-mockup.mp4" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">Landing page design in mobile version</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="excerpt wrap">
          <div className="grid container">
            <div className="col-xl">
              <p>
              I focused on UI design tasks the most, which included designing page layouts, creating UI components, and developing interactive features. I also specialized in crafting responsive designs for mobile interfaces, utilizing adaptive layouts to enhance user experience and engagement.
              </p>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-half">
              <div className="img-wrap">
                <div className="img-container inherit">
                  <img src="../op-design-1.webp" alt="" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">Document and files</span>
                </div>
              </div>
            </div>
            <div className="col-half">
              <div className="img-wrap">
                <div className="img-container inherit">
                  <img src="../op-design-2.webp" alt="" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">UI library</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default OP;
