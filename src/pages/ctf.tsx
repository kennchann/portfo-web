import { Helmet } from 'react-helmet';
import Arrow from "../assets/svg/arrow.svg";
import { useNavigate } from 'react-router-dom';
import VideoComponent from "../assets/video/video";

function CTF() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
    <Helmet>
      <title>CTF Club Loyalty App | Kenneth Chan</title>
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
                <h1 className="prj-name">CTF Club Loyalty App</h1>
                <h2 className="prj-yr">©2024</h2>
              </div>
            </div>
          </div>
          <div className="prj-img img-container img-responsive">
          <img src="../ctf-bg-1.webp" alt="" />
          </div>
        </section>

        
        <section className="excerpt wrap prj-excerpt">
          <div className="grid container">
            <div className="grid-col col-s list">
              <span className="highlight list-item">Project Summary</span>
            </div>
            <div className="grid-col col-xl">
              <p>Tasked with revitalizing the CTF Club Loyalty App, my role as the UX/UI Designer involved elevating the user experience and refining the interface design. Given the existing design, the project presented numerous design issues and complexities that demanded innovative solutions to enhance usability and aesthetic appeal. By tackling these challenges head-on, we aimed to transform the app into a cutting-edge platform that exceeds user expectations and aligns seamlessly with Chow Tai Fook's brand standards.</p>
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
                <p className="list-item">Chow Tai Fook</p>
              </div>
            </div>
            <div className="grid-col col-xl prj-list">
              <div className="col-s list">
                <p className="list-item">Type</p>
              </div>
              <div className="col-xl list">
                <p className="list-item">App UX/ UI</p>
              </div>
            </div>
            <div className="grid-col col-xl prj-list">
              <div className="col-s list">
                <p className="list-item">Capabilities</p>
              </div>
              <div className="col-xl list">
                <p className="list-item">UX/ UI Design</p>
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
                  <img src="../ctf-bg-2.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-m col-text-left">
              <p>As the UI/ UX designer in this project, my main duty was to enhance the CTF Club Loyalty App to offer a seamless user experience by providing easy access to the latest news, exclusive privileges, and personalized product promotions from CTF.
              </p>
              <p>Utilizing the existing UX/UI design as a foundation, focus on <span className="feature">suggesting innovative UX solutions</span> to streamline navigation and optimize user interactions. <span className="feature">Revamp and improve the UI designs</span> to create a visually appealing interface that engages users effectively. <span className="feature">Implement user-centric features and functionalities</span> to enhance overall usability and ensure a delightful experience for CTF Club members.</p>
            </div>
            <div className="col-l">
              <div className="img-wrap">
                <div className="img-container inherit">
                  <img src="../ctf-flow.webp" alt="" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">User Flow</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-half">
              <div className="img-wrap">
                <div className="img-container aspect-1-1">
                  <img src="../ctf-grid.webp" alt="" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">Grid System</span>
                </div>
              </div>
            </div>
            <div className="col-half">
              <div className="img-wrap">
                <div className="img-container inherit">
                  <img src="../ctf-mockup-1.png" alt="" />
                </div>
                <div className="img-alt">
                  <div className='dot'></div>
                  <span className="highlight">Homepage Component</span>
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
                  <img src="../ctf-bg-3.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container card">
            <div className="col-m">
              <div className="img-wrap">
                <div className="img-container aspect-1-1">
                  <img src="../ctf-challenge-1.webp" alt="" />
                </div>
              </div>
            </div>
            <div className="card-content-container">
              <div className="card-content">
                <p><span className="feature">"We are seeking a sign-up process that is not only engaging but also meaningful for our users."
                </span></p>
                <p>The client aimed to transform the mundane registration process into an engaging and captivating experience for users. The goal was to revamp the registration flow to be <span className="feature">less monotonous</span> and <span className="feature">more interactive</span>, ensuring users feel excited and <span className="feature">motivated</span> to complete the sign-up process.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container card">
            <div className="col-m">
              <div className="img-wrap">
                <div className="img-container aspect-1-1">
                  <img src="../ctf-challenge-2.webp" alt="" />
                </div>
              </div>
            </div>
            <div className="card-content-container">
              <div className="card-content">
                <p><span className="feature">Thinking process and solution</span></p>
                <p>Incorporating the results of the <span className="feature">Chinese Zodiac sign</span> and the <span className="feature">birthday season</span> to generate an <span className="feature">unique personality and identity</span> for users was a key aspect of our strategy. By analyzing these inputs, we aimed to create a more personalized experience and surprise users with a <span className="feature">specially selected present</span> based on their characteristics.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="preview wrap">
          <div className="grid container card">
            <div className="col-full">
              <div className="img-wrap">
                <div className="img-container inherit">
                  <img src="../ctf-challenge-3.webp" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}

export default CTF;
