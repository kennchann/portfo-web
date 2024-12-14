import { Link } from "react-router-dom";
import '../assets/css/modules/footer.scss'

function Footer() {
  return (
    <footer>
      <div className="grid container">
        <div className="footer-left">
          <span className='col-s'>©2023 Kenneth Chan. All rights reserved</span>
          <div className='list col-xs'>
            <a href='/' className="list-item"><span>Home</span></a>
            <Link to="/work" className="list-item"><span>Work</span></Link>
            <a className="list-item coming-soon"><span>About</span></a>
            <a className="list-item coming-soon"><span>Contact</span></a>
          </div>
          <div className='list col-xs'>
            <a className="list-item"><span>Instagram</span></a>
            <a className="list-item"><span>Behance</span></a>
            <a className="list-item"><span>LinkedIn</span></a>
          </div>
        </div>
        <button className="prj-btn grid-end">
          <a href="mailto:nethhsd@gmail.com?subject=Hello"><h2>Let's Talk</h2></a>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
