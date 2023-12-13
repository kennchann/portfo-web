import Arrow from "../assets/svg/arrow.svg";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <section data-scroll-section className="unavailable">
        <div className="grid container wrap">
          <h1>Not Available</h1>
          <div className="grid-end back">
            <button className="prj-btn" onClick={handleBack}>
              <img className="arrow" src={Arrow} alt="Arrow" />
              <h2>Back</h2>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default NotFound;
