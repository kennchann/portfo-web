import Arrow from "../assets/svg/arrow.svg";
import { useNavigate } from "react-router-dom";

function TNode() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="project wrap">
        <section className="prj-hero">
          <div className="grid container prj-title">
            <div className="prj-container col-xl">
              <div className="prj-info">
                <h1 className="prj-name">Trusted Node</h1>
                <h2 className="prj-yr">©2022</h2>
                <div className="grid-end prj-btn-wrap back">
                  <button className="prj-btn" onClick={handleBack}>
                    <img className="arrow" src={Arrow} alt="Arrow" />
                    <h2>Back</h2>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="prj-img img-container img-responsive">
            <img src="../tnode-poster-1.webp" alt="" />
          </div>
        </section>

        <section className="excerpt wrap prj-excerpt">
          <div className="grid container">
            <div className="grid-col col-s list">
              <span className="highlight list-item">Project Summary</span>
            </div>
            <div className="grid-col col-xl">
              <p>
                Trusted Node is a decentralized, non-custodial validator service
                and governance hub enabling users to participate in PoS
                blockchain rewards and governance without the need to personally
                operate the validator nodes. The design of Trusted Node should
                reflect the brand's core values of trust, reliability, and
                user-friendliness. The brand should have a modern, sleek, and
                professional look, while also feeling approachable and engaging.
                The design should align with the brand's mission to improve the
                safety, usability, and resilience of the PoS ecosystems.
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
                <p className="list-item">Laguna Labs</p>
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
                <p className="list-item">Branding</p>
                <p className="list-item">Web Design</p>
                <p className="list-item">UI/ UX Design</p>
                <p className="list-item">Graphic Design</p>
              </div>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-s">
              <div className="img-container aspect-1-1">
                <img src="../tnode-logo.webp" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="img-container aspect-16-9">
                <img src="../tnode-bg.webp" alt="" />
              </div>
            </div>
            <div className="col-full">
              <div className="img-container aspect-16-9 img-responsive">
                <img src="../tnode-ui-1.webp" alt="" />
              </div>
            </div>
            <div className="col-xl flex">
              <div className="img-container aspect-16-9">
                <img src="../tnode-color-1.webp" alt="" />
              </div>
              <div className="img-container aspect-16-9">
                <img src="../tnode-color-2.webp" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="excerpt wrap">
          <div className="grid container">
            <div className="col-xl">
              <p>
                The TNODE logo is designed to convey a sense of trustworthiness
                and reliability through its square frame, while also exuding
                user-friendliness and excitement with the vibrant orange
                stadium. The logo comes in three versions, each representing the
                brand's strong values and commitment to excellence. The
                token/coin icon symbolizes the brand's core values and
                everything we stand for, making it instantly recognizable and
                memorable to the audience. Overall, the TNODE logo is a powerful
                visual representation of the brand's identity and mission.
              </p>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-full">
              <div className="img-container aspect-16-9">
                <img src="../tnode-ui-2.webp" alt="" />
              </div>
            </div>
            <div className="col-l grid-end">
              <div className="img-container aspect-4-3">
                <img src="../tnode-ui-3.webp" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default TNode;
