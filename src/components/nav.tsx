import '../_assets/css/modules/nav.scss';
import { useState } from 'react';

function Nav() {
  const [isMenuToggled, setMenuToggled] = useState(false);

  const toggleMenu = () => {
    setMenuToggled(!isMenuToggled);
  };

  return (
    <nav id="nav" className={`${isMenuToggled ? 'active' : ''}`}>
      <div className="nav-bar grid container">
        <a href='#' className='col-s'><span>Kenneth Chan</span></a>
        <span className='col-s menu-toggle' onClick={toggleMenu}>
          {isMenuToggled ? 'Close' : 'Menu'}
        </span>
      </div>

      <div className="menu-wrap grid container">
        <div className="menu list col-xl grid-mid">
          <div className="list menu-nav">
            <a className="menu-nav-item">
              <h1>Work</h1>
            </a>
            <a className="menu-nav-item">
              <h1>About</h1>
            </a>
            <a className="menu-nav-item">
              <h1>Contact</h1>
            </a>
          </div>
          <div className="list">
          <span className="list-item">Instagram</span>
          <span className="list-item">Behance</span>
          <span className="list-item">LinkedIn</span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;