import '../_assets/css/modules/footer.scss'

function Footer() {
  return (
    <footer>
      <div className="grid container">
        <div className="footer-left">
          <span className='col-s'>©2023 Kenneth Chan. All rights reserved</span>
          <div className='list col-xs grid-mid'>
            <a href='#' className="list-item"><span>Home</span></a>
            <a className="list-item"><span>Work</span></a>
            <a className="list-item"><span>About</span></a>
            <a className="list-item"><span>Contact</span></a>
          </div>
          <div className='list col-xs grid-mid'>
            <a className="list-item"><span>Instagram</span></a>
            <a className="list-item"><span>Behance</span></a>
            <a className="list-item"><span>LinkedIn</span></a>
          </div>
        </div>
        <button className='btn-l grid-end'>
          <a href="mailto:nethhsd@gmail.com?subject=Hello">Let's Talk</a>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
