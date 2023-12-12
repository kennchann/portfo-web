import { Link } from "react-router-dom";
import { useState, useRef } from 'react';

function Nav(): JSX.Element {
  const [isMenuToggled, setMenuToggled] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = (): void => {
    setMenuToggled(!isMenuToggled);
  };

  return (
    <nav ref={navRef} className={`nav ${isMenuToggled ? 'active' : ''}`}>
      <div className="nav-bar grid container">
        <a href='/' className='col-s'><span>Kenneth Chan</span></a>
        <span className='col-s menu-toggle' onClick={toggleMenu}>
          {isMenuToggled ? 'Close' : 'Menu'}
        </span>
      </div>

      <div className="menu-wrap grid container">
        <div className="menu list col-xl">
          <div className="list menu-nav">
            <Link to="/work" className="menu-nav-item" onClick={toggleMenu}>
              <h1>Work</h1>
            </Link>
            <a className="menu-nav-item coming-soon" onClick={toggleMenu}>
              <h1>About</h1>
            </a>
            <a className="menu-nav-item coming-soon" onClick={toggleMenu}>
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