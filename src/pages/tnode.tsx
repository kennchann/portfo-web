import Arrow from "../assets/svg/arrow.svg";

function TNode() {
  return (
    <>
      <div className="project wrap">
        <section className="prj-hero">
          <div className="grid container prj-title">
            <div className="prj-container col-xl">
              <div className="prj-info">
                <h1 className="prj-name">Trusted Node</h1>
                <h2 className="prj-yr">©2022</h2>
              </div>
            </div>
          </div>
          <div className="prj-img img-container img-responsive">
            <img src="./tnode-poster-1.webp" alt="" />
          </div>
        </section>

        <section className="excerpt wrap">
          <div className="grid container">
            <div className="col-s list">
              <span className="list-item">Branding</span>
              <span className="list-item">UI/ UX Design</span>
              <span className="list-item">Web Design</span>
              <span className="list-item">Graphic Design</span>
              <span className="list-item">Digital Products</span>
            </div>
            <div className="col-xl">
              <p>
              Trusted Node is a decentralized, non-custodial validator service and governance hub enabling users to participate in PoS blockchain rewards and governance without the need to personally operate the validator nodes. The design of Trusted Node should reflect the brand's core values of trust, reliability, and user-friendliness. The brand should have a modern, sleek, and professional look, while also feeling approachable and engaging. The design should align with the brand's mission to improve the safety, usability, and resilience of the PoS ecosystems.
              </p>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-s">
              <div className="img-container aspect-1-1">
                <img src="./tnode-logo.png" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="img-container aspect-16-9">
                <img src="./tnode-bg.png" alt="" />
              </div>
            </div>
            <div className="col-full">
              <div className="img-container aspect-16-9 img-responsive">
                <img src="./tnode-ui-1.png" alt="" />
              </div>
            </div>
            <div className="col-xl flex">
              <div className="img-container aspect-16-9">
                <img src="./tnode-color-1.png" alt="" />
              </div>
              <div className="img-container aspect-16-9">
                <img src="./tnode-color-2.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="excerpt wrap">
          <div className="grid container">
            <div className="col-xl">
              <p>
              The TNODE logo is designed to convey a sense of trustworthiness and reliability through its square frame, while also exuding user-friendliness and excitement with the vibrant orange stadium. The logo comes in three versions, each representing the brand's strong values and commitment to excellence. The token/coin icon symbolizes the brand's core values and everything we stand for, making it instantly recognizable and memorable to the audience. Overall, the TNODE logo is a powerful visual representation of the brand's identity and mission.
              </p>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-full">
              <div className="img-container aspect-16-9">
                <img src="./tnode-ui-2.png" alt="" />
              </div>
            </div>
            <div className="col-l grid-end">
              <div className="img-container aspect-4-3">
                <img src="./tnode-ui-3.png" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default TNode;
