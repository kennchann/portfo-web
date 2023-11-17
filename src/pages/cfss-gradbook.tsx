function GradBook() {
  return (
    <>
      <div className="project wrap">
        <section className="prj-hero">
          <div className="grid container prj-title">
            <div className="prj-container col-xl">
              <div className="prj-info">
                <h1 className="prj-name">CFSS Gradbook</h1>
                <h2 className="prj-yr">©2020</h2>
              </div>
            </div>
          </div>
          <div className="prj-img img-container img-responsive">
            <img src="./cfss-book-1.webp" alt="" />
          </div>
        </section>

        <section className="excerpt wrap">
          <div className="grid container">
            <div className="col-s list">
              <span className="list-item">Graphic Design</span>
              <span className="list-item">Art Direction</span>
            </div>
            <div className="col-xl">
              <p>
              The CFSS Class of 2020 Graduation Book will feature a bold and memorable design that captures the spirit and accomplishments of the graduating class. The design will incorporate vibrant colors, unique typography, and innovative layouts to create a visually stunning publication that celebrates the achievements and memories of this special group of students.
              </p>
            </div>
          </div>
        </section>

        <section className="preview wrap">
          <div className="grid container">
            <div className="col-s">
              <div className="img-container aspect-1-1">
                <img src="./cfss-bg-1.png" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="img-container aspect-16-9">
                <img src="./cfss-print-2.png" alt="" />
              </div>
            </div>
            <div className="col-full">
              <div className="img-container aspect-16-9 img-responsive">
                <img src="./cfss-print-3.png" alt="" />
              </div>
            </div>
            <div className="col-m">
              <div className="img-container aspect-1-1">
                <img src="./cfss-bg-3.png" alt="" />
              </div>
            </div>
            <div className="col-xxl">
              <div className="img-container aspect-4-3">
                <img src="./cfss-bg-2.png" alt="" />
              </div>
            </div>
            <div className="col-full">
              <div className="img-container aspect-16-9 img-responsive">
                <img src="./cfss-print-4.png" alt="" />
              </div>
            </div>
            <div className="col-xl">
              <div className="img-container aspect-4-9">
                <img src="./cfss-print-5.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default GradBook;
