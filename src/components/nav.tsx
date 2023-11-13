import { useState, useEffect } from 'react';

function Nav() {
  const [isMenuToggled, setMenuToggled] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuToggled(!isMenuToggled);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`nav ${isMenuToggled ? 'active' : ''} ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-bar grid container">
        <a href='/' className='col-s'><span>Kenneth Chan</span></a>
        <span className='col-s menu-toggle' onClick={toggleMenu}>
          {isMenuToggled ? 'Close' : 'Menu'}
        </span>
      </div>

      <div className="menu-wrap grid container">
        <div className="menu list col-xl">
          <div className="list menu-nav">
            <a className="menu-nav-item coming-soon">
              <h1>Work</h1>
            </a>
            <a className="menu-nav-item coming-soon">
              <h1>About</h1>
            </a>
            <a className="menu-nav-item coming-soon">
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